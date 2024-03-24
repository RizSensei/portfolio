"use client";
import React from "react";
import Button from "./Button";

const InputField = ({
  value,
  label,
  icon,
  name,
  type,
  onChange,
  structure = false,
  inputWidth = false,
}) => {
  const struct = structure
    ? "flex flex-col lg:flex-row lg:gap-5 lg:justify-between lg:items-center"
    : "flex flex-col";

  const inpWidth = inputWidth ? "lg:w-3/5" : "";

  return (
    <div className={`font-medium ${struct} h-full w-full`}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="input-group"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      </div>

      <div
        className={`${inpWidth} relative mb-4 w-full rounded-lg overflow-hidden`}
      >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none bg-darkPurple">
          <div className="pr-4 flex flex-col items-center justify-center">
            <iconify-icon icon={icon} height="20px" width="20px"></iconify-icon>
          </div>
        </div>
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          id="input-group"
          className=" text-gray-900 text-sm rounded-lg block w-full ps-16 p-2.5 dark:bg-gray-700 dark:text-white focus:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default InputField;
