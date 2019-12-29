// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { TestList } from './test';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    title="Pacta Stats & More"
    dashboard={Dashboard} 
    dataProvider={dataProvider}
    logoutButton={<div>&nbsp;</div>}
  >
    <Resource name="tests" list={TestList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;