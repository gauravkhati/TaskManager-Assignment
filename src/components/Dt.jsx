import React from "react";
const newdate=new Date().toLocaleDateString();
const newtime=new Date().toLocaleTimeString();
const d = new Date();
let day = d.getDay();
const week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currweek=week[day-1];

const Dt=()=>{
    return(
        <>
        <div className="calendar">
        <h1 className="my-day">My Day</h1>
        <p>{currweek}, {newtime}</p>
        </div>
        </>
    )
}
export default Dt;