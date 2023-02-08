import React from 'react'
import { Link } from 'react-router-dom'
import LocalImages from "../utils/images";


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="foot_top Dflex sp-bt">
                    <div className="foot_del">
                        <figure><img src={LocalImages.FootImg} alt="" /></figure>
                    </div>
                    <div className="foot_nav">
                        <h4>Product</h4>
                        <Link to={"/#featuresBx"} onClick={() => document.getElementById('featuresBx').scrollIntoView({ behavior: 'smooth' })}>Features</Link>
                    </div>
                    <div className="foot_nav">
                        <h4>Company</h4>
                        <Link to={"/"}>About us</Link>
                        <Link to={"/"}>Careers</Link>
                        <Link to={"/"}>FAQ</Link>
                    </div>
                    <div className="foot_nav">
                        <h4>Private</h4>
                        <Link to={"/"}>Terms of Service</Link>
                        <Link to={"/"}>Privacy Policy</Link>
                    </div>
                </div>
                <div className="Dflex sp-bt m-t-40 ackedByWd">
                    <p className='foot_Para'>Attract more students to live on-campus while simplifying your housing operations</p>
                    <div className="foot_backedBy">
                        <p>Backed By</p>
                        <figure><img src={LocalImages.Bkcby} alt="" /></figure>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p className='copyright'>
                        <i><img src={LocalImages.foolg} alt="" /></i>
                        Housing Cloud, Inc.<br />
                        Copyright 2023 © All rights reserved
                    </p>
                    <p className='del'>Designed and built in NYC</p>
                    <div className="lnlin Dflex al-cnt">
                        <figure>
                            <svg width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <rect x="0.0507812" y="3.95703" width="103" height="1" transform="rotate(-0.16442 0.0507812 3.95703)" fill="url(#paint0_linear_934_17916)" />
                                    <circle cx="107.052" cy="4.15061" r="3.5" transform="rotate(-0.16442 107.052 4.15061)" stroke="#1F213D" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_934_17916" x1="102.995" y1="5.1046" x2="3.49559" y2="4.81907" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1F213D" />
                                        <stop offset="1" stopColor="#1F213D" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </figure>
                        <figure className='m-l-15'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7" clipPath="url(#clip0_934_17919)">
                                    <path d="M19.0175 0.0275077L5.01756 0.067683C2.25657 0.0756061 0.0240033 2.32102 0.0319264 5.08201L0.0721017 19.082C0.0800248 21.8429 2.32544 24.0755 5.08643 24.0676L19.0864 24.0274C21.8484 24.0195 24.0799 21.7741 24.072 19.0131L24.0318 5.01314C24.0239 2.25215 21.7795 0.0195817 19.0175 0.0275077ZM8.07207 19.059L5.07208 19.0676L5.04051 8.06765L8.0405 8.05904L8.07207 19.059ZM6.53687 6.79535C5.57087 6.79812 4.78461 6.01038 4.78182 5.03638C4.77902 4.06238 5.56075 3.27014 6.52675 3.26737C7.49274 3.26459 8.27901 4.05234 8.2818 5.02634C8.2846 6.00033 7.50387 6.79258 6.53687 6.79535ZM20.072 19.0246L17.072 19.0332L17.056 13.4292C17.0463 10.0612 13.047 10.3277 13.056 13.4407L13.072 19.0446L10.0721 19.0533L10.0405 8.0533L13.0405 8.04469L13.0455 9.80969C14.4341 7.21969 20.0375 7.01261 20.0526 12.2656L20.072 19.0246Z" fill="#1F213D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_934_17919">
                                        <rect width="24" height="24" fill="white" transform="translate(0.0175781 0.0820312) rotate(-0.16442)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer