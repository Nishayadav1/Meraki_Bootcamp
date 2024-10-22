import { useReducer } from "react";


function UseReducer() {
  const initialstate=0;
  const reducer=(state,action)=>{
    switch(action){
      case 'increment':
        return state+1
      case 'decrement':
        return state-1  
      case 'reset':
        return initialstate
      default:
        return state    
 
    }

  }
  const [count,dispatch]=useReducer(reducer,initialstate);
  return (
    <div>
    <h1>count={count}</h1>
    <button onClick={()=>dispatch('increment')}>increment</button>
    <button onClick={()=>dispatch('reset')}>reset</button>
    <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
  )
}

export default UseReducer


// function UseReducer() {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { data: state.data + 1 };
//       case "decrement":
//         return { data: state.data - 1 };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { data: 0 });

//   return (
//     <div>
//       <h1>Data = {state.data}</h1>
//       <button onClick={() => dispatch({ type: "decrement" })}>
//         Decrease Data
//       </button>
//       <button onClick={() => dispatch({ type: "increment" })}>
//         Increase Data
//       </button>
//     </div>
//   );
// }

// export default UseReducer;
