import React from 'react';

import Button from '../UI/Button/Button';
import { propComparator } from '../../utils/utils';
import styles from './Aside.module.scss';

const Aside = ({ users, setUsers }) => {

  const sortUsersByField = (...fields) => {
    const copyUsers = [...users];
    const sortedUsers = copyUsers.sort(propComparator(...fields));
    setUsers(sortedUsers);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <p>Сортировка</p>
        <Button onClick={() => sortUsersByField('name')}>по имени</Button>
        <Button onClick={() => sortUsersByField('address', 'city')}>по городу</Button>
        <Button onClick={() => sortUsersByField('company', 'name')}>по компании</Button>
      </div>
    </aside>
  );
};

export default Aside;
