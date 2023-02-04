import React from "react";
import { useState } from "react";
import Output from "./Output";

const Input = () => {
  const [add, setAdd] = useState([]);
  const [state, setState] = useState({
    amt: 0,
    name: "",
    tip: 0,
    service: 0
  });
  const changes = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const clickbutton = () => {
    state.tip = (state.amt * state.service) / 100;
    console.log(state);
    setAdd([...add, state]);

    setState({
      name: "",
      amt: ""
    });
  };

  return (
    <div className={"container"}>
      <div className={"main"}>
        <p className={"para"}>Enter your bill amount</p>
        <input
          type={"number"}
          name={"amt"}
          value={state.amt}
          className={"one"}
          placeholder="000"
          style={{ height: "40px" }}
          onChange={changes}
        />
        <br></br>
      </div>

      <div className="control">
        <label style={{ right: "10px", position: "relative" }}>
          How was service?
        </label>
        <select style={{ marginRight: "10px", height: "40px" }}>
          <option>Choose...</option>
          <option value="0.2">Excellent-20%</option>
          <option value="0.1">Medium-10%</option>
          <option value="0.05">Not so good-5%</option>
        </select>
        <input
          type={"text"}
          style={{ height: "40px", marginRight: "10px" }}
          name={"name"}
          value={state.name}
          className={"two"}
          placeholder="Customer Name"
          onChange={changes}
        />
        <button
          style={{
            height: "40px",
            backgroundColor: "hsl(202deg 100% 66%)",
            color: "white",
            fontWeight: "bold"
          }}
          onClick={() => clickbutton()}
        >
          Add Customer
        </button>
      </div>

      <Output data={add} />
    </div>
  );
};

export default Input;
