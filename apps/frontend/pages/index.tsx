import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import Axios from "axios";

type Props = {
  id:number
  title:string
  body:string
}

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts"
    })
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);
  return (
    <div className="App">
    <div>
      {list.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
