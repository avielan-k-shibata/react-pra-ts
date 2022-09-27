import axios from "axios";
import { useCallback, useState } from "react";

import {Items} from "../types/items"
const token =
  "b4e349da21812b3469514026d163b160f941845f86f7f5d2972f9c6757ba5f54800af30a7cc19883bce0eac97423be75266dda504f99e3422d8b0ae5d0865f994cad9cdc3c65d097a7fc2f5c7724ef6d0b8322f19fb90fdcccd16abdd79b0a2e5282adb663d2db8f2491d9603530726fb1eb06fcbd77df35c97b682e94e3a7bc";
export const useAllItem = ()=>{
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Array<Items>>([]);

    const getItems = useCallback(()=>{
        setLoading(true);
        axios
        .get("http://localhost:1337/api/items", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(({data}) => {setItems(data.data)})
        .catch(() => {

        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
    return {getItems, items, loading}
}