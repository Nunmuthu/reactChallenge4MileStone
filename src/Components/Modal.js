import React,{useEffect, useState} from "react"; 
import axios from "axios";

function Modal(props) {
    const [formField,setFormField]= useState({subject:"",teacherName:"",teacherId:""})
    const [teachers,setTeacher]=useState([])

    return (
        <>
            <div id="Modal" className="ModalBg" />
            <div className="Pop">
                <span></span>
                <hr></hr>
                <div className="cellDetails">
                    {/* code goes here to display class name, day and period in each p tag */}
                </div>

                {/* code goes here for input and select fields. Make sure to give below id 
                id="subject"
                id="teacherName"
                id="teacherId" 
                select field should have 
                <option value="">Teacher Name</option>
                and other options that are fetched from json server
                */}
                
                <span id="modalError"></span>
                <div id="buttonContainer">
                    {/* code goes here for Assign and Cancel button. Make sure to give below id 
                    id="assign"
                    id="cancel" */}
                </div>
            </div>
        </>
    );
}

export default Modal;

