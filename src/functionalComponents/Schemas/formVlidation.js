const ValidationSchema = () => {
  return {
    SignUp: {
      userName: {
        required: true,
        minLength: 6,
      },
      userEmailId: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      userPhoneNumber: {
        required: true,
        minLength: 10,
      },
    },
    PersonalInfo: {
      userFatherName: {
        required: true,
        minLength: 6,
      },
      userAge: {
        required: true,
      },
      paidAmount: {
        required: true,
      },
    },
    OtherInfo: {
      userPackage: {
        required: true,
      },
    },
  };
};
export default ValidationSchema;
