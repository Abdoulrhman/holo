import React, { useContext } from 'react';
import { AppContext } from '../../context/dataContext';

const Select: React.FC = () => {
  const { setAppConfig, appConfig } = useContext(AppContext);

  return (
    <select
      onChange={(e) =>
        setAppConfig({
          ...appConfig,
          selectedOption: e.target.value,
        })
      }
    >
      <option value="users">Users</option>
      <option value="repositories">Repositories</option>
    </select>
  );
};

export default Select;
