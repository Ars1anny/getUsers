import React from 'react'
import { useEffect, useState } from 'react'
import css from './main.css'

const Main = () => {
    const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const userData = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await userData.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }

  }


  const deleteUsers = () => {
    setData([]);

  }

  
    useEffect(() => {
      getUsers();
      
     
    }, []);


  return (
    <div>
       <div id='buttons'>
        <button onClick={getUsers} id='getButton'>GET USERS</button>
        <button onClick={deleteUsers} id='deleteButton'>DELETE USERS</button>
       </div>
        <div id='usersList'>
        {data.map((item) => {
            return <div id='userBox'>
                <h3 id='user'>{item.name}</h3>
        </div>
        })}
        </div>

    </div>
   
  )
}

export default Main;