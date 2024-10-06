import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../style.module.scss';

interface InputPwdStyle {
  inputPlaceholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  name: string;
  icon: string;
  value: any;
}

const InputPwd: React.FC<InputPwdStyle> = ({
  inputPlaceholder,
  name,
  onChange,
  errorMessage,
  icon,
  value,
}) => {
  const [check, setCheck] = React.useState(false);
  const isError = errorMessage.length > 0;

  function toggleShowNoShow() {
    if (check === true) {
      setCheck(false);
    } else if (check === false) {
      setCheck(true);
    }
  }

  return (
    <>
      <div className={styles.wrapperInput}>
        <input
          className={isError ? styles.inputTextInvalidData : styles.inputText}
          name={name}
          value={value}
          type={check ? 'text' : 'password'}
          placeholder={inputPlaceholder}
          onChange={onChange}
        ></input>
        <button
          onClick={() => toggleShowNoShow()}
          onKeyDown={() => toggleShowNoShow()}
        >
          <img alt={icon} src={icon} />
        </button>
      </div>

      <p className={styles.descriptionInvalidData}>{errorMessage}</p>
    </>
  );
};

export default InputPwd;
