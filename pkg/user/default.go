package user

import (
	"github.com/jinzhu/gorm"
	"go-design-pattern-demo/pkg/model"
)

type GetByIDInput struct {
	ID string
}
type CreateInput struct {
	ID string
}
type CreateOutput model.User
type GetByIDOutput model.User
type UserRepository interface {
	GetByID(input *GetByIDInput) (*GetByIDOutput, error)
	Create(input *CreateInput) (*CreateOutput, error)
}
type UserUsecase interface {
	GetByID(input *GetByIDInput) (*GetByIDOutput, error)
}

type DefaultUserRepository struct {
	DB *gorm.DB
}

func (d *DefaultUserRepository) GetByID(input *GetByIDInput) (*GetByIDOutput, error) {
	var result model.User
	st := d.DB.Find(&result, &model.User{
		ID: input.ID,
	})
	output := GetByIDOutput(result)
	return &output, st.Error
}

func (d *DefaultUserRepository) Create(input *CreateInput) (*CreateOutput, error) {
	var result model.User
	st := d.DB.Create(&model.User{
		ID:   input.ID,
		Name: input.ID,
	})
	out := CreateOutput(result)
	return &out, st.Error
}
