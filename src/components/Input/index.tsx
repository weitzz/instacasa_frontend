import React from "react";

// import { Container } from './styles';

interface InputProps {
  value: string | undefined;
  name: string;
  type: string;

}
const Input = ({value,name,type}: InputProps) => {
  return (
    <form className=" m-[10px]">
      <label htmlFor="">{name}</label>
      <input
        type={type}
        value={value}
        className="form-control
          block
          w-full
          px-3
          p-[10px]
          text-base
          font-normal
          text-[#212121]
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-[4px]
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
       
      />
    </form>
  );
};

export default Input;
