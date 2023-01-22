import React, { useState } from "react"


interface IContext{
    showToday: boolean,
    showSettings: boolean,
    showMarquee: boolean,
    showModal: boolean,
    setShowToday: (val: boolean) => void,
    setShowMarquee: (val: boolean) => void,
    setShowSettings: (val: boolean) => void,
    setShowModal: (val: boolean) => void,
}


export const TodoContext = React.createContext<Partial<IContext>>({})

export const TodoProvider = ({children}:{children:React.ReactNode}) => {
    const [showToday, setShowToday] = useState(false)
    const [showMarquee, setShowMarquee] = useState(true)
    const [showSettings, setShowSettings] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const context:IContext = {
        showToday, 
        showMarquee,
        setShowMarquee,
        showSettings,
        setShowSettings,
        setShowToday,
        showModal,
        setShowModal
    }
    return <TodoContext.Provider value={context}>
            {children}
        </TodoContext.Provider>
    
}

