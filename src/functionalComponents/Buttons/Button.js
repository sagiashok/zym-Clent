import NextButton from "./NextButton";
import BackButton from "./BackButton";
import SubmitButton from "./SubmitButton";
import AddUser from "./AddUser";
import { pageContext } from "../Form";
import { useContext, useMemo, useEffect, useRef } from "react";

const Buttons = () => {
  const { page, setPage, formData, setFormData } = useContext(pageContext);

  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);
  // form validation

  const Button = useMemo(() => {
    console.log(page);

    if (page === 0) {
      return (
        <div>
          <NextButton />
        </div>
      );
    } else if (page === 1) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {<BackButton />}
          {<NextButton />}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>{<BackButton />}</div>
          <div>
            <AddUser />
          </div>
          <div>{<SubmitButton />}</div>
        </div>
      );
    }
  }, [page]);

  return <div>{Button}</div>;
};

export default Buttons;
