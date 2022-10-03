import { AMenuMeatball } from 'components/AMenuMeatball/AMenuMeatball';
import { ABreadcrumbs } from 'components/ABreadcrumbs/ABreadcrumbs';
import { ATitle } from 'components/ATitle/ATitle';
import { ADescription } from 'components/ADescription/ADescription';
import { descriptions } from 'constants/descriptions/descriptions';
import { Form } from 'components/Form/Form';
import './Contacts.scss';
import '../../constants/styles/variants.scss';

const Contacts = () => (
  <div className="contacts-wrap">
    <div className="col-1-wrap">
      <AMenuMeatball />
    </div>
    <div className="col-2-wrap">
      <div className="col-2-1">
        <ABreadcrumbs />
      </div>
      <div className="col-2-2">
        <ATitle variant={'contacts-header-main'}>Мы рядом</ATitle>
        <ADescription>{descriptions.contacts}</ADescription>
      </div>
      <Form />
    </div>
  </div>
);

export default Contacts;
