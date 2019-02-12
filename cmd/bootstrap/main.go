package main

import (
	"github.com/jinzhu/gorm"
	"go-design-pattern-demo/pkg/delivery/grpc"
	"go-design-pattern-demo/pkg/delivery/restful"
	"go-design-pattern-demo/pkg/model"
	"go-design-pattern-demo/pkg/todo"
	"go-design-pattern-demo/pkg/user"
)

import _ "github.com/jinzhu/gorm/dialects/sqlite"

func NewGORMDatabaseConnection(dbType string, url string) (*gorm.DB, error) {
	db, err := gorm.Open(dbType, url)
	return db, err
}

func NewGORMSqlLiteConnection(path string) (*gorm.DB, error) {
	return NewGORMDatabaseConnection("sqlite3", path)
}

func main() {

	db, err := NewGORMSqlLiteConnection("./db.sqlite")
	if err != nil {
		panic(err)
	}
	db = db.Debug()
	db.AutoMigrate(&model.Todo{})
	db.AutoMigrate(&model.User{})

	todoRepository := todo.DefaultTodoRepository{
		DB: db,
	}
	userRepository := user.DefaultUserRepository{
		DB: db,
	}
	todoUsecase := todo.DefaultTodoUsecase{
		Todo: &todoRepository,
		User: &userRepository,
	}

	go grpc.StartGRPCServer(&todoUsecase)
	restful.StartRestfulAPI(&todoUsecase)

}
