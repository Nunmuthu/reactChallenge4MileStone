import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TimeTable from './Components/TimeTable';
import Modal from './Components/Modal';

function App() {
  const [classes, setClasses] = useState([])
  const [className, setClassName] = useState("")
  const [errorClass, setErrorClass] = useState("")
  const [errorModal, setErrorModal] = useState("")
  const [showTimeTable, setShowTimeTable] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [cell, setCell] = useState({ day: "", period: "" })


  const handleAddClass = async () => {
    //code goes here to add a class
    if (className === '')
      setErrorClass('Please enter a class name');
    else if (className.length < 6)
      setErrorClass('Minimum 5 character required');
    else {
      setClassName('')
      setErrorClass('')
    }
  }

  const handleDelete = async () => {
    // code goes here to delete a class
  }

  const handleModal = (day, period) => {
    //code goes here to display modal, set day and period
  }

  const handleCloseModal = () => {
    //code goes here to close modal
  }

  const handleValidation = (data) => {
    //validation goes here
  }

  const handleAssign = async (data) => {
    //based on the return value of handleValidation the teacher should be assigned
  }

  const handleClear = async (day, period) => {
    //code goes here to handle the clear button in each cell
  }

  return (
    <div className='app'>
      <aside>
        <h1>TIME-TABLE</h1>
        <div>
          {/* code goes here to input field to get class Name, span to display error message and a Add Class button
          Make sure to give respective ids mentioned 
          id="classNameInput"
          id="error"
          id="AddClass" */}
          <input type="text" id="classNameInput" value={className} onChange={(e) => setClassName(e.target.value)}></input>
          <span id="error">{errorClass}</span>
          <button id="AddClass" onClick={() => handleAddClass()}>Add Class</button>
        </div>
        <main>
          {/* code goes here to display all class names in each div with className="className" */}
        </main>
      </aside>
      <div className='TimeTableView'>
        {/* code goes here to display Timetable if any class is selected else the select Statemement should be displayed 
      "Please Select A Class To View Their TimeTable" */}
        <div id="selectStatement" className="Text">
          <h1>Please Select A Class To View Their TimeTable</h1>
        </div>
      </div>
      {/*code goes here for modal component*/}
    </div>
  );
}

export default App;
