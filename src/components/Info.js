import React from "react";


import Photo from "../images/marekjaros.jpg"
export default function Info() {
    return (
        <>
        <div className="upper-side-photo">
            <img className="photo" src={Photo} alt="me"/>
            <div className="text">
                <h2>Marek Jaroš</h2>
                <h3>Frontend Developer</h3>
                <p>portfoliomrkjrs.netlify.app</p>
            </div>
            <div className="btn-parent">
            <button className="btn">Email</button>
            

            </div>
        </div>
        </>
    )
}

