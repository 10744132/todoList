
import { useState } from "react";
import {BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddItem = () => {
    const [value ,setValue] =useState('');
    const dispatch =useDispatch();
    const onSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTodo({
            title:value,
        }))

    }

    return (
        <div className="flex-col w-full mx-6 mt-16 ">
            <span className="flex rounded-xl text-gray-500 my-2 ">Add to list</span>
            <div className="flex w-full h-16 gap-2">
            <div className="flex w-10/12 bg-white">
                <input placeholder='Add todo...' type="text" className="w-full bg-transparent px-3" value={value}
				onChange={(event) => setValue(event.target.value)}/>                
            </div>
            <button  onClick={onSubmit} className=" flex justify-center items-center w-20 text-3xl rounded-md text-violet-100 bg-slate-600 ">
                <BiPlus/>
            </button>
            </div>
        </div>
    );
}

export default AddItem;
