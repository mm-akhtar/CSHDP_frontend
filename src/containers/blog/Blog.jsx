import React, { useEffect, useState } from 'react'
import axios from "../../connection/axios";
import requests from '../../connection/requests';
import './blog.css'
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Blog = () => {
    const [pcaData, setPcaData] = useState([]);
    const [f1Data, setF1Data] = useState([]);
    const [generalData, setGeneralData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        const request = await axios.get(requests.fetchResults);
        setF1Data([
            {
                name: " "
            },
            {
                name: "NB",
                PCA: request.data.nb.PCA.F1_Score,
                General: request.data.nb.General.F1_Score
            },
            {
                name: "KNN",
                PCA: request.data.knn.PCA.F1_Score,
                General: request.data.knn.General.F1_Score
            },
            {
                name: "SVM",
                PCA: request.data.svm.PCA.F1_Score,
                General: request.data.svm.General.F1_Score
            },
            {
                name: "DT",
                PCA: request.data.dt.PCA.F1_Score,
                General: request.data.dt.General.F1_Score
            },
            {
                name: "RF",
                PCA: request.data.rf.PCA.F1_Score,
                General: request.data.rf.General.F1_Score
            },
            {
                name: "LR",
                PCA: request.data.lr.PCA.F1_Score,
                General: request.data.lr.General.F1_Score
            },
            {
                name: "XGB",
                PCA: request.data.xg.PCA.F1_Score,
                General: request.data.xg.General.F1_Score
            },
            {
                name: " ",
            }
        ]);
        setPcaData([
            {
                name: "NB",
                Precision: request.data.nb.PCA.Precision,
                Recall: request.data.nb.PCA.Recall,
                Accuracy: request.data.nb.PCA.Accuracy
            },
            {
                name: "KNN",
                Precision: request.data.knn.PCA.Precision,
                Recall: request.data.knn.PCA.Recall,
                Accuracy: request.data.knn.PCA.Accuracy
            },
            {
                name: "SVM",
                Precision: request.data.svm.PCA.Precision,
                Recall: request.data.svm.PCA.Recall,
                Accuracy: request.data.svm.PCA.Accuracy
            },
            {
                name: "DT",
                Precision: request.data.dt.PCA.Precision,
                Recall: request.data.dt.PCA.Recall,
                Accuracy: request.data.dt.PCA.Accuracy
            },
            {
                name: "RF",
                Precision: request.data.rf.PCA.Precision,
                Recall: request.data.rf.PCA.Recall,
                Accuracy: request.data.rf.PCA.Accuracy
            },
            {
                name: "LR",
                Precision: request.data.lr.PCA.Precision,
                Recall: request.data.lr.PCA.Recall,
                Accuracy: request.data.lr.PCA.Accuracy
            },
            {
                name: "XGB",
                Precision: request.data.xg.PCA.Precision,
                Recall: request.data.xg.PCA.Recall,
                Accuracy: request.data.xg.PCA.Accuracy
            }
        ]);
        setGeneralData([
            {
                name: "NB",
                Precision: request.data.nb.General.Precision,
                Recall: request.data.nb.General.Recall,
                Accuracy: request.data.nb.General.Accuracy
            },
            {
                name: "KNN",
                Precision: request.data.knn.General.Precision,
                Recall: request.data.knn.General.Recall,
                Accuracy: request.data.knn.General.Accuracy
            },
            {
                name: "SVM",
                Precision: request.data.svm.General.Precision,
                Recall: request.data.svm.General.Recall,
                Accuracy: request.data.svm.General.Accuracy
            },
            {
                name: "DT",
                Precision: request.data.dt.General.Precision,
                Recall: request.data.dt.General.Recall,
                Accuracy: request.data.dt.General.Accuracy
            },
            {
                name: "RF",
                Precision: request.data.rf.General.Precision,
                Recall: request.data.rf.General.Recall,
                Accuracy: request.data.rf.General.Accuracy
            },
            {
                name: "LR",
                Precision: request.data.lr.General.Precision,
                Recall: request.data.lr.General.Recall,
                Accuracy: request.data.lr.General.Accuracy
            },
            {
                name: "XGB",
                Precision: request.data.xg.General.Precision,
                Recall: request.data.xg.General.Recall,
                Accuracy: request.data.xg.General.Accuracy
            }
        ]);
        return request
    }
    return (
        <div className='hd__blog' id='conclusion'>
            <div className='hd__blog-heading' style={{ 'textAlign': 'center', 'marginBottom': '50px' }}>
                <h1 className='gradient__text' style={{ 'textAlign': 'center' }}>
                    RESULT ANALYSIS
                </h1>
            </div>
            <div className='hd__blog-container'>
                <div className='chart'>
                    <h3 className='gradient__text' style={{ 'textAlign': 'center' }}>
                        F1 Score with and without PCA %
                    </h3>
                    <LineChart
                        width={500}
                        height={300}
                        data={f1Data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis stroke="#fff" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="linear"
                            dataKey="General"
                            stroke="#2F86A6"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="linear" dataKey="PCA" stroke="#ff2a9d" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className='chart'>
                    <h3 className='gradient__text' style={{ 'textAlign': 'center' }}>
                        Result without PCA %
                    </h3>
                    <BarChart
                        width={500}
                        height={300}
                        data={generalData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis yAxisId="left" orientation="left" stroke="#fff" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="Precision" fill="#B91646" />
                        <Bar yAxisId="left" dataKey="Recall" fill="#2F86A6" />
                        <Bar yAxisId="left" dataKey="Accuracy" fill="#7FC8A9" />
                    </BarChart>
                </div>
                <div className='chart'>
                    <h3 className='gradient__text' style={{ 'textAlign': 'center' }}>
                        Result with PCA %
                    </h3>
                    <BarChart
                        width={500}
                        height={300}
                        data={pcaData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis yAxisId="left" orientation="left" stroke="#fff" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="Precision" fill="#B91646" />
                        <Bar yAxisId="left" dataKey="Recall" fill="#2F86A6" />
                        <Bar yAxisId="left" dataKey="Accuracy" fill="#7FC8A9" />
                    </BarChart>
                </div>
            </div>
            <div className='hd__blog-container'>
                <div className='hd__blog-content'>
                    <p>We have experimented the classification performance
                        using Cleveland+ Hungarian dataset and
                        analyzed their performance on raw data and with feature
                        selection data (PCA).For this experiment we
                        have used python version 3.7. We have used 10-fold cross
                        validation during the training of dataset. The ith fold of the
                        dataset is used for testing purpose to evaluate the trained
                        model and other folds are used to train the model. <br></br>
                        From Fig. (Result without PCA %) We have shown the classification accuracy for
                        the traditional machine learning algorithms to predict heart
                        disease. Without using any feature selection techniques Random Forest (RF)
                        shows highest classification accuracy 92.44% to predict heart
                        disease. We have also found a good performance in
                        measuring precision and recall.
                        From Fig.(F1 Score with and without PCA %)  the F1 Score is shown for General and PCA
                        feature selection technique.
                    </p>
                </div>
                <div className='hd__blog-content'>
                    <p>
                        From fig. (Result with PCA %) We have analyzed
                        the precision, recall and accuracy for seven machine learning
                        algorithms using principal component analysis feature
                        selection method. Using PCA, we have found highest
                        classification accuracy for random forest classifier.
                        Using PCA (PCA for three components),
                        we have found 92.65% accuracy.
                        So, it is noticed the impact of using principal
                        component analysis to improve the performance of the
                        model is tremendous in this work.
                        <br />
                        Comparison among the classifiers with respect to f1 score
                        is shown in fig.(F1 Score with and without PCA %) for Cleveland + Hungarian dataset
                        In case of base dataset, the
                        impact of feature selection method varies with respect to
                        machine learning algorithms.
                        Our proposed work Random Forest
                        with PCA feature selection technique has achieved highest
                        classification accuracy 92.65% to predict heart disease.
                    </p>
                </div>
            </div>
            <div className='hd__blog-heading'>
                <h1 className='gradient__text' style={{ 'textAlign': 'center', 'marginTop': '30px' }}>
                    CONCLUSION
                </h1>
            </div>
            <div className='hd__cta'>
                <div className='hd__cta-content'>
                    <h4>
                        The World Health Organization points to cardiovascular disease as
                        one of the dominant reasons of mortality all over the world. An
                        automated system which can predict the risk of heart disease analyzing
                        some important factors like age, chest pain, number of vessels, previous
                        record of heart attacks etc., will be very helpful to mankind and smart
                        healthcare system. This work has achieved highest classification accuracy
                        92.65% using Random Forest Classifier and PCA. This technique can be used
                        by medical practitioners for early prediction of the disease so that timely
                        care can be taken by the patient. Disease prediction classifiers like this
                        work will play an active role to diagnose heart disease in preliminary stage
                        which will be a great achievement in medical science.
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Blog
