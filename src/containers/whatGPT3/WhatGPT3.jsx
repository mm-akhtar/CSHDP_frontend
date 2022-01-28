import React from 'react'
import { Feature } from '../../components'

import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className='hd__whathd section__margin' id='wgpt3'>
            <div className='hd__whathd-feature'>
                <Feature
                    title='Objective'
                    text={<p>The primary objective of this project is to examine the effect of
                        feature selection approaches on the accuracy of heart disease prediction.
                        This analysis was conducted against a collection of distinctive features
                        extracted from frequently used heart disease datasets available using various
                        feature selection algorithms. The characterization is one data mining technique
                        through which the destiny end result or prediction may be made depending on the
                        historic data this is accessible. Subsequently, via way of means of using scientific
                        data mining, it is conceivable to give bits of knowledge on a patient's history and
                        can offer clinical help through the prediction. For the medical investigation of the
                        patients, these patterns are a lot of fundamental. Clinical data mining utilizes
                        classification techniques that are an indispensable part of recognizing the chance
                        of heart attack before the event. The classification approach may be organized and
                        attempted to make the prediction that makes a decision the individual's concept of
                        being prompted through coronary heart diseases.</p>}
                />
            </div>
            <div className='hd__whathd-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond imagination
                </h1>
                <p><a href='#models'>Explore The Models</a></p>
            </div>
            <div className='hd__whathd-container'>
                <Feature
                    title='Exisiting System'
                    text={<p>
                        Methaila et. al predicted heart disease using data mining Techniques.
                        The main Methodology used for prediction is KNN Algorithms, Decision
                        Trees like CART, C4.5, CHAID, J48, ID3 Algorithms, and Naive Bayes
                        Techniques. This system uses 13 medical attributes as input and with
                        that input, Data sets it to process the data mining techniques and shows the most accurate one.<br />
                        Rairikar et. al. used three main data mining techniques in their work:
                        namely Decision Tree, Neural Networks and Naïve Bayes Classifier are used.
                    </p>}
                />
                <Feature
                    title='Proposed System'
                    text={<p>
                        In this system, a heart disease data set is used.
                        The main aim of this system is to predict the possibilities of occurring heart disease of
                        the patients in terms of percentage. This is performed through data mining classification
                        techniques. •	These models are used to enhance the accuracy level of the classification
                        technique. This model performs both the classification and prediction methods. These models
                        are performed using python Programming Language.
                    </p>}
                />
                <Feature
                    title='Background of The Study'
                    text={<p>
                        Data analysis proves to be crucial in the medical field. It provides a meaningful base to critical
                        decisions. It helps to create a complete study proposal. One of the most important uses of data
                        analysis is that it helps in keeping human bias away from medical conclusion with the help of
                        proper statistical treatment. By use of data mining for exploratory analysis because of nontrivial
                        information in large volumes of data.
                    </p>}
                />
            </div>
        </div>
    )
}

export default WhatGPT3
