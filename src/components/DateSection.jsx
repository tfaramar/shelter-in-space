import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function formatDate(date) {
    console.log("setting new date");
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

function DateSection({ setDate }) {
    return (
        <div>
            <p>pick a date:</p>
            <DayPickerInput onDayChange={day => setDate(formatDate(day))} />
        </div>   
    );
}

export default DateSection;