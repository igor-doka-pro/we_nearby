import { AInput } from 'components/AInput/AInput';
import { IconButton } from 'components/IconButton/IconButton';
import { RadioButton } from 'components/RadioButton/RadioButton';
import './Form.scss';

export const Form = () => {
  return (
    <form className="form-wrap">
      <div className="col-1-wrapper">
        <div style={{ width: '43.3rem' }}>
          <AInput textPlaceholder="Ваше имя" />
        </div>
        <div style={{ width: '27.8rem' }}>
          <AInput textPlaceholder="Ваш E-Mail" />
        </div>
        {/* <div style={{ width: '74.1rem' }}>
          <AInput textPlaceholder="Комментарий" />
        </div> */}
        <RadioButton />
      </div>
      <div className="col-2-wrapper">
        <IconButton />
      </div>
    </form>
  );
};
