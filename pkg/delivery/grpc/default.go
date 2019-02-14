package grpc

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"go-design-pattern-demo/pkg/delivery/grpc/proto"
	"go-design-pattern-demo/pkg/model"
	"go-design-pattern-demo/pkg/todo"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"net"
)

type DefaultTodoServer struct {
	Todo todo.TodoUsecase
}

func (d *DefaultTodoServer) GetTodos(c context.Context, in *proto.GetTodosInput) (*proto.GetTodosOutput, error) {
	out, err := d.Todo.List(&todo.ListInput{
		UserID: in.UserID,
	})
	if gorm.IsRecordNotFoundError(err) {
		return &proto.GetTodosOutput{
			Result: []*proto.TodoItem{},
		}, nil
	}

	var result []*proto.TodoItem
	for _, i := range []model.Todo(*out) {
		result = append(result, &proto.TodoItem{
			UserID:      i.UserID,
			ID:          i.ID,
			Description: i.Description,
			IsChecked:   i.IsChecked,
		})
	}

	return &proto.GetTodosOutput{
		Result: result,
	}, err
}

func (d *DefaultTodoServer) CreateTodo(c context.Context, in *proto.CreateTodoInput) (*proto.CreateTodoOutput, error) {
	output, err := d.Todo.CreateTodoAndUserIfNotExists(&todo.CreateInput{
		UserID:      in.UserID,
		Description: in.Description,
	})
	if gorm.IsRecordNotFoundError(err) {
		return &proto.CreateTodoOutput{}, nil
	}

	return &proto.CreateTodoOutput{
		Result: &proto.TodoItem{
			IsChecked:   output.IsChecked,
			Description: output.Description,
			ID:          output.ID,
			UserID:      output.UserID,
		},
	}, err
}

func (d *DefaultTodoServer) CheckTodo(context.Context, *proto.CheckTodoInput) (*proto.CheckTodoOutput, error) {
	panic("implement me")
}

func StartGRPCServer(Todo todo.TodoUsecase) {
	s := grpc.NewServer()
	a := DefaultTodoServer{
		Todo: Todo,
	}
	reflection.Register(s)
	proto.RegisterTodoServer(s, &a)
	lis, err := net.Listen("tcp",
		fmt.Sprintf(":%s", "3002"))
	if err != nil {
		panic(err)
	}
	fmt.Printf("Todo GRPC Running on :%s\n", "3002")
	err = s.Serve(lis)
	if err != nil {
		panic(err)
	}
}
