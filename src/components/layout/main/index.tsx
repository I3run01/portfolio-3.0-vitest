import { ReactNode } from "react"
import { MainLayout } from "./main.styled"

type props = {
    children: ReactNode
}

export const Main = ({children}:props) => {
    return (
        <MainLayout>
          {children}
        </MainLayout>
      );
}