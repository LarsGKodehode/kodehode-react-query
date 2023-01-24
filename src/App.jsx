import './App.css'

// Importing the bits we want
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import { useState } from 'react'

const queryClient = new QueryClient()

function App() {
  const [state, setState] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <DisplayCard />
        <button onClick={() => setState(true)}>Enable</button>
        <button onClick={() => setState(false)}>Disable</button>
      </div>
    </QueryClientProvider>
  )
}

function DisplayCard() {
  const query = useQuery(
    // First argument is a "key"
    "myKey",
    // Second is a function reference for getting the data
    fetchFunction,
    // Third is an option object
    {
      staleTime: 1000,
      // this will delete the local cache for this key
      cacheTime: 2000,
      // refetchInterval: 1000,
    }
    )
  console.log(query);

  return (
    <div></div>
  )
}

async function fetchFunction() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()

  return data
}

export default App
