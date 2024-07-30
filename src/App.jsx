import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import TodosList from "./components/TodosList";
import { useEffect, useState, useRef } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const isInitialLoad = useRef(true);
    const [showFinished, setShowFinished] = useState(false)

    const strikeChange = (e,id)=>{
        let newTodo = [...todos]
        let index = newTodo.findIndex((e)=>{
            return e.uuid==id
        })
        newTodo[index].isCompleted = !(newTodo[index].isCompleted)
        setTodos(newTodo)
        
      

    }

    const handleDelete = (id) => {
        
        let newTodo = todos.filter((value)=>{
            return value.uuid!==id
        })
        setTodos(newTodo)
     }
    useEffect(() => {

        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { uuid: uuidv4(), task: todo, isCompleted: false }]);
        setTodo("");
    };

    const handleEdit = (id) => { 
        let newTodo = todos.filter((e)=>{
            return e.uuid === id
        })
        setTodo(newTodo[0].task)
        handleDelete(id)
        
     }
   

    return (
        <>
            <Navbar />
            <div className="container mt-14 md:w-2/4 bg-violet-400 h-[30rem] md:min-h-[35rem] mx-auto text-white p-5 rounded-lg shadow-2xl">
                <h1 className=" text-3xl font-bold [text-shadow:_0_3px_8px_rgb(0_0_0_/_40%)]">Todo Lists</h1>
                <div className="flex mt-4 gap-4 items-center">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={todo}
                        className="w-2/3 rounded-lg px-4 py-2 focus:outline-none text-black shadow-2xl"
                    />
                    <button
                        disabled={todo.length < 1}
                        onClick={handleSubmit}
                        className="bg-indigo-700 px-4 py-2 rounded-full hover:bg-violet-600 transition shadow-2xl disabled:bg-violet-500 active:bg-violet-800"
                    >
                        Save
                    </button>
                </div>
                <div className="flex items-center mt-4">
                    <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-indigo-100 border-indigo-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-indigo-800 focus:ring-2 dark:bg-indigo-700 dark:border-indigo-600" checked={showFinished}  onChange={()=>{setShowFinished(!showFinished)}}
                    />
                    <label
                        htmlFor="checked-checkbox"
                        className="ms-2 text-sm font-medium text-white select-none"
                    >
                        Show Finished Tasks
                    </label>
                </div>
                <h3 className="mt-5 text-2xl font-bold overflow-auto">Tasks</h3>
                <div className="h-[2px] w-full bg-black opacity-10 mt-2"></div>
                <div className="container overflow-auto h-64 md:h-80 mt-2">
                    {((todos.filter((e)=>e.isCompleted).length===0 && showFinished) || (todos.filter((e)=>e.isCompleted===false).length===0 && showFinished===false)) && (
                        <div className=" text-lg text-gray-300">There is no Tasks</div>
                    )}
                    {todos.map((item, index) => (
                       ( (showFinished && item.isCompleted===true) || (showFinished===false && item.isCompleted===false)) &&
                        <TodosList
                        key={index}
                        uuid={item.uuid}
                        task={item.task}
                        isCompleted={item.isCompleted}
                        strikeChange = {strikeChange}
                        handleDelete = {handleDelete}
                        handleEdit ={handleEdit}

                    />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
