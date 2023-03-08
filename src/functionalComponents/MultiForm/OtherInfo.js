import React, { useContext } from "react";
import { ChildFormContext } from "./ChildForm";

const OtherInfo = () => {
  const { onChangeFormData, lastUser } = useContext(ChildFormContext);

  return (
    <div>
      <div>
        <label htmlFor="userPackage">userPackagee:</label>
        <input
          type="text"
          id="userPackage"
          name="userPackage"
          value={lastUser ? lastUser.userPackage : ""}
          onChange={onChangeFormData}
        />
      </div>
    </div>
  );
};

export default React.memo(OtherInfo);
