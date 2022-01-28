import React from 'react'

import './feature.css'

const Feature = ({ title, text }) => {
    return (
        <div className='hd__features-container__feature'>
            <div className='hd__features-container__feature-title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='hd__features-container_feature-text'>
                {text}
            </div>
        </div>
    )
}

export default Feature
