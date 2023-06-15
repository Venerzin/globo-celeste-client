import React from "react";
import { NavBar } from "../../components/NavBar";

type IPage = {
    children: React.ReactNode
}

function Page({ children }: IPage){

    return <>
        <NavBar />
        
        {children}
    </>
}

export { Page };