import React, { useEffect, useRef, useState } from 'react';
// import '../Css/Login.css'
import './pages.css'
import darklogo from '../assets/Images/ic_home_logo_dark.svg';
import lightlogo from '../assets/Images/ic_home_logo_light.svg';
import arrow from '../assets/Images/ic_home_try_arrow.svg';
import ai_model from '../assets/Images/ic_home_ai_model.webp'
import mediaLogo from '../assets/Images/ic_home_play.svg'
import '../styles/tailwind.css';
import SignInModal, { style } from '../Modals/SignInModal';
import { fetchUserData } from '../Services/Api';
import { Box, Button, Modal, Typography } from '@mui/material';
const Login = () => {
    const style = {
        whiteSpace: 'nowrap',
        cursor: 'pointer'
    };

    const getUserData = async (n, endpoint) => {
        try {
            const userData = await fetchUserData(n, endpoint);
            console.log(userData);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    getUserData('use', 1);

    // const [show, setShow] = useState(false);
    // const toggleSignInModal = () => {
    //     setShow(!show); // Toggle the show state
    // }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='style_root__tHamV'>
            <SignInModal open={open} handleClose={handleClose} />
            <header className='style_headerFixed__DvCmD'>
                <div className="style_nav___YelD">
                    <div className="style_navContainer__NpEhJ style_navTransparent__o373m style_colorWhite__Z1xQp" style={style}>
                        <img alt="logo" loading="lazy" width="192" height="34" decoding="async" data-nimg="1" style={{ color: 'transparent', display: 'none' }} src={darklogo} />
                        <img alt="logo" loading="lazy" width="192" height="34" decoding="async" data-nimg="1" style={{ color: 'transparent', display: 'block' }} src={lightlogo} />
                        <div className="ag16-t style_startMenu__FLWuY "><p>Get Started</p><div className="style_menuIcon__fMTt_   "></div></div>
                        <div className="ag16-t style_menu__WpUKu "><p>Solutions</p><div className="style_menuIcon__fMTt_   "></div></div>
                        <div className="ag16-t style_menu__WpUKu "><p>Plans &amp; Pricing</p></div>
                        <div className="ag16-t style_menu__WpUKu "><p>Help</p><div className="style_menuIcon__fMTt_   "></div></div>
                        <div className="ag16 style_signButton__7bxrn left_side" style={style} onClick={handleOpen}>Sign In</div>
                    </div>
                </div>
            </header>
            <main className='style_main__UY2kE'>
                <div className='style_middle__A61iB'>
                    <div className="agTitleMiddle style_title1__6Hy1F">Code Flink</div>
                    <div className="agTitleLarge style_title2__VKdSw">AI E-Commerce Creative Studio</div>
                    <div className="ag24 style_title3__pomOe">Instantly generate high-quality images at fractional costs</div>
                    <div className="style_middleBtns__pW4Q9">
                        {/* <div className="ag20-t style_tryBtn__JrVsN style_middleBtn__HmRDi">
                            <img alt="aimodel" loading="lazy" width="91" height="106" decoding="async" data-nimg="1" className="style_modelImage__O9KeP" src={ai_model} />
                            <p>Try for Free</p>
                            <img alt="arrow" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="style_tryArrow__Vt4p7" src={arrow} />
                        </div> */}
                        <div className="style_playBtn__QFQqU style_middleBtn__HmRDi">
                            <img alt="play" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" src={mediaLogo} />
                            <div className="style_playText__H6n5l">
                                <div className="ag10-t">Want To Know More?</div>
                                <div className="ag18-t style_watchTxt__sFn2e">Watch Video</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
export default Login;
