import Item from "./Item";
import { useSelector } from "react-redux";
const ItemList = () => {
    const todos =useSelector((state)=>state.todos.list)
    return (
        <div className=" w-full h-3/6 overflow-x-hidden overflow-y-scroll  "> 
        {
            todos.map((item)=>(
                <Item key={item.id} id={item.id} title={item.title} done={item.done}/>          
             )                
            )
        }
        </div>
    );
}

export default ItemList;
