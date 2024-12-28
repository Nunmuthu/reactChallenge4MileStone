import { useState, useEffect } from "react"
function TimeTable(props) {
    const emptyTable = [{
        "name": "Monday"
    },
    {
        "name": "Tuesday"
    },
    {
        "name": "Wednesday"
    },
    {
        "name": "Thursday"
    },
    {
        "name": "Friday"
    }]
    const [timeTable, setTimetable] = useState(emptyTable)
    const [isClass2, setisClass2] = useState(props.className === 'Class 2')
    useEffect(() => {

        const mytimeTable = props.data.filter(e => e.name === props.className)
        console.log(mytimeTable)
        setTimetable(mytimeTable.length > 0 ? mytimeTable[0].timeTable : emptyTable)
    }, [props.data, props.className])
    const clearFn = (id, cell) => {
        console.log(id, cell)
    }
    useEffect(() => {
        if (props.data.some(f => f.name === props.className))
            setTimetable(
                props.data.filter(f => f.name === props.className)[0].timeTable)
    }, [])

    const generateTd = (id, obj, i) => {
        if (obj[id] && !(i === 2 && id === 4 && props.className === 'Class 1'))
            return (<td>
                <strong>{obj[id]?.subject}</strong>
                <p>{obj[id]?.teacherName}</p>
                <button onClick={() => clearFn(i, id)}>Clear</button>
                {/* <p>{id}</p>
                <p>{i}</p>
                <p>{props.className}</p> */}
            </td>)
        else
            return (<td onClick={() => props.displayModal(emptyTable[i].name, id, i + 1)}>
                <strong></strong>
                <p></p>
            </td>)
        // monday, 4, 1
    }
    console.log('ClassName', props.className)

    return (
        <div className="timeTable">
            <div className="title" id="title">
                <h1>Class Name: {props.className}</h1>
                <button onClick={() => { props.deleteClass(props.className) }}>Delete Class</button>
            </div >
            <table>
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>1</th>
                        <th>2</th>
                        <th> </th>
                        <th>3</th>
                        <th>4</th>
                        <th> </th>
                        <th>5</th>
                        <th>6</th>
                        <th> </th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                        className="day" for the days
                        className="break" for text "break" and "lunch"
                        use below template to display the subject,teacher name and clear button
                        <td>
                            <strong>[subject]</strong>
                            <p>[teacherName]</p>
                            <button></button>                                    
                        </td>
                    */}
                    {timeTable.map((e, i) => (
                        <tr key={i}>

                            <td className="day">{props.className !== 'Class 2' ? e.name : ''}</td>
                            {/* <td>
                                <strong>{e[1]?.subject}</strong>
                                <p>{e[1]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 1)}>Clear</button>
                            </td> */}
                            {generateTd(1, e, i)}
                            {generateTd(2, e, i)}
                            {/* <td>
                                <strong>{e[2]?.subject}</strong>
                                <p>{e[2]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 2)}>Clear</button>
                            </td> */}
                            {i === 0 && <td className="break" rowSpan="5">Break</td>}
                            {/* <td>
                                <strong>{e[3]?.subject}</strong>
                                <p>{e[3]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 3)}>Clear</button>
                            </td> */}
                            {generateTd(3, e, i)}
                            {generateTd(4, e, i)}
                            {/* <td>
                                <strong>{e[4]?.subject}</strong>
                                <p>{e[4]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 4)}>Clear</button>
                            </td> */}
                            {i === 0 && <td className="break" rowSpan="5">Lunch</td>}
                            {/* <td>
                                <strong>{e[5]?.subject}</strong>
                                <p>{e[5]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 5)}>Clear</button>
                            </td> */}
                            {generateTd(5, e, i)}
                            {/* <td>
                                <strong>{e[6]?.subject}</strong>
                                <p>{e[6]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 6)}>Clear</button>
                            </td> */}
                            {generateTd(6, e, i)}
                            {i === 0 && <td className="break" rowSpan="5">Break</td>}
                            {/* <td>
                                <strong>{e[7]?.subject}</strong>
                                <p>{e[7]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 7)}>Clear</button>
                            </td> */}
                            {generateTd(7, e, i)}
                            {generateTd(8, e, i)}
                            {/* <td>
                                <strong>{e[8]?.subject}</strong>
                                <p>{e[8]?.teacherName}</p>
                                <button onClick={() => clearFn(i, 8)}>Clear</button>
                            </td> */}

                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

export default TimeTable



