import React, { useContext } from 'react';
import { REPOSITORIES, USERS } from '../../constants/translations';
import { AppContext } from '../../context/appContext';
import { LangContext } from '../../context/langContext';

const Select: React.FC = () => {
  const { setAppConfig, appConfig } = useContext(AppContext);
  const { translate } = useContext(LangContext);


  return (
    <select
      onChange={(e) =>
        setAppConfig({
          ...appConfig,
          selectedOption: e.target.value,
        })
      }
    >
      <option value="users">{translate(USERS)}</option>
      <option value="repositories">{translate(REPOSITORIES)}</option>
    </select>
  );
};

export default Select;
