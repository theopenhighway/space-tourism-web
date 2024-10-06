import React from 'react';

interface DropDownStyle {
  dropDownStyle: string;
  content: string[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropDownMenu: React.FC<DropDownStyle> = ({ content, dropDownStyle }) => {
  return (
    <select className={dropDownStyle}>
      {content.map((text, index) => {
        return (
          <option key={index} value={text}>
            {text}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownMenu;
