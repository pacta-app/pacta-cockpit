import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphQLProvider, { buildQueryFactory } from 'ra-data-graphql';
//import buildGraphcoolProvider from 'ra-data-graphcool';
//import jsonServerProvider from 'ra-data-json-server'; // demo only
import { UserList } from './users';
import { TestList } from './test';
import Dashboard from './Dashboard';
//import buildQuery from './buildQuery';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {

    buildGraphQLProvider({ 
      buildQuery: [],
      clientOptions: { uri: 'https://fakeql.com/graphql/865bb4b7a209a2a718c7ca6c94534827' },
    })
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