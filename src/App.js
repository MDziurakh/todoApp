import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, clearCompletedTodo, clearTodo} from "./redux/todoReducer";
import TodoItem from "./components/TodoItem/TodoItem";
import {AddIcon} from "./icons";
import Modal from "./components/Modal/Modal";

function App() {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todo.todos)
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)

    const modalOpen = () =>{
        if(todos.length<1){return}
        setModal1(!modal1);
    }
    const modalCompletedOpen = () =>{
        if(todos.length<1){return}
        setModal2(!modal2);
    }

    const removeCompleted = (boolean)=>{
        if(boolean){dispatch(clearCompletedTodo())}
        else{dispatch(clearTodo())}
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        setText('')
    }
    return (
        <div className='wrapper'>
            {modal1 ? <Modal closeModal={modalOpen}  removeCompleted={removeCompleted} /> : null}
            {modal2 ? <Modal closeModal={modalCompletedOpen} removeCompleted={removeCompleted} type='completed'/> : null}

            <div className="todo-app">
                {todos.length>0 ? <h2>You have {todos.length} tasks</h2> : <h2>Your task list is empty</h2>}
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <input className='input-field' type="text" placeholder='Add new task...' value={text} onChange={(e)=>setText(e.target.value)}/>
                    <AddIcon handleSubmit={handleSubmit} />
                </form>
                <div className='btn-block'>
                    <button className={todos.length>0 ? 'clear-btn' : 'clear-btn  disable-btn'}
                            onClick={()=>modalCompletedOpen()}
                    >Clear completed</button>
                    <button className={todos.length>0 ? 'clear-btn' : 'clear-btn  disable-btn'}
                        onClick={()=>modalOpen()}
                    >Clear all</button>
                </div>
            </div>
            {todos.map((item)=>{
                return <TodoItem key={item.id} text={item.text} isDone={item.isDone} myKey={item.id}/>
            })}
        </div>
    );
}

export default App;