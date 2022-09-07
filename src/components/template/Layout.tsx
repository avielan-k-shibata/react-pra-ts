import { FC, ReactNode } from 'react'
import {IO} from "../atoms/IO"
import { Header } from "../organisms/Header"
import {Drawer} from "../molecules/Drawer"

type Props = {
    children?: ReactNode
  }
export const Layout:FC<Props> = ({children})=> {
    return (
      <Drawer >
        <div className="w-full">
          <div className='m-auto flex flex-wrap'>
            <Header/>
            <aside className='w-[300px] hidden md:block'>side</aside>
            <main className='min-h-[200vh] w-full md:w-[calc(100%-300px)]'>{children}</main>
            <footer><IO as='p' c_name='aaa'>test</IO></footer>
          </div>
        </div>
      </Drawer>
    )
}
  
