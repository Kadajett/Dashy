import React from 'react';

import "./rightClick.scss";

export default function RightClickMenu(props) {
    const clickTop = () => {
        props.moveTodoTop(props.index);
    };
    const clickBottom = () => {
        props.moveTodoBottom(props.index);
    };
    const clickDelete = () => {
        props.removeTodo(props.index);
    };
    const clickToggle = () => {
        props.toggleTodo(props.index);
    };
    return (
        <div className="menu" id="contextMenu">
            <ul className="menu-options">
                <li className="menu-option" onClick={clickTop}>Top</li>
                <li className="menu-option" onClick={clickBottom}>Bottom</li>
                <li className="menu-option" onClick={clickDelete}>Delete</li>
                <li className="menu-option" onClick={clickToggle}>Toggle</li>
            </ul>
        </div>
    )
}
