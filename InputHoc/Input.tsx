'use client';

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

type InputProps = {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    register,
    required,
    errors,
    type = 'text',
    disabled,
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    placeholder="name"
                    {...register(id, { required })}
                    className="
            form-input
            block 
            w-full
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6"

                    
                />
            </div>
        </div>
    );
}

export default Input;