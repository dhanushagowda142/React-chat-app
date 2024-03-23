import React, { useRef, useState } from 'react'
import useAuth from '../custom-hook/Auth'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore"
import {db} from '../fireConfig'
import { toast } from 'react-toastify'

function Search() {
  const fUser = useRef()
  const {currentUser} = useAuth()
  const [user,setUser] = useState(null)

  //search handler
  const handlerSearch = async() =>{

  }

  const handleKey=(e) =>{
    e.code === "Enter" && handlerSearch()
  }

  return (
    <div className="form-group">
        <input type="search" ref={fUser} onKeyDown={handleKey} className="form-control" placeholder='Search UserName' />
    </div>
  )
}

export default Search