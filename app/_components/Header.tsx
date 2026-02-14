"use client";

type HeaderType = {
    headerText?: string;
}

export default function Header({headerText}:HeaderType){
    return(
        <header className="fixed flex bg-black z-50 border-r border-b border-white pr-1 pl-1">   
            <h1 className="text-2xl font-mono text-white">{headerText}</h1>
        </header>
 )
}