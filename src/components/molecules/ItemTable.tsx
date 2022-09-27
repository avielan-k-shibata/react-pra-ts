// import { ReactNode } from 'react';
// import {Menu} from "../molecules/Menu"
import { Link } from "react-router-dom";

type Props = {
    id: number;
    name: string;
    // children?: ReactNode;
};

export const ItemTable = ({id, name} :Props) => {
    const link = "/itemlist/" + String(id);
    // console.log(String(id), link)
    return (
    <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>Quality Control Specialist</td>
        <td><Link to={link}>編集</Link></td>
    </tr>
    )
}  