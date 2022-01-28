import React, { useRef, useState } from 'react'
import axios from "../../connection/axios";
import requests from '../../connection/requests';
import './hdform.css'
function HdForm() {
    const [result, setResult] = useState('');
    const ageRef = useRef('')
    const sexRef = useRef('')
    const cptRef = useRef('')
    const rbpRef = useRef('')
    const clstRef = useRef('')
    const fbsRef = useRef('')
    const recgRef = useRef('')
    const mhrRef = useRef('')
    const anginaRef = useRef('')
    const opRef = useRef('')
    const stRef = useRef('')

    const formSubmitHandler = async function (e) {
        e.preventDefault();
        const attributes = [
            parseFloat(ageRef.current.value),
            parseFloat(sexRef.current.value),
            parseFloat(cptRef.current.value),
            parseFloat(rbpRef.current.value),
            parseFloat(clstRef.current.value),
            parseFloat(fbsRef.current.value),
            parseFloat(recgRef.current.value),
            parseFloat(mhrRef.current.value),
            parseFloat(anginaRef.current.value),
            parseFloat(opRef.current.value),
            parseFloat(stRef.current.value)
        ]
        const response = await axios.post(requests.predictResult,
            {
                "attributes": attributes
            }
        );
        const rslt = response.data.result
        if (rslt === 1) {
            setResult('YES')
        } else {
            setResult('NO')
        }

        ageRef.current.value = ''
        sexRef.current.value = ''
        cptRef.current.value = ''
        rbpRef.current.value = ''
        clstRef.current.value = ''
        fbsRef.current.value = ''
        recgRef.current.value = ''
        mhrRef.current.value = ''
        anginaRef.current.value = ''
        opRef.current.value = ''
        stRef.current.value = ''
    }
    return (
        <div className="login-wrap">
            <div className="login-html">
                <h2 className='gradient__text'>
                    Predict Using The Random Forest Classification Model
                </h2>
                <form className="login-form" onSubmit={formSubmitHandler}>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Age :</label>
                            <input id="user" type="number" className="input" placeholder="Patients Age in years (Numeric)" ref={ageRef} required min="1" max="140" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">SEX :</label>
                            <input id="pass" type="number" className="input" placeholder="Patient's Gender Male as 1 Female as 0" ref={sexRef} required min="0" max="1" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass1" className="label" >cpt :</label>
                            <input id="pass1" type="number" className="input" placeholder="Type of chest pain (1 to 4)" ref={cptRef} required min="1" max="4" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass2" className="label" >resting bp :</label>
                            <input id="pass2" type="number" className="input" placeholder="Level of blood pressure at resting (mm/HG)" ref={rbpRef} required min="50" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass3" className="label" >cholesterol :</label>
                            <input id="pass3" type="number" className="input" placeholder="Serum cholestrol in mg/dl" ref={clstRef} required min="1" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass4" className="label" >fbs :</label>
                            <input id="pass4" type="number" className="input" placeholder="Blood sugar levels on fasting (0 or 1)" ref={fbsRef} required min="0" max="1" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass5" className="label">resting ecg :</label>
                            <input id="pass5" type="number" className="input" placeholder="ecg in 3 distinct values (0, 1, 2)" ref={recgRef} required min="0" max="2" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass6" className="label">mhr :</label>
                            <input id="pass6" type="number" className="input" placeholder="Maximum heart rate achieved (Numeric)" ref={mhrRef} required min="1" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass7" className="label">exercise angina :</label>
                            <input id="pass7" type="number" className="input" placeholder="Angina induced by exercise (O or 1)" ref={anginaRef} required min="0" max="1" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass8" className="label">oldpeak :</label>
                            <input id="pass8" type="number" className="input" placeholder="Exercise induced ST-depression" ref={opRef} required min="0" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass9" className="label">ST slope :</label>
                            <input id="pass9" type="number" className="input" data-type="password" placeholder="ST segment measured during peak (0 to 3)" ref={stRef} required min="0" max="3" />
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Predict" />
                        </div>
                        <div className="hr"></div>
                        {result === 'YES' && <div className="foot-lnk">
                            <label htmlFor="tab-1" className="label gradient__text">The patient has Heart Disease</label>
                        </div>}
                        {result === 'NO' && <div className="foot-lnk">
                            <label htmlFor="tab-1" className="label gradient__text">The Patient doesn't have Heart Disease</label>
                        </div>}
                        {result === '' && <div className="foot-lnk">
                            <label htmlFor="tab-1" className="label gradient__text">RESULT</label>
                        </div>}
                    </div>
                </form>
            </div>
        </div >
    )
}

export default HdForm
