
import { memo, useEffect, FC } from "react";
// import { useParams } from "react-router-dom";
import { Layout } from "../components/template/Layout"
import { useAllItem } from "../hooks/useAllItems";
import {ItemTable} from "../components/molecules/ItemTable"
export const ItemList: FC = memo(() => {
  const { getItems, items, loading } = useAllItem();
  useEffect(() => getItems(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
  return (
    <>
      {loading ? (
        <Layout>
          LOADING
        </Layout>
      ) : (
        <Layout>
          <table className="table w-full">

            <thead>
              <tr>
                <th>ID</th>
                <th>名前</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ id, attributes }) => (
                <ItemTable id={id} key={id} name={attributes.name}/>
              ))}
            </tbody>
          </table>

        </Layout>
      )}

    </>
  )
});