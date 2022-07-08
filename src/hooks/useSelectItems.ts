import { useCallback, useState } from "react";
import {Item} from "../types/items"
type Props = {
    target:{
        value: string,
      }
    onClick: () => void,
}
export const useSelectItem = (props: Props)=>{
    const [slectItem, setSelectItem] = useState<Item | null>(null)
    const {target} = props
    const onSelectItem = (props: Props) =>{

    }
    return {onSelectItem, setSelectItem}
}