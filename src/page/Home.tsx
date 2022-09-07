
import { Link } from "react-router-dom";
import { Layout } from "../components/template/Layout"
function Home() {
    return (
      <Layout>
        <Link to="/test">test</Link>
      </Layout>
    )
  }
  
  export default Home;