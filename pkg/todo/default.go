package todo

import (
	"errors"
	"github.com/jinzhu/gorm"
	"github.com/satori/go.uuid"
	"go-design-pattern-demo/pkg/model"
	"go-design-pattern-demo/pkg/user"
)

type CreateInput struct {
	Description string
	UserID      string
}
type CreateOutput model.Todo
type UpdateInput struct {
	ID          string
	Description string
	IsChecked   bool
}
type UpdateOutput model.Todo
type ListInput struct {
	UserID string
}
type ListOutput []model.Todo
type TodoRepository interface {
	Create(in *CreateInput) (*CreateOutput, error) // just create record
	Update(in *UpdateInput) (*UpdateOutput, error) // just update record
	List(in *ListInput) (*ListOutput, error)       // just return records
}

type ToggleInput struct {
	ID string
}
type ToggleOutput model.Todo
type TodoUsecase interface {
	CreateTodoAndUserIfNotExists(in *CreateInput) (*CreateOutput, error) // find if useID exists and create new if not, create record
	ToggleTodoByID(in *ToggleInput) (*ToggleOutput, error)               // find if task exists, change isChecked to invert of value
	List(in *ListInput) (*ListOutput, error)                             // find if user exists or not and return records of user
}

type DefaultTodoRepository struct {
	DB *gorm.DB
}

func (d *DefaultTodoRepository) List(in *ListInput) (*ListOutput, error) {
	var result ListOutput
	err := d.DB.Model(&model.Todo{}).Where(&model.Todo{
		UserID: in.UserID,
	}).Scan(&result).Error
	return &result, err
}

func (d *DefaultTodoRepository) Create(in *CreateInput) (*CreateOutput, error) {
	ID := uuid.NewV4()
	var result model.Todo
	st := d.DB.Create(&model.Todo{
		ID:          ID.String(),
		Description: in.Description,
		IsChecked:   false,
		UserID:      in.UserID,
	}).Find(&result, &model.Todo{
		ID: ID.String(),
	})
	out := CreateOutput(result)
	return &out, st.Error
}

func (d *DefaultTodoRepository) Update(in *UpdateInput) (*UpdateOutput, error) {
	panic("implement me")
}

type DefaultTodoUsecase struct {
	Todo TodoRepository
	User user.UserRepository
}

func (d *DefaultTodoUsecase) List(in *ListInput) (*ListOutput, error) {

	_, err := d.User.GetByID(&user.GetByIDInput{
		ID: in.UserID,
	})
	if gorm.IsRecordNotFoundError(err) {
		return nil, errors.New("User not found")
	}

	out, err := d.Todo.List(in)
	return out, err

}

func (d *DefaultTodoUsecase) CreateTodoAndUserIfNotExists(in *CreateInput) (*CreateOutput, error) {
	// เช็ค User ก่อนว่ามีไหม ถ้าไม่มีก็สรา้งให้
	_, err := d.User.GetByID(&user.GetByIDInput{
		ID: in.UserID,
	})
	if gorm.IsRecordNotFoundError(err) {
		_, err := d.User.Create(&user.CreateInput{
			ID: in.UserID,
		})
		if err != nil {
			return nil, err
		}
	}

	createResult, err := d.Todo.Create(&CreateInput{
		UserID:      in.UserID,
		Description: in.Description,
	})
	if err != nil {
		return nil, err
	}
	out := CreateOutput(*createResult)
	return &out, err

}

func (d *DefaultTodoUsecase) ToggleTodoByID(in *ToggleInput) (*ToggleOutput, error) {
	panic("implement me")
}
