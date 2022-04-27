import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserCard.module.scss';

const UserCard = ({ user }) => {
  return (
    <article className={styles.card}>
      <div>
        <p className={styles.text}>
          <span className={styles.tag}>ФИО: </span>
          {user.name}
        </p>
        <p className={styles.text}>
          <span className={styles.tag}>город: </span>
          {user.address.city}
        </p>
        <p className={styles.text}>
          <span className={styles.tag}>компания: </span>
          {user.company.name}
        </p>
      </div>
      <Link
        className={styles.link}
        to={`/users/${user.id}`}
      >
        Подробнее
      </Link>
    </article>
  );
};

export default UserCard;
