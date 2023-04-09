import './App.css';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';
import EducationDisplay from './components/EducationDisplay';
import { useState } from 'react';

const App = () => {

  const [userInfo, setUserInfo] = useState({});

  const onUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo(values => ({...values, [name]: value}))
  }

  const handleUserSubmit = (e) => {
      e.preventDefault();
  }

  const [eduInputs, setEduInputs] = useState([
    {
        dates: "",
        grade: "",
        school: "",
        desc: "",
    }
  ])

  const onEduChange = (index, event) => {
      let data = [...eduInputs];
      data[index][event.target.name] = event.target.value;
      setEduInputs(data);
      console.log(eduInputs);
  }
  const removeEdu = (index) => {
      let data = [...eduInputs];
      data.splice(index, 1);
      setEduInputs(data);
  }
  const addSection = () => {
      let newSection = {dates: "", grade: "", desc: ""};
      setEduInputs([...eduInputs, newSection]);
    }

  return (
    <div>
      <div className='mainSection'>
        <UserForm 
        userInfo = {userInfo}
        handleSubmit = {handleUserSubmit}
        onUserChange = {onUserChange}
        />
        <UserDetails 
        userInfo = {userInfo}
        />
      </div>
      <EducationForm
        eduInputs = {eduInputs}
        onEduChange = {onEduChange}
        removeEdu = {removeEdu}
        addSection={addSection}
      />
      <EducationDisplay
        eduInputs={eduInputs}
      />
      <WorkForm/>
    </div>
  )
}


export default App