import React, { useState, useContext, createContext, useCallback } from "react";
import ValidationSchema from "../Schemas/formVlidation";
import SignUp from "../MultiForm/SignUp";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { pageContext } from "../Form";
export const ChildFormContext = createContext();
//This component conroles multiform
const ChildForm = () => {
  const [errors, setErrors] = useState([]);
  const { page, formData, setFormData } = useContext(pageContext);
  const DisplayFormPage =
    page === 0 ? <SignUp  /> : page === 1 ? <PersonalInfo   /> : <OtherInfo  />;
  const lastUser = formData[formData.length - 1];
  const ValidSchema = ValidationSchema();

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
  // Form validation
  const validationForm = (pageInfo) => {
     const errors = []
    const SchemaKeys = Object.keys(ValidSchema[pageInfo]);
    SchemaKeys.forEach((key) => {
      const InputValue = lastUser[key];
      if (InputValue !== undefined) {
        if (ValidSchema[pageInfo][key].required && !InputValue) {
          errors.push(`${key} must not be empty`);
        }
        if (
          ValidSchema[pageInfo][key].minLength &&
          InputValue.length < ValidSchema[pageInfo][key].minLength
        ) {
          errors.push(
            `${key} must be at least ${ValidSchema[pageInfo][key].minLength} characters`
          );
        }
        if (
          ValidSchema[pageInfo][key].pattern &&
          !ValidSchema[pageInfo][key].pattern.test(InputValue)
        ) {
          errors.push(`${key} is invalid`);
        }
      } else {
        errors.push(`${key} is missing`);
      }
    });
    setErrors(errors)
    return errors.length === 0;
  };
  return (
    <div>
      <ChildFormContext.Provider value={{ validationForm, onChangeFormData, lastUser }}>
        <>{DisplayFormPage}</>
      </ChildFormContext.Provider>
     
    </div>
  );
};

export default ChildForm;
