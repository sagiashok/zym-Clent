import React, { useState, useEffect, createContext } from "react";
import ChildForm from "./MultiForm/ChildForm";
import ValidationSchema from "./Schemas/formVlidationSchema";
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
  const [errors, setErrors] = useState([]);
  const [flag, setFlag] = useState(false);
  const ValidSchema = ValidationSchema();
  const lastUser = formData[formData.length - 1];
  // Form validation
  const validationForm = (pageInfo) => {
    const errors = [];
    const SchemaKeys = Object.keys(ValidSchema[pageInfo]);
    SchemaKeys.forEach((key) => {
      const InputValue = lastUser[key];

      if (InputValue !== undefined) {
        if (ValidSchema[pageInfo][key].required !== undefined) {
          if (ValidSchema[pageInfo][key].required && !InputValue) {
            errors.push({ [key]: `${key} must not be empty` });
          }
        }

        if (ValidSchema[pageInfo][key].minLength !== undefined) {
          if (
            ValidSchema[pageInfo][key].minLength &&
            InputValue.length < ValidSchema[pageInfo][key].minLength
          ) {
            errors.push({
              [key]: `${key} must be at least ${ValidSchema[pageInfo][key].minLength} characters`,
            });
          }
        }

        if (ValidSchema[pageInfo][key].pattern !== undefined) {
          if (
            ValidSchema[pageInfo][key].pattern &&
            !ValidSchema[pageInfo][key].pattern.test(InputValue)
          ) {
            errors.push({ [key]: `${key} is invalid` });
          }
        }
      } else {
        errors.push({ [key]: `${key} is missing` });
      }
    });

    setErrors(errors);
    return errors.length === 0;
  };
  //changing state of flag
  useEffect(() => {
    if (errors.length === 0) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [errors]);
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
        <pageContext.Provider
          value={{
            page,
            errors,
            flag,
            setPage,
            formData,
            setFormData,
            validationForm,
          }}
        >
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
