import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Data from "../data"

export default function Employee(props) {
  const { id } = useParams()

  return (
    <div>

      <img src={Data[id].img} alt="img" />
      <h2>{Data[id].name}</h2>
      <h2>{Data[id].title}</h2>
      <h2>{Data[id].office}</h2>
      <h2>{Data[id].mobile}</h2>
      <h2>{Data[id].sms}</h2>
      <h2>{Data[id].email}</h2>


    </div >
  )
}




