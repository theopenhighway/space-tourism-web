import React from 'react';
import componentStyle from '../styles/components.module.scss'

interface InputStyle {
  inputPlaceholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  name: string;
  // value?: any;
}

const Input: React.FC<InputStyle> = ({
  inputPlaceholder,
  type,
  name,
  onChange,
  errorMessage,
  // value,
}) => {
  const isError = errorMessage.length > 0;

  return (
    <>
      <input
        className={isError ? componentStyle.inputTextInvalid : componentStyle.inputText}
        type={type}
        name={name}
        placeholder={inputPlaceholder}
        onChange={onChange}
      ></input>
      <p className={componentStyle.descriptionInvalidData}>{errorMessage}</p>
    </>
  );
};

export default Input;
