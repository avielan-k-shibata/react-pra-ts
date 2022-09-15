
import { Link, useParams  } from "react-router-dom";
import { Layout } from "../components/template/Layout"
export const List = () => {
  const {pageName} = useParams();
  console.log(pageName);
    return (
      <Layout>
        <Link to="/test">test</Link>
        <div className="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
      </Layout>
    )
  }
  