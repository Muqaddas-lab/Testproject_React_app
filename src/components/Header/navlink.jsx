import Image from "next/image"
import React from "react"

function Navlink({name}){
    const props =true
    const isvalid=props==null?"yes" :"No"
    console.log("my name",name)
    //undefined
    //null
    //NaN

    return(
        <li className="">
            {name}
        </li>
    )
}

export default Navlink