import React, { createContext, useReducer } from 'react'
import useAuth from '../custom-hook/Auth'


// context instace
export const ChatContext = createContext()

//context provider
function ChatProvider(props) {
  //instance to auth context
  const {currentUser} = useAuth()

  //inital state for chat
  const INITIAL_STATE = {
    chatId:"null",
    user : {}
  }

  //custom reducer for chat
  const chatReducer =(state,action)=>{
    switch (action.type) {
      case "CHANGE_USER":
        return{
          user : action.playload,
          chatId:
          currentUser.uid > action.playload.uid ? currentUser.uid + action.playload.uid:
          action.playload.uid + currentUser.uid
        }
        default:
          return state
    }
  }

  //reducer
  const [state,dispatch] = useReducer(chatReducer,INITIAL_STATE)

  return (
    <ChatContext.Provider value={{data:state,dispatch}}>
         {
            props.children
         }
    </ChatContext.Provider>
  )
}

export default ChatProvider