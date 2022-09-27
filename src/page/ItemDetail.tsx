
import { memo, useEffect, FC } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Layout } from "../components/template/Layout"
import { useGetItem } from "../hooks/useGetItem";
import {ItemTable} from "../components/molecules/ItemTable"
export const ItemDetail: FC = memo(() => {
  let params = useParams();
  const { getItem, item, loading } = useGetItem(params.pageId);
  useEffect(() => getItem(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  console.log(item)
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
                <th>名前{params.pageId}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>

        </Layout>
      )}

    </>
  )
});
