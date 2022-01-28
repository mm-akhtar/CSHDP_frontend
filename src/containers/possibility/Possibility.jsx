import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
import { HdForm } from '../../components'

const Possibility = () => {
    return (
        <div className='hd__possibility section__padding' id='possibility'>
            <div className='hd__possibility-image'>
                <img src={possibilityImage} alt='possibility' />
            </div>
            <div className='hd__possibility-content'>
                {/* <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <h4>
                    Request Early Access to Get Started
                </h4> */}
                <HdForm />
            </div>
        </div>
    )
}

export default Possibility
