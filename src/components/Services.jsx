import React from "react";
import Service from "./Service";
export default function Services() {
    const services = [
        {
            id:0,
            name:"Register as a Donor",
            desc:"Join our community by registering as a blood donor on Rakth Seva. Your commitment can make a significant impact in times of emergencies."
        },
        {
            id:1,
            name:"Find Blood Donors",
            desc:"For those in need, Rakth Seva serves as a platform to connect with willing donors. Our user-friendly interface ensures a seamless experience."
        },
        {
            id:2,
            name:"Raise Awareness",
            desc:"Rakth Seva is not just a platform; it's a movement. We strive to raise awareness about the importance of regular blood donation through educational initiatives and community engagement."
        }
    ]
    return (
        <div id="services">
            {services.map((service) => (
                <Service service={service}/>
            ))}
        </div>
    )
}