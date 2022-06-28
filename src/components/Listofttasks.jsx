import React from "react"
const Listoftasks=(props)=>{
    return(
        <>
        <div className="todo-task" >
                   <div className="classDetails">
                    <li> {props.value} </li>
                    </div>
                    <div className="task-option">
                    <span onClick={()=>{
                        props.ondone(props.id);
                    }} className="material-symbols-outlined check">
                    check_circle
                    </span>
                    <ion-icon  className="star" name="star-outline"></ion-icon>
                    <a onClick={()=>{
                    props.onSelect(props.id);
                    }
                    }
                    ><ion-icon name="trash-outline"></ion-icon></a>
                    </div>
        </div>
        </>
    )

 }
 export default Listoftasks;