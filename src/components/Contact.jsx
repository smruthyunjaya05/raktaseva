import React from "react";
export default function Contact() {
    return (
        <div id="contact">
            <div id="fields">
            <h3>Contact</h3>
                <div className="inp-grp">
                    <label for="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className="inp-grp">
                    <label for="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div className="inp-grp">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone"/>
                </div>
                <div className="inp-grp">
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}