import React from 'react';
import componentStyle from '../styles/components.module.scss'

interface InputStyle {
  inputPlaceholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string
}

const RadioButton: React.FC<InputStyle> = ({
  name,
  onChange,
  inputPlaceholder,
  value
}) => {


  return (
    <>
    <label className={componentStyle.sizeButton}>
        <input
            type="radio"
            name={name}
            onChange={onChange}
            value={value}
        ></input>
        <div>{inputPlaceholder}</div>
    </label>

    </>
  );
};

export default RadioButton;
