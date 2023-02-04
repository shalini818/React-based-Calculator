import React, { useState } from "react";

const Output = (props) => {
  const [person, setPerson] = useState(0);
  const [people, setPeople] = useState(0);
  const [state, setState] = useState([]);

  const TotalValue = () => {
    let totaltip = 0;
    state.map((element) => (totaltip = totaltip + element.tip));
    setPeople(totaltip);
    setPerson(state.length);
  };

  return (
    <div className={"items"}>
      <h3>Customer List</h3>
      <div>
        {props.data.map((ele) => (
          <li>
            {ele.name} {ele.amt}
          </li>
        ))}
      </div>

      <div className={"btn2"}>
        <button
          style={{
            backgroundColor: "hsl(155deg 56% 52%)",
            color: "white",
            height: "40px"
          }}
          onClick={TotalValue}
        >
          Calculate Tip & customer{" "}
        </button>
      </div>

      <div>
        <table>
          <tr>
            <th> Total customer</th>
            <th> Tip anount </th>
          </tr>
          {/*
              <tr>
              
                  <td>{person}</td>
              
                
                   <td>{people}</td>
              
                </tr>
                */}
        </table>
      </div>
    </div>
  );
};

export default Output;
