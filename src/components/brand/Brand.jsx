import React from 'react'
import './brand.css'
const Brand = () => {
    return (
        <div className='section__padding-2'>
            <h3 className='gradient__text' style={{ 'textAlign': 'center' }}>
                Developed By
            </h3>
            <div className='hd__brand'>
                <div className='hd__brand-name'>
                    <h3 >Md Masrur Akhtar</h3>
                    <h4 >(1KN18IS017)</h4>
                </div>
                <div className='hd__brand-name'>
                    <h3 >Misba Sultana</h3>
                    <h4 >(1KN18IS018)</h4>
                </div>
                <div className='hd__brand-name'>
                    <h3 >Sarfaraz Khan P</h3>
                    <h4 >(1KN18IS041)</h4>
                </div>
                <div className='hd__brand-name'>
                    <h3 >Nikhil Sahani</h3>
                    <h4 >(1KN19IS401)</h4>
                </div>
            </div>
            <h2 className='gradient__text' style={{ 'textAlign': 'center' }}>
                Under The Guidance Of
            </h2>
            <div className='hd__brand'>
                <div className='hd__brand-name'>
                    <h2 >Mohammed Ziaulla</h2>
                    <h4 >Asst. professor, Dept. of CSE</h4>
                </div>
            </div>
        </div>
    )
}

export default Brand
