import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosError }  from 'axios';
import { useEffect, useState } from 'react';
import {Error} from "./types/error"
import {Item} from "./types/items"
import {CsvImport} from "./components/atoms/CsvImport"
function App() {
  
  const [error, setError] = useState<Error>();
  const [items, setItems] = useState<Array<Item>>([]);

  type Props2 = React.MouseEvent<HTMLButtonElement, MouseEvent>
  const Kirikae = (p:Props2) =>{
    console.log(p.currentTarget.dataset.item)
    axios
      .put(`http://localhost:1337/api/items/${p.currentTarget.dataset.item}`, {
        // id:p.target.value,
        // attributes:{
        //   status: false
        // }
        data: {
          status: false,
          name: "ラッシングベルト",
          category: "2",
        }
      })
  }
  useEffect(() => {
    axios
      // .get('https://jsonplaceholder.typicode.com/users')
      .get('http://localhost:1337/api/items')

      .then(({ data }) => {
        setItems(data.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        setError(error)
        console.log(error)
      })
  }, [])
  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {items.map(({ id, attributes }) => <li key={id}>{attributes.name}<button data-item={id} onClick={Kirikae}>boolean</button></li>)}
      </ul>
        <CsvImport />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
