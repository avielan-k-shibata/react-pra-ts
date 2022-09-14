
import {
    Routes,
    Route,
  } from "react-router-dom";

import Home from "../page/Home"
import {Test} from "../page/Test"
import {List} from "../page/List"
import {E404} from "../page/404"
export const Router= ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            
            <Route path="/list" element={<List />}>
                <Route path=":pageName" element={<List />} />
            </Route>
            <Route path="*" element={<E404 />} />

        </Routes>
    );

}
  
