import React from "react";

const ListItem = ({item, updateTodo, deleteTodo}) =>  {
    return(
        <li
            key={item.id}
            className="list-group-item"
        >
            {item.name}
            <button
                className='bgn btn-danger btn-sm ml-4'
                onClick={deleteTodo}
            >
                x
            </button>
            <button
                className='bgn btn-info btn-sm ml-4'
                onClick={updateTodo}
            >
                u
            </button>
        </li>
    )
};

export default ListItem;