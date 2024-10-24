import { createContext } from "react"

export const AppContext=createContext();

const ContextProvider =(props)=>{

    const phone ='+91 8130567971'
    
    return(
        <AppContext.Provider value={phone}>
            {props.children} 
        </AppContext.Provider>
    )
}

export default ContextProvider