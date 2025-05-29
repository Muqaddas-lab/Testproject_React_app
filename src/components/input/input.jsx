import React from "react";
const Input = ({label, FieldId ,onChange})=>{
    return(
      <div className="md-4">
        <label htmlFor={FieldId} ClassName="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" id={FieldId}  onChange={onChange} className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 " />
      </div>  
    );
    
};
export default Input;



