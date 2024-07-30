import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodosList = (props) => {
    return (
        <>
            <div className="tasks mt-5 flex items-center justify-between md:w-2/3">
            <div className="flex items-center">
                <input id={props.uuid} checked={props.isCompleted} onChange={(e)=>{props.strikeChange(e,props.uuid)}} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-indigo-100 border-indigo-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-indigo-800 focus:ring-2 dark:bg-indigo-700 dark:border-indigo-600" />
                <label htmlFor={props.uuid} className={`ms-2 text-lg font-medium text-white select-none ${props.isCompleted?"line-through":""}`}>{props.task}</label>
            </div>

            <div className="buttons flex gap-5 items-center">
                <button className="bg-indigo-600 px-4 py-2 rounded-full hover:bg-violet-500 transition shadow-2xl active:bg-violet-300" onClick={(e)=>{props.handleEdit(props.uuid)}}><FaEdit /></button>
                <button className="bg-indigo-600 px-4 py-2 rounded-full hover:bg-violet-500 transition shadow-2xl active:bg-violet-300" onClick={(e)=>{props.handleDelete(props.uuid)}}><MdDelete /></button>
            </div>
            </div>
        </>
    )
}

export default TodosList