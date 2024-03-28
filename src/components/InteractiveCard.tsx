'use client'
import React from "react"

export default function InteractiveCard({children, cardType}:{children:React.ReactNode, cardType?:string}) {
    function onCardMouseAction(event:React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }
        else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

    if (cardType == 'booking') {
        return(
            <div className="w-[100%] h-[200px] shadow-lg rounded-lg bg-white
            flex flex-row">
                {children}
            </div>
        )
    }

    return(
        <div className="w-[70%] h-[240px] shadow-lg rounded-lg bg-white
        flex flex-row mx-[15%]"
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    )
}