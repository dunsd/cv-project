import './App.css';
import UserDetails from './components/UserDetails';
import EntryForm from './components/EntryForm';
import { useState } from 'react';

const App = () => {

  const [firstName, setfirstName] = useState("")

  const testFunc = () => {
    console.log(firstName);
    setfirstName("firstName test")
    
  }

  return (
    <div>
      <UserDetails name="testname" />
      <EntryForm />
      <button onClick={testFunc}>Test Func</button>
    </div>
  )
}


export default App