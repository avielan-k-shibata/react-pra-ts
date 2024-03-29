
import {
    Routes,
    Route,
  } from "react-router-dom";

import Home from "../page/Home"
import {Test} from "../page/Test"
import {List} from "../page/List"
import {ItemList} from "../page/ItemList"
import {ItemDetail} from "../page/ItemDetail"
import {SignUp} from "../page/signUp"
import {E404} from "../page/404"
export const Router= ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="itemlist" element={<ItemList />} />
            <Route path="itemlist/:pageId" element={<ItemDetail />} />
            <Route path="signup" element={<SignUp />} />
            
            <Route path="list" element={<List />}>
                <Route path=":pageName" element={<List />} />
            </Route>
            <Route path="*" element={<E404 />} />

        </Routes>
    );

}
  
