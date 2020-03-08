import React, { useState, useEffect } from 'react';
import './css/App.css';
import Users from './Users';
import Button from './addButton';


const App = () => {
  const [users, setUsers] = useState('');
  const getData = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .catch(error => alert('Nie można pobrać danych. Szczegóły :\n' + error))
      .then(data => {
        setUsers(prevState => {
          let oldArr = [...prevState];
          let newArr = oldArr.concat(data.results);
          return newArr
        })
      })
  };
  useEffect(() => {
    getData();
  }, []);

  const handleAddBut = () => {
    getData();
  }
  return (
    <>
      {(users) ? <Users user={users} /> : 'Wczytywanie danych...'}
      <Button handleAddBut={handleAddBut} />
    </>
  )
}

export default App;