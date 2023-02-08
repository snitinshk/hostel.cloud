import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import LocalImages from "../utils/images";
import NorButton from "../component/button";


function Header() {
    const handleClickScroll = () => {
        const element = document.getElementById('featuresBx');
        if (element) {
            document.body.classList.remove('navigation-open');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClickScrollHm = () => {
        const element = document.getElementById('homePage');
        if (element) {
            document.body.classList.remove('navigation-open');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openModal = (event) => {
        document.body.classList.add('navigation-open');
    }
    const hideModal = (event) => {
        document.body.classList.remove('navigation-open');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0) {
            document.getElementById(href)?.scrollIntoView();
        }
    });



    return (
        <header>
            <div className="container_2 Dflex al-cnt sp-bt">
                <Link to={'/'}>
                    <img src={LocalImages.LOGO} alt="" className='desktopvw' />
                    <img src={LocalImages.MLOGO} alt="" className='mobilevw' />
                </Link>
                <div className='rt Dflex al-cnt rt'>
                    <Link to={'/#homePage'} className='mobilevw' onClick={handleClickScrollHm}>Home</Link>
                    <Link to={'/#featuresBx'} onClick={handleClickScroll}>Features</Link>
                    <Link to={'/contact-us'} onClick={hideModal}>Contact us</Link>
                    <NorButton buttonText="Get Started" className={'get_stst desktopvw'} />
                    <div className='closebtn mobilevw' onClick={hideModal}>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" width="100" height="100" rx="50" fill="#96B7FA" />
                            <rect x="35" y="63.7759" width="42" height="2.46154" transform="rotate(-45 35 63.7759)" fill="black" />
                            <rect x="35.7402" y="34" width="42" height="2.46154" transform="rotate(45 35.7402 34)" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className="hamburger mobilevw" onClick={openModal}>
                    <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.307861" width="42" height="2.46154" fill="#3C406F" />
                        <rect y="11.7698" width="42" height="2.46154" fill="#3C406F" />
                        <rect y="23.2307" width="42" height="2.46154" fill="#3C406F" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header