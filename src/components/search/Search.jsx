import React, { useState } from 'react'
import { useContactContext } from '../../contextApi/ContactContext'

export default function Search () {
    const {handleSearch}=useContactContext()
    const [keyword,setKeyword]=useState('')
    const handleClick=()=>{
      handleSearch(keyword)
    }
  return (
    <>
    <div className="input-group w-50">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search contact"
                    onChange={(e)=>setKeyword(e.target.value)}
                  />
                  <button onClick={handleClick} className="btn btn-success">Search</button>
                </div>
    </>
  )
}
