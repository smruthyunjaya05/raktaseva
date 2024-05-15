import React from "react";
import vedio from './vedio.mp4'
function bgvedio(){
    return(
   <div className="bgcontainer">
    <div className="overlay">
        <video src={vedio} autoPlay loop muted/>
        <div className="container">
            <h1> <h3>Welcome to <span>रक्त</span> seva</h3></h1>
        </div>
    </div>
   </div>
    )
}
export default bgvedio;