
function TimeTable(props){
   
    return(
        <div className="timeTable">
            <div className="title" id="title">
                <h1></h1>
                <button></button>
            </div>
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
                </tbody>
            </table>
            
        </div>
    )
}

export default TimeTable



    