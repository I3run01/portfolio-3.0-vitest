import { ReactNode } from "react"
import { ContainerMain } from './container.style'

type props = {
    children: ReactNode
}

export const Container = ({children}:props) => {

    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    )
}