import React from "react"
import {FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
export default function Footer() {
    return (
        <>
            <div className="icons">
                <FaFacebook size="1.5em"/>
                <FaInstagram size="1.5em"/>
                <FaLinkedinIn size="1.5em"/>
                <FaGithub size="1.5em"/>
                <FaTwitter size="1.5em"/>
            </div>
        </>
    )
}