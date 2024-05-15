import React from "react";
export default function Service({service}) {
    return (
        <div className="service">
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
        </div>
    )
}