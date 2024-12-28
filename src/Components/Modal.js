import React, { useEffect, useState } from "react";
import axios from "axios";

function Modal(props) {
    const [formField, setFormField] = useState({ subject: "", teacherName: "", teacherId: "" })
    const [teachers, setTeacher] = useState([])
    const { className, day, period } = props
    console.log(props)

    useEffect(() => {
        const fetchData = () => {
            axios.get("/api/teachers")
                .then(data => {
                    console.log(data)
                    const myClasses = data.data;
                    console.log(myClasses)
                    setTeacher(data.data)
                })
        }
        fetchData();
    }, [])
    useEffect(() => {
        console.log(formField)
    }, [formField])

    return (
        <>
            <div id="Modal" className="ModalBg" />
            <div className="Pop">
                <span>Add Details Here</span>
                <hr></hr>
                <div className="cellDetails">
                    {/* code goes here to display class name, day and period in each p tag */}
                    <p>{className}</p>
                    <p>{day}</p>
                    <p>{period}</p>
                </div>
                <input type="text" placeholder="subject" id="subject" value={formField.subject} onChange={(e) => {
                    setFormField({
                        ...formField, subject: e.target.value
                    })
                }} />
                <select id="teacherName" onChange={(e) => {
                    setFormField({
                        ...formField,
                        teacherId: e.target.options[e.target.selectedIndex].value,
                        teacherName: e.target.options[e.target.selectedIndex].text
                    })
                }}>
                    <option value="">Teacher Name</option>
                    {teachers.map(e => (
                        <option value={e.empId}>{e.name}</option>
                    ))}
                </select>
                <input type="text" placeholder="subject" id="teacherId" value={formField.teacherId} />

                {/* code goes here for input and select fields. Make sure to give below id 
                id="subject"
                id="teacherName"
                id="teacherId" 
                select field should have 
                <option value="">Teacher Name</option>
                and other options that are fetched from json server
                */}

                <span id="modalError">{props.error}</span>
                <div id="buttonContainer">
                    {/* code goes here for Assign and Cancel button. Make sure to give below id 
                    id="assign"
                    id="cancel" */}
                    <button id="assign" onClick={() => props.handleAssign(formField)} disabled={formField.subject === '' || formField.teacherId === '' || formField.teacherName === ''}>Assign</button>
                    <button id="cancel" onClick={props.handleCloseModal}>Cancel</button>
                </div>
            </div>
        </>
    );
}

export default Modal;

