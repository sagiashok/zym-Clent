import React, { useContext, createContext, useCallback } from "react";
import SignUp from "../MultiForm/SignUp";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { pageContext } from "../Form";
export const ChildFormContext = createContext();
//This component conroles multiform
const ChildForm = () => {
  const { page, formData, setFormData } = useContext(pageContext);
  const DisplayFormPage =
    page === 0 ? <SignUp /> : page === 1 ? <PersonalInfo /> : <OtherInfo />;
  const lastUser = formData[formData.length - 1];

  //Handling onchange formdata
  const IndexOfArray = formData.length - 1;
  const onChangeFormData = useCallback(
    (event) => {
      const NewUser = [...formData];
      NewUser[IndexOfArray][event.target.name] = event.target.value;
      setFormData(NewUser);
      console.log("ddd");
    },

    [IndexOfArray, formData, setFormData]
  );

  return (
    <div>
      <ChildFormContext.Provider value={{ onChangeFormData, lastUser }}>
        <>{DisplayFormPage}</>
      </ChildFormContext.Provider>
    </div>
  );
};

export default ChildForm;
