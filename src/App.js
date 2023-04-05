import './App.css';
import UserDetails from './components/UserDetails';
import EntryForm from './components/EntryForm';
import { useState } from 'react';

const App = () => {

  const [userInfo, setUserInfo] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo(values => ({...values, [name]: value}))
    console.log(userInfo);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
}

  return (
    <div>
      <div className='mainSection'>
        <EntryForm 
        userInfo = {userInfo}
        handleSubmit = {handleSubmit}
        onChange = {onChange}
        />
        <UserDetails 
        userInfo = {userInfo}
        />
      </div>
    </div>
  )
}


export default App