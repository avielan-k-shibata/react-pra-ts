
import {
    Routes,
    Route,
  } from "react-router-dom";

import Home from "../page/Home"
import {Test} from "../page/Test"
export const Router= ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
        </Routes>
    );

}
  
