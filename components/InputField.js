import React from 'react';

const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
}) => {
  if (type === 'textarea') {
    return (
      <div className='form-group w-full  flex flex-col'>
        {label && (
          <label className='mb-2 tracking-widest text-lg' htmlFor='input-field'>
            {label}
          </label>
        )}
        <textarea
          className='p-2 border-2 focus:bg-white border-black rounded bg-transparent'
          rows='6'
        />
      </div>
    );
  } else {
    return (
      <div className='w-full form-group flex flex-col justify-center'>
        {label && (
          <label className='mb-2 tracking-widest text-lg' htmlFor='input-field'>
            {label}
          </label>
        )}
        <input
          type={type}
          value={value}
          name={name}
          className={`p-2 border-2 focus:bg-white outline-none border-black rounded bg-transparent ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
};
export default InputField;
