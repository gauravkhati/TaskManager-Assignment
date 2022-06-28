import React, { useEffect, useState } from "react";
import Dt from "./Dt";

import Listoftasks from "./Listofttasks";

//funvtion to get data from local storage
const refresh = () => {
  let stringarr = localStorage.getItem("array");
  if (stringarr) {
    return JSON.parse(stringarr);
  } else return [];
};

const Task = () => {
  const [task, settask] = useState("");
  const [totaltask, settotaltask] = useState(refresh());

  const newtask = (prop) => {
    settask(prop.target.value);
  };

  //function to add task
  const additem = () => {
    settotaltask((oldtask) => {
      return [...oldtask, task];
    });
    settask("");
  };

  // function to delete task
  const deletetask = (props) => {
    // console.log(prop);

    settotaltask((oldtask) => {
      return oldtask.filter((arrele, index) => {
        return index !== props;
      });
    });
  };

  //function to set task done
  const donetask = (prop) => {
    settotaltask((oldtask) => {
      let data = [...oldtask];
      let temp = data[prop];
      for (var i = prop; i < data.length; i++) data[i] = data[i + 1];

      data[data.length - 1] = temp;

      return data;
    });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      additem();
    }
  };
  const clearlist = () => {
    settotaltask([]);
  };
  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(totaltask));
  }, [totaltask]);

  return (
    <>
      <main>
        <div className="left-div">
          <Dt/>
        </div>
        <div className="right-div">
          <div className="task-display">
            <ol>
              {totaltask.map((taskvalue, index) => {
                return (
                  <Listoftasks
                    value={taskvalue}
                    key={index}
                    id={index}
                    onSelect={deletetask}
                    ondone={donetask}
                  />
                );
              })}
            </ol>
          </div>
          <div className="input-task">
            <input
              type="text"
              placeholder="Add a task"
              value={task}
              onChange={newtask}
              onKeyDown={handleKeyDown}
            ></input>
            <button className="clear-list" onClick={clearlist}>
              Clear List
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Task;
