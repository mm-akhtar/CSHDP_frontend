import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo-2.png'

const Footer = () => {
    return (
        <div className='hd__footer section__padding'>
            <div className='hd__footer-heading'>
                <h1 className='gradient__text'>
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className='hd__footer-btn'>
                <p>Explore The World</p>
            </div>
            <div className='hd__footer-links'>
                <div className='hd__footer-links_logo'>
                    <img src={gpt3Logo} alt='logo' />
                    <p>All Rights Reserved</p>
                </div>
                <div className='hd__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Countries</p>
                    <p>Contacts</p>
                </div>
                <div className='hd__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privecy Policy</p>
                    <p>Countries</p>
                    <p>Contacts</p>
                </div>
                <div className='hd__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Terms and Conditions</p>
                    <p>Privecy Policy</p>
                    <p>Countries</p>
                    <p>Contacts</p>
                </div>
            </div>
            <div className='hd__footer-copyright'>
                <p>© 2021 HDP. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
