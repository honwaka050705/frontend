import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import { InputNipponYear } from './InputNipponYear';
 

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Stack gap={5}>
      <ApolloProvider client={client} >
        <InputNipponYear />
      </ApolloProvider>
    </Stack>
  );
}

export default App;
