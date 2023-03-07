import React, { useContext } from "react";
import { pageContext } from "../Form";

const BackButton = () => {
  const { setPage } = useContext(pageContext);
  const PageDecreMent = () => {
    setPage((pre) => pre - 1);
  };
  return (
    <div>
      <button onClick={PageDecreMent}>Back</button>
    </div>
  );
};

export default BackButton;
