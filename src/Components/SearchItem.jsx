import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'
import { items } from './data'


const SearchItem = () => {
  const {term}=useParams()
  const [filterData,setFilterData]=useState([])
  useEffect(()=>{
  const filterData=()=>{
    const data = items.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase()) 
    
    );
    setFilterData(data)
  }
  filterData()
},[term])
  return (
    <>
    <Products items={filterData}></Products>
    </>
  )
}

export default SearchItem
