import AddItem from './components/AddItem'
import ItemList from './components/ItemList'
import './index.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { sortTodoList } from './redux/todoSlice';
function App() {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(sortTodoList());
  };
  const todos = useSelector((state)=>state.todos.list)
  const progress =useSelector((state)=>state.todos.list.filter((todo)=>todo.done===true))
  console.log(todos.length)

  return (
    <div className=' flex justify-center items-center w-full h-screen bg-green-300 flex-col'>
      <div className='container  w-3/5 rounded-lg  py-8 '>
        <h1 className='text-3xl text-indigo-300 mx-6'> 
          Todo List
        </h1>
        <p className='px-1 text-sm text-blue-300 mx-6'>Add things to do</p>
        <hr className=' my-2  border-gray-400 mx-6' />
        <div className=' flex items-center gap-2 mx-6'>
          <span className=' text-2xl text-gray-500'>{Math.floor((progress.length/todos.length)*100)}%</span>
          <div className="w-full bg-white rounded-full h-5 ">
            <div className="bg-indigo-300 h-5 rounded-full " style={{width:`${Math.floor((progress.length/todos.length)*100)}%`}} ></div>
          </div>
        </div>

        <ItemList />
        <hr className=' my-2  border-gray-400 mx-6' />
        <div className='flex items-end justify-end mx-6 gap-2'>
            <span className=' text-gray-500'>Move done thing to end ?</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input onClick={handleSort} type="checkbox" value="" className="sr-only peer"/>
            <div className="w-11 h-6
             bg-slate-50 
             peer-focus:outline-none
             rounded-full
             peer
             peer-checked:after:translate-x-full
             peer-checked:after:border-white
             after:content-['']
             after:absolute
             after:top-[2px]
             after:left-[2px]
              after:bg-blue-100 
               after:peer-checked:bg-slate-50 
               after:border-blue-100 
               after:border 
               after:rounded-full
                after:h-5 after:w-5
                after:transition-all 
                peer-checked:bg-blue-100"></div>
          </label>
        </div>
        <AddItem/>
      </div>
    </div>
  )
}

export default App
