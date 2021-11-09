import React, {useState} from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const todosInit = []


const TodoMain = () => {

    const [todos, setTodos] = useState(todosInit);



    const addTodo = todoText => {
        setTodos( todos => [...todos, {id: Date.now(), title: todoText, completed: false}] )
    }

    const changeTodoCompleted = todoId => {


        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    };



    return (
        <div className="row">
            <div className="col">
                <TodoForm saveNewTodo={addTodo} />
            </div>
            <div className="col">
                <TodoList
                    clickHandler={changeTodoCompleted}
                    todos={todos}
                />
            </div>
        </div>
    )
}

export default TodoMain;