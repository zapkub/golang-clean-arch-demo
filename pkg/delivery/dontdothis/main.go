package main

import (
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/satori/go.uuid"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)
import _ "github.com/jinzhu/gorm/dialects/sqlite"

type Todo struct {
	ID          string
	Description string
	CreatedAt   time.Time
	UserID      string
}
type User struct {
	ID string
}

func main() {
	db, _ := gorm.Open("sqlite3", "./db.sqlite")
	db.AutoMigrate(&Todo{})
	http.HandleFunc("/todo", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		switch r.Method {
		case http.MethodPost:
			type PostTodoBody struct {
				Description string `json:"description"`
				UserID      string `json:"userId"`
			}
			var body PostTodoBody
			raw, err := ioutil.ReadAll(r.Body)
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				break
			}
			err = json.Unmarshal(raw, &body)
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				break
			}

			var todo Todo
			ID := uuid.NewV4()
			st := db.
				FirstOrCreate(&User{
					ID: body.UserID,
				}).
				Create(&Todo{
					ID:          ID.String(),
					Description: body.Description,
					UserID:      body.UserID,
				}).Find(&todo, &Todo{
				ID: ID.String(),
			})
			if st.Error != nil {
				fmt.Println(st.Error)
				w.WriteHeader(http.StatusInternalServerError)
				return
			}
			responseMessage, err := json.Marshal(todo)
			_, err = w.Write(responseMessage)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
			}
		}
	})
	fmt.Println("Start restful server at :3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
