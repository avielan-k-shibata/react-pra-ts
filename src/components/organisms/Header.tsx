import { useInView } from 'react-intersection-observer';
import {DrawerMenuBtn} from "../atoms/DrawerMenuBtn"
import { Link } from "react-router-dom";

export const Header = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <>
            
            <div className={inView? "navbar w-full sticky top-0 z-40 bg-white h-[60px] duration-300": "navbar w-full sticky top-0 z-40 bg-white h-[60px] duration-300 shadow-sm"}>
                <DrawerMenuBtn />
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Item 1</Link></li>
                    <li>
                        <Link to="/">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                        <li><Link to="/">Submenu 1</Link></li>
                        <li><Link to="/">Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Item 3</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[0px]" ref={ref}></div>
        </>
    )
}  