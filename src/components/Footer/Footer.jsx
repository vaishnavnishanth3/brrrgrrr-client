import React from "react"

import "./Footer.css"

import gmailImage from "./assets/gmail.jpeg"
import instagramLogo from "./assets/instagram-logo.png"
import linkedinLogo from "./assets/linkedin-logo.jpeg"
import twitterLogo from "./assets/twitter-logo.jpeg"
import Logo from "../Header/assets/burger.jpeg"

export default function Footer() 
{
    return (
        <div id="footer">
            <div className="credits">
                <div>
                    <img 
                        src={Logo} 
                        alt="Logo" 
                    />
                </div>

                <div className="name">
                    Vaishnav
                </div>

                <div className="description">
                    (Designer and Developer)
                </div>
            </div>

            <div className="copyrights">
                © Copyrights 2024 Vaishnav Nishanth A V ®
            </div>

            <div className="contact">
                <div className="email">
                    <a 
                        href="mailto:vaishnavnishanth3@gmail.com">
                            <img 
                                src={gmailImage} 
                                alt="Gmail"
                            />
                    </a>
                </div>

                <div className="linkedin">
                    <a 
                        href="https://in.linkedin.com/in/vaishnav-nishanth-av-9b9421216">
                            <img 
                                src={linkedinLogo} 
                                alt="linkedin"
                            />
                    </a>
                </div>
                
                <div className="instagram">
                    <a 
                        href="https://www.instagram.com/bruce_waynx">
                            <img 
                                src={instagramLogo} 
                                alt="Instagram"
                            />
                    </a>
                </div>

                <div className="twitter">
                    <a 
                        href="https://www.twitter.com/bruce_waynx">
                            <img 
                                src={twitterLogo} 
                                alt="Twitter"
                            />
                    </a>
                </div>
            </div>
        </div>
    )
}
