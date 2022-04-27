import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import useHttp from './hooks/use-http';
import Aside from './components/Aside/Aside';
import UsersPage from './components/UsersPage/UsersPage';
import UserProfile from './components/UserProfile/UserProfile';
import styles from './App.module.scss';

const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const applyData = (data) => setUsers(data);

    sendRequest({ url }, applyData);
  }, [sendRequest]);

  return (
    <div className={styles.container}>
      <Aside users={users} setUsers={setUsers}/>
      <Switch>
        <Route path="/users" exact>
          <UsersPage isLoading={isLoading} error={error} users={users} />
        </Route>
        <Route path="/users/:userId">
          <UserProfile users={users}/>
        </Route>
        <Redirect from="/" to="/users" exact />
      </Switch>
    </div>
  );
};

export default App;
