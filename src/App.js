import React, { useState, useEffect } from 'react'
import { Blog, Footer, Possibility, Features, WhatGPT3, Header, MlModels, Codes } from './containers'
import { CTA, Brand, Navbar } from './components'
import axios from "./connection/axios";
import requests from './connection/requests';
import './App.css'
function App() {
  // const [results, setResults] = useState({});
  const [slidesData, setSlidesData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const request = await axios.get(requests.fetchResults);
    // setResults(request.data);
    // saveData();
    setSlidesData([
      {
        title: <>Naive <br /> Bayes</>,
        result: request.data.nb
      },
      {
        title: <>K-Nearest <br /> Neighbors</>,
        result: request.data.knn
      },
      {
        title: <>Support vector <br /> machine</>,
        result: request.data.svm
      },
      {
        title: <>Decision <br /> tree</>,
        result: request.data.dt
      },
      {
        title: <>Random <br /> Forest</>,
        result: request.data.rf
      },
      {
        title: <>Logistic <br /> Regression</>,
        result: request.data.lr
      },
      {
        title: <>XG <br /> Boosting</>,
        result: request.data.xg
      },
    ])
    return request;
  }
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      {<MlModels slidesData={slidesData} />}
      <CTA />
      <Possibility />
      <Codes />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
