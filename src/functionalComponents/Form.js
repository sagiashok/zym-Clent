import React, { useState, createContext } from "react";
import ChildForm from "./MultiForm/ChildForm";
import Button from "./Buttons/Button";
export const pageContext = createContext();
const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState([
    {
      userName: "",
      userFatherName: "",
      userEmailId: "",
      userPhoneNumber: "",
      userAge: "",
      paidAmount: "",
      userPackage: "",
    },
  ]);
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

      <div id="Button">
        <pageContext.Provider value={{ page, setPage, formData, setFormData }}>
          <div id="FormDiv">
            <form id="Form">
              <div>
                <ChildForm />
              </div>
            </form>
          </div>
          <div>
            <Button />
          </div>
        </pageContext.Provider>
      </div>
    </div>
  );
};

export default Form;
