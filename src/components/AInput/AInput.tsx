import { ChangeEvent, useState, useRef } from 'react';
import { IAInputProps } from './type';
import './AInput.scss';

export const AInput = ({ textPlaceholder }: IAInputProps) => {
  const [text, setText] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  const handleFocusPlaceholder = () => {
    if (isFocus || text.trim()) {
      return;
    }

    inputRef.current?.focus();
    setIsFocus(true);
  };

  const handleBlurPlaceholder = () => {
    if (text.trim()) {
      return;
    }

    setIsFocus(false);
  };

  const placeholder = (
    <div
      className={`input__placeholder ${isFocus ? 'input__placeholder_surface' : ''}`}
      onClick={handleFocusPlaceholder}
    >
      {textPlaceholder} {<span className={`required ${isFocus ? 'required_surface' : ''}`}>*</span>}
    </div>
  );

  return (
    <div className="input-wrap">
      {placeholder}
      <input
        ref={inputRef}
        className="input__field"
        type="text"
        value={text}
        onChange={handleClickInput}
        onBlur={handleBlurPlaceholder}
      />
    </div>
  );
};
