
import './App.css';

import UserList from './Components/UserList';
import Product from './Components/Product';
import FilteredUsers from './Components/FilteredUsers';
import { useState } from 'react';



function App() {

  
  const [UserList, setUserList] = useState([
    {
      id: 1,
      name: "Taiyab"
    },
    {
      id:2,
      name: "Abhishek"
    },
    {
      id:3,
      name: "Ravi"
    },
    {
      id: 4,
      name: "Amit"
    }
  ]);

  return (
    <>
    
      <UserList />  

      <Product/>

      <FilteredUsers UserList = {UserList} />
    
    </>
     
  );
}

export default App;
