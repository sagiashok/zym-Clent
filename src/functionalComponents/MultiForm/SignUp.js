import React, { useContext } from "react";
import { ChildFormContext } from "./ChildForm";
const SignUp = () => {
  const { onChangeFormData, lastUser } = useContext(ChildFormContext);
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
      </div>
    </div>
  );
};

export default React.memo(SignUp);
