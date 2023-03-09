import React, { useContext } from "react";
import { pageContext } from "../Form";
const NextButton = () => {
  const { page, setPage, validationForm } = useContext(pageContext);
  const PageIncreMent = () => {
    const isValid = validationForm(
      page === 0 ? "SignUp" : page === 1 ? "PersonalInfo" : "OtherInfo"
    );
    if (isValid) {
      setPage((pre) => pre + 1);
    }
  };
  return <button onClick={PageIncreMent}>Next</button>;
};

export default NextButton;
