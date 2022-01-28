import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Dataset ',
        text: <p>We have used Cleveland + Hungarian dataset from <a href='https://www.kaggle.com/sid321axn/heart-statlog-cleveland-hungary-final'> UCI Machine learning repository.</a> This dataset contains 1100+ samples which have 12
            attributes.</p>
    },
    {
        title: 'The Feature Selction (PCA)',
        text: <p>Principal component analysis (PCA) is used to reduce the
            dimensionality of a dataset which is multivariate. Reducing
            multidimensional data into lower dimension improves the
            performance simplifying the process.
        </p>
    },
    {
        title: '10-fold Crossvalidation',
        text: <p>Cross-validation is a technique to evaluate predictive models by partitioning the original sample into a training set to train the model, and a test set to evaluate it</p>
    },
    {
        title: 'Result Analysis',
        text: <p>We have experimented the classification performance using Cleveland + Hungarian dataset and
            analyzed their performance on raw data and with feature
            selection data (PCA).For this experiment we
            have used python version 3.7</p>
    }
]

const Features = () => {
    return (
        <div className='hd__features section__padding' id='features'>
            <div className='hd__features-heading'>
                <h1 className='gradient__text'>
                    The Future is Now and We Just Need To Experience It. Let's Learn More About The Project Features.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='hd_features-container'>
                {featuresData.map((item, index) => (
                    <Feature
                        title={item.title}
                        text={item.text}
                        key={item.title + index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features
