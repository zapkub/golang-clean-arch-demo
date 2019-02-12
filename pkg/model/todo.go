package model

type Todo struct {
	ID          string `json:"id" gorm:"primary_key"`
	Description string `json:"description"`
	IsChecked   bool   `json:"isChecked"`
	UserID      string `json:"userId"`
}
