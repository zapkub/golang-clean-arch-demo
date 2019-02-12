package restful

import (
	"encoding/json"
	"fmt"
	"go-design-pattern-demo/pkg/todo"
	"io/ioutil"
	"log"
	"net/http"
)

func StartRestfulAPI(Todo todo.TodoUsecase) {
	http.HandleFunc("/todo", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		switch r.Method {
		case http.MethodGet:
			userID := r.FormValue("userId")
			if len(userID) == 0 {
				w.WriteHeader(http.StatusBadRequest)
				return
			}
			out, err := Todo.List(&todo.ListInput{
				UserID: userID,
			})

			if err != nil {
				fmt.Println(err)
				w.WriteHeader(http.StatusBadRequest)
				break
			}

			type GetTodoOutput struct {
				Result interface{} `json:"result"`
			}
			responseMessage, err := json.Marshal(GetTodoOutput{
				Result: out,
			})
			_, err = w.Write(responseMessage)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
			}

			break
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

			output, err := Todo.CreateTodoAndUserIfNotExists(&todo.CreateInput{
				UserID:      body.UserID,
				Description: body.Description,
			})

			responseMessage, err := json.Marshal(output)
			_, err = w.Write(responseMessage)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
			}

			break
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})
	fmt.Println("Start restful server at :3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
