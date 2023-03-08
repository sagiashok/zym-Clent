import React, { useContext } from "react";
import { pageContext } from "../Form";
const AddUser = () => {
  const { setPage, formData, setFormData } = useContext(pageContext);
  const AddUser = () => {
    setFormData([
      ...formData,
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

    setPage(0);
  };
  return (
    <div>
      <button onClick={AddUser}>AddUser</button>
    </div>
  );
};

export default AddUser;
