import React, { useContext } from "react";
import { pageContext } from "../Form";
const NextButton = () => {
  const { setPage } = useContext(pageContext);
  const PageIncreMent = () => {
    setPage((pre) => pre + 1);
  };
  return <button onClick={PageIncreMent}>Next</button>;
};

export default NextButton;
