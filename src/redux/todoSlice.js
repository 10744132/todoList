import { createSlice } from "@reduxjs/toolkit";
const initialState=[   
        { id:1 , title:"todo1" , done:false},
        { id:2 , title:"todo2" , done:false},
        { id:3 , title:"todo3" , done:true},
        { id:4 , title:"todo4" , done:false},
        { id:5 , title:"todo5" , done:true},
      
]

const todoSlice = createSlice({
    name:'todos',
    initialState: {
    list: initialState,
    sorted: false,
  },
    reducers:{
        addTodo:(state,action) =>{
            const newTodo = {
                id:Date.now(),
                title:action.payload.title,
                done:false,
            };
            state.list.push(newTodo);
        },
        toggleDone:(state,action)=>{
            const index = state.list.findIndex((todo)=>todo.id===action.payload.id)
            state.list[index].done=action.payload.done
        },
        deleteTodo :(state,action)=>{
            state.list = state.list.filter((todo)=>todo.id!==action.payload.id)
        },
        sortTodoList: (state) => {
            const sortedList = [...state.list];
            if (state.sorted) {
                sortedList.sort((a, b) => a.id - b.id); 
            } else {
                sortedList.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1)); 
            }
            return {
                ...state,
                list: sortedList,
                sorted: !state.sorted, 
            };
        },
    }
})

export const {addTodo ,toggleDone ,deleteTodo,sortTodoList} =todoSlice.actions;
export default todoSlice.reducer;