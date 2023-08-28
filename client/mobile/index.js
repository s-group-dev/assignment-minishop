import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const Minishop = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Minishop);
