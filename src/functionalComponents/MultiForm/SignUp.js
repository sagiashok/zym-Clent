import React, { useContext } from "react";
import { ChildFormContext } from "./ChildForm";
import { pageContext } from "../Form";
const SignUp = () => {
  const { onChangeFormData, lastUser } = useContext(ChildFormContext);
  const { errors, flag } = useContext(pageContext);
  console.log(errors.userName);
  return (
    <div>
      <div>
        <label htmlFor="name">userName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={lastUser ? lastUser.userName : ""}
          onChange={onChangeFormData}
        />
        <p hidden={flag}>{errors.length !== 0 ? errors[0].userName : null}</p>
      </div>
      <div>
        <label htmlFor="userEmailId">userEmailId:</label>
        <input
          type="email"
          id="userEmailId"
          name="userEmailId"
          value={lastUser ? lastUser.userEmailId : ""}
          onChange={onChangeFormData}
        />
        <p hidden={flag}>
          {errors.length !== 0 ? errors[0].userEmailId : null}
        </p>
      </div>
      <div>
        <label htmlFor="userPhoneNumber">userPhoneNumber:</label>
        <input
          type="text"
          id="userPhoneNumber"
          name="userPhoneNumber"
          value={lastUser ? lastUser.userPhoneNumber : ""}
          onChange={onChangeFormData}
        />
        <p hidden={flag}>
          {errors.length !== 0 ? errors[0].userPhoneNumber : null}
        </p>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
