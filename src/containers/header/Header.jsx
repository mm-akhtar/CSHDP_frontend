import React from 'react'
import './header.css'
import people from '../../assets/people-2.png'
import ai from '../../assets/heart-3.png'

const Header = () => {
    return (
        <div className='hd__header section__padding' id='home'>
            <div className='hd__header-content'>
                <h1 className='gradient__text'>
                    A Comparative Study on Heart Disease Prediction
                </h1>
                <p>
                    using data mining and feature selection techniques.
                    which can help to detect and predict the early stage of heart disease.
                    The heart disease diagnosis is the process of detecting or predicting heart disease from a patient's records.
                </p>
                <div className='hd__header-content__input'>
                    <input type='text' placeholder='Try the machine learning model' readOnly />
                    <button type='button'><a href='#possibility'>Predict Now</a></button>
                </div>
                <div className='hd__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1100+ instances with 12 attributes of the dataset used to train the models</p>
                </div>
            </div>
            <div className='hd__header-image'>
                <img src={ai} alt='AI' />
            </div>
        </div>
    )
}

export default Header
