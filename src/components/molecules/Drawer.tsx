import { ReactNode } from 'react';
// import {Menu} from "../molecules/Menu"
import { Link } from "react-router-dom";

type Props = {
    children?: ReactNode;
};

export const Drawer = ({ children} :Props) => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/">Sidebar Item 1</Link></li>
                    <li><Link to="/">Sidebar Item 2</Link></li>

                </ul>
                {/* <Menu /> */}
            </div>
        </div>
    )
}  