import React from 'react';
// import componentStyle from '../styles/components.module.scss'

interface InputCheckboxStyle {
  inputPlaceholder: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  key: number;
}

const Checkbox: React.FC<InputCheckboxStyle> = ({
  inputPlaceholder,
  name,
  onChange,
  key,
}) => {
  // const isError = errorMessage.length > 0;

  return (
    <>
    <label htmlFor={name}>
      <input
        key={key}
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={inputPlaceholder}
      /> {inputPlaceholder}</label><br/>
    
   </>
  );
};

export default Checkbox;
