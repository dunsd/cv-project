import './App.css';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';
import EducationDisplay from './components/EducationDisplay';
import WorkDisplay from './components/WorkDisplay';
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
  const addEduSection = () => {
      let newSection = {dates: "", grade: "", desc: ""};
      setEduInputs([...eduInputs, newSection]);
    }

    const [workInputs, setWorkInputs] = useState([
      {
          dates: "",
          company: "",
          desc: "",
      }
  ])

  const onWorkChange = (index, event) => {
      let data = [...workInputs];
      data[index][event.target.name] = event.target.value;
      setWorkInputs(data);
  }

  const removeWork = (index) => {
      let data = [...workInputs];
      data.splice(index, 1);
      setWorkInputs(data);
  }

  const addWorkSection = () => {
      let newSection = {dates: "", company: "", desc: ""};
      setWorkInputs([...workInputs, newSection]);
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
        addEduSection={addEduSection}
      />
      <EducationDisplay
        eduInputs={eduInputs}
      />
      <WorkForm
        workInputs = {workInputs}
        onWorkChange = {onWorkChange}
        removeWork = {removeWork}
        addWorkSection = {addWorkSection}
      />
      <WorkDisplay
        workInputs={workInputs}
      />
    </div>
  )
}


export default App