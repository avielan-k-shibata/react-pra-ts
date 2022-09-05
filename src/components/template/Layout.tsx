import { FC, ReactNode } from 'react'
type Props = {
    children?: ReactNode
  }
export const Layout:FC<Props> = ({children})=> {
    return (
      <div className="main_container">
        333
      {children}
      </div>
    )
  }
  
