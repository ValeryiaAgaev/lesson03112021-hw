import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    return !props.todos.length
        ? <div className="alert alert-warning">The List is empty</div>
        : (
            <div className="list-group">
                {props.todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        clickHandler={props.clickHandler}
                    />)}
            </div>
        )
}

export default TodoList;