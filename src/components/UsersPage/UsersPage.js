import React from 'react';

import UsersList from '../UsersList/UsersList';
import Loader from '../UI/Loader/Loader';
import Section from '../UI/Section/Section';
import styles from './UsersPage.module.scss';

const UsersPage = ({ isLoading, error, users }) => {
  return (
    <Section>
      <h1 className={styles.header}>Список пользователей</h1>
      {isLoading ? <Loader /> : <UsersList users={users} />}
      {!isLoading && !error && (
        <p className={styles.text}>Найдено {users.length} пользователей</p>
      )}
      {error && <div>{error}</div>}
    </Section>
  );
};

export default UsersPage;
