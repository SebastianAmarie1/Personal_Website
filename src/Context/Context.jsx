import React, { useContext, useState } from "react"


/*Creates a context with variables that can be used throughout the whole application*/
const Context = React.createContext()

export function useCtx() {
    return useContext(Context)
}

export function ContextProvider({ children }) {
    
    const [currentPhase, SetCurrentPhase] = useState("explosion")
   

    const value = {
        currentPhase,
        SetCurrentPhase
        
    }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}