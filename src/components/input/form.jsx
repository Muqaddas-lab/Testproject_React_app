import React from "react";
import Input from "./input";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-md mx-auto p-8 shadow-xl rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100"
    >
      {/* Top Heading */}
      <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
        User Registration Form
      </h2>

      <Input label="First Name" FieldId="firstname" />
      <Input label="Last Name" FieldId="lastname" />

      <button
        type="submit"
        className="mt-6 w-full bg-purple-700 text-white py-3 px-4 rounded-xl hover:bg-purple-800 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
