import React from 'react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface FormProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  label: string;
  error?: FieldError | undefined;
  type?: string;
  defaultValue?: any;
  fontWeight?: number | string;
  icon?: boolean;
  placeholder?: string;
  changeVisibility?: any;
  passwordVisible?: boolean;
  focusBorderColor?: string;
  required?: boolean;
  validate?: any;
  customclassName?: any;
}

const fixedInputclassName =
  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40';

const PrimaryInput = <TFormValues extends Record<string, any>>({
  name,
  register,
  error,
  label,
  type = 'text',
  icon = false,
  placeholder,
  passwordVisible,
  defaultValue,
  changeVisibility,
  required = false,
  validate = {},
}: FormProps<TFormValues>) => {
  console.log({ passwordVisible });
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-800"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            {...register(name, { required, ...validate })}
            defaultValue={defaultValue}
            className={fixedInputclassName}
          />
          {icon && (
            <button
              onClick={() => changeVisibility()}
              className="absolute z-10 inset-y-0 right-0  flex items-center cursor-pointer text-blue-300 px-4"
            >
              {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          )}
        </div>
        <div className="text-sm text-red-800">
          {(error?.type === 'required' && `${label} is required`) ||
            error?.message}
        </div>
      </div>
    </>
  );
};

export default PrimaryInput;
