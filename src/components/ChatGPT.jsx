import React, { useState } from "react";
import axios from "axios";
export default function ChatGPT() {
  const [userPrompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { userPrompt })
      .then((res) => {
        setResponse(res.data);
        console.log(userPrompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGreen">Generate Captions</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          
          <label htmlFor="">Ask for captions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={userPrompt}
            onChange={handlePrompt}
          />
        </div>{" "}
        {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      <div className="bg-darkGreen  mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
}