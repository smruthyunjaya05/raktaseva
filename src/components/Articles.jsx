import React from "react";
import Article from "./Article";
export default function Articles() {
    const arts = [
        {
            id:0,
            name:"AI",
            desc:"This content is about AI"
        },
        {
            id:1,
            name:"BC",
            desc:"This content is about BC"
        },
        {
            id:2,
            name:"IoT",
            desc:"This content is about IoT"
        },
        {
            id:3,
            name:"Docker",
            desc:"This content is about Docker"
        }
    ]
    return (
        <>
            {arts.map((art) => (
                <Article art={art}/>
            ))}
        </>
    )
}