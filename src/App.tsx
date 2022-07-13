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
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <label htmlFor="my-modal-4" className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="cursor-pointer modal">
        <label className="relative modal-box" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            Youve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>

      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
    <button className="btn w-64 rounded-full">Button</button>
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
