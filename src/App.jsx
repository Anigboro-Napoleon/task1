import './Styles/main.css'
import Todo from './Todo'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Films from './Films'
import Nav from './Nav'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index"
  })
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/film' element={<Films />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
