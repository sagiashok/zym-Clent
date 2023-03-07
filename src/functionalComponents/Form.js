import React, { useState, createContext } from "react";
import Button from "./Buttons/Button";
export const pageContext = createContext();
const Form = () => {
  const [page, setPage] = useState(0);
  const MultiForm = ["SignUp", "PersonalInfo", "OtherInfo"];

  return (
    <div id="MainDiv">
      <div id="ProgressBar"> ProgressBar </div>
      <div id="MultiFormName">
        {page === 0
          ? MultiForm[page]
          : page === 1
          ? MultiForm[page]
          : MultiForm[page]}
      </div>
      <div id="FormDiv">
        <form id="Form">
          <div></div>
        </form>
      </div>
      <div id="Button">
        <pageContext.Provider value={{ page, setPage }}>
          <Button />
        </pageContext.Provider>
      </div>
    </div>
  );
};

export default Form;
