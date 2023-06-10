import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleDone, deleteTodo} from "../redux/todoSlice";

const Item = ({id ,title ,done}) => {
    const dispatch =useDispatch();
    const handleDoneClick=()=>{
        dispatch(toggleDone({
            id:id,
            done:!done,
        }))
    }
    const handleDeleteClick=()=>{
        dispatch(deleteTodo({
            id:id,
        }))
    }
    return (
        <div className=" h-16 w-12/12 bg-slate-100 rounded-sm items-center flex relative my-3 mx-6  ">
            <span className="h-16 w-2 bg-slate-600 rounded-l-sm"></span>
            <input className=" mx-6 w-8 h-8 rounded-md" type="checkbox" checked={done} onChange={handleDoneClick} />
            <span className={` text-gray-500 ${done && 'line-through'}`} >{title}</span>
            <CgClose onClick={handleDeleteClick} className="flex absolute right-6 text-gray-300  text-2xl"/>
        </div>
    );
}
export default Item;
