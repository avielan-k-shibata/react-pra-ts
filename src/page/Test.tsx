import React from "react";

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { memo } from 'react';

import { Error } from "../types/error";
import { Item } from "../types/items";
import { CsvImport } from "../components/atoms/CsvImport";
import { Layout } from "../components/template/Layout"

const token =
  "b4e349da21812b3469514026d163b160f941845f86f7f5d2972f9c6757ba5f54800af30a7cc19883bce0eac97423be75266dda504f99e3422d8b0ae5d0865f994cad9cdc3c65d097a7fc2f5c7724ef6d0b8322f19fb90fdcccd16abdd79b0a2e5282adb663d2db8f2491d9603530726fb1eb06fcbd77df35c97b682e94e3a7bc";


export const Test = memo(() => {
  const [count, setCount] =useState(999);
  const [error, setError] = useState<Error>();
  const [items, setItems] = useState<Array<Item>>([]);
  type Props2 = React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const CountClick = ()=>{
    setCount(count + 1);
  }
  const Kirikae = (p: Props2) => {
    console.log(p.currentTarget.dataset.item);
    axios.put(
      `http://localhost:1337/api/items/${p.currentTarget.dataset.item}`,
      {
        // id:p.target.value,
        // attributes:{
        //   status: false
        // }
        data: {
          status: false,
          name: "ラッシングベルト",
          category: "2",
        },
      }
    );
  };
  useEffect(() => {
    axios
      // .get('https://jsonplaceholder.typicode.com/users')
      .get("http://localhost:1337/api/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then(({ data }) => {
        setItems(data.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        setError(error);
        console.log(error);
      });
  }, []);
  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Layout>

      <p onClick={CountClick}>いいね！{count}</p>
      <ul>
        {items.map(({ id, attributes }) => (
          <li key={id}>
            {attributes.name}
            <button data-item={id} onClick={Kirikae}>
              boolean
            </button>
          </li>
        ))}
      </ul>
      <CsvImport />
    </Layout>
  );
}
)