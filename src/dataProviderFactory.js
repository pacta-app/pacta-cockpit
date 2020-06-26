import dataProviderRuby from './dataProvider'; //handle ruby dataProvider
import dataProviderJava from './dataProviderForJava';// handle java dataProvider
import { rubyClient, javaClient } from './apolloClient';//custom two diff client one will fetch ruby service ,other will java

const IsOmsResource = resource => {
  const omsReource = [
    'markets',
    'regions',
    'countries',
    'states',
    'items',
    'salesOrganizations',
  ];
  return omsReource.some(ele => ele === resource);
}; //those resource will fetch data from java service others will go to ruby

const rubyDataProvider = async (type, resource, params) => {
  const provider = await dataProviderRuby({
    client: rubyClient,
  });
  return provider(type, resource, params);
};

const javaDataProvider = async (type, resource, params) => {
  const provider = await dataProviderJava({
    client: javaClient,
  });
  return provider(type, resource, params);
};

const superDataProvider = (type, resource, params) => {
  if (IsOmsResource(resource)) {
    console.log('当前Java', resource);
    return javaDataProvider(type, resource, params);
  }

  console.log('当前ruby', resource);
  return rubyDataProvider(type, resource, params);
};

export default superDataProvider;