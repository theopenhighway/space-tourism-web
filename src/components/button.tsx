import React from 'react';

interface ButtonStyle {
  content: string;
  style: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonStyle> = ({
  content,
  style,
  onClick,
  type,
  disabled,
}) => {
  return (
    <div>
      <button
        className={style}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
