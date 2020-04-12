import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function formatDate(date) {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

function DateSection({ setDate, setErrMsg }) {
    const [day, setDay] = useState("");

    return (
        <div className="dateSection">
            <div className="datePicker">
                <p>Pick a date: &nbsp;</p>
                <DayPickerInput onDayChange={day => setDay(formatDate(day))} />
            </div> 
            <button type="button" onClick={() => setDate(day)}>Take me to space!</button>
        </div>   
    );
}

export default DateSection;