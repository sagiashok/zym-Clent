import React, { useContext } from "react";
import { ChildFormContext } from "./ChildForm";
const PersonalInfo = () => {
  const { onChangeFormData, lastUser } = useContext(ChildFormContext);

  return (
    <div>
      <div>
        <label htmlFor="userFatherName">userFatherName:</label>
        <input
          type="text"
          id="userFatherName"
          name="userFatherName"
          value={lastUser ? lastUser.userFatherName : "narasih"}
          onChange={onChangeFormData}
        />
      </div>
      <div>
        <label htmlFor="paidAmount">paidAmount:</label>
        <input
          type="number"
          id="paidAmount"
          name="paidAmount"
          value={lastUser ? lastUser.paidAmount : ""}
          onChange={onChangeFormData}
        />
      </div>
      <div>
        <label htmlFor="userAge">userAge:</label>
        <input
          type="text"
          id="userAge"
          name="userAge"
          value={lastUser ? lastUser.userAge : ""}
          onChange={onChangeFormData}
        />
      </div>
    </div>
  );
};

export default React.memo(PersonalInfo);
