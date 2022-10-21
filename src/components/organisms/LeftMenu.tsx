import { Link  } from "react-router-dom";

export const LeftMenu = () => {
    return (
        <aside className='w-[300px] hidden md:block p-[12px]'>
           <div className="sticky top-[64px]">
            <ul className="menu bg-base-100 w-full p-2 rounded-box ">
                <li><Link to="/signup">ユーザー登録</Link></li>

                <li className="menu-title">
                    <span>顧客情報</span>
                </li>
                <li><Link to="/itemlist">Item 1</Link></li>
                <li><Link to="/list">Item 2</Link></li>
                <li className="menu-title">
                    <span>商品情報</span>
                </li>
                <li><Link to="/list">Item 1</Link></li>
                <li><Link to="/test">CSV 登録</Link></li>
                </ul>

           </div>
        </aside>
    )
}  