import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphQLProvider from 'ra-data-graphql-simple';
//import buildGraphcoolProvider from 'ra-data-graphcool';
//import jsonServerProvider from 'ra-data-json-server'; // demo only
import { UserList } from './users';
import { TestList } from './test';
import Dashboard from './Dashboard';
import buildQuery from './buildQuery.json';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }


  componentDidMount() {
    buildGraphQLProvider({ clientOptions: { uri: 'https://fakeql.com/graphql/48df4f7ac538c7ab84430417faf04407' }})
        .then(dataProvider => this.setState({ dataProvider }));
}


  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
        return <div>Loading</div>;
    }

    return (
      <Admin
      title="Pacta Stats"
      dashboard={Dashboard} 
      dataProvider={dataProvider}
      logoutButton={<div>&nbsp;</div>}
    >
      <Resource name="tests" list={TestList} />
      <Resource name="users" list={UserList} />
    </Admin>
    )
  }
}

export default App;