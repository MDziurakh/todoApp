import React from 'react';
import {doneTodo, removeTodo} from "../../redux/todoReducer";
import {useDispatch} from "react-redux";
import {DoneIcon, XCircle} from "../../icons";


const TodoItem = ({text, myKey, isDone}) => {
    const dispatch = useDispatch();

    return (
        <div className='task-block'>
            <div className='done-block' onClick={() => dispatch(doneTodo(myKey))}>
                {isDone ? <DoneIcon done={true}/> : <DoneIcon done={false}/>}
            </div>
            <div className='task-text'>
                <p className={isDone ? 'done task' : 'task'}>{text}</p>
            </div>
            <div className='remove-todo' onClick={() => dispatch(removeTodo(myKey))}>
                <XCircle/>
            </div>
        </div>
    );
};

export default TodoItem;