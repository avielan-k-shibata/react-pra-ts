
import { Link, useParams  } from "react-router-dom";
import { Layout } from "../components/template/Layout"
export const List = () => {
  const {pageName} = useParams();
  console.log(pageName);
    return (
      <Layout>
        <Link to="/test">test</Link>
        <Link to="/test">test</Link>
      </Layout>
    )
  }
  