import React from 'react'

function Slides({ title, result }) {
    return (
        <div className="product-slider__card">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp" alt="star wars" className="product-slider__cover" />
            <div className="product-slider__content">
                <h1 className="product-slider__title">
                    {title}
                </h1>
                <div className="product-labels__title-1">WITHOUT PCA</div>
                <div className="product-ctr">
                    <div className="product-labels">
                        <div className="product-labels__group">
                            <div className="product-inf">
                                <div className="product-inf__percent">
                                    <div className="product-inf__percent-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                    <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="50" cy="50" r="47" strokeDasharray={`${result.General.Precision * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="product-inf__percent-txt">
                                        {result.General.Precision}
                                    </div>
                                </div>

                                <div className="product-labels__title">PRECISION </div>
                            </div>

                            <div className="product-inf">
                                <div className="product-inf__percent">
                                    <div className="product-inf__percent-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                    <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="50" cy="50" r="47" strokeDasharray={`${result.General.Recall * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="product-inf__percent-txt">
                                        {result.General.Recall}
                                    </div>
                                </div>

                                <div className="product-labels__title">RECALL</div>
                            </div>

                        </div>

                    </div>

                    <span className="hr-vertical"></span>
                    <div className="product-labels__group">
                        <div className="product-inf">
                            <div className="product-inf__percent">
                                <div className="product-inf__percent-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="50" cy="50" r="47" strokeDasharray={`${result.General.Accuracy * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                    </svg>
                                </div>
                                <div className="product-inf__percent-txt">
                                    {result.General.Accuracy}
                                </div>
                            </div>

                            <span className="product-inf__title">ACCURACY</span>
                        </div>
                    </div>

                </div>
                <div className="product-labels__title-1">WITH PCA</div>
                <div className="product-ctr">
                    <div className="product-labels">
                        <div className="product-labels__group">
                            <div className="product-inf">
                                <div className="product-inf__percent">
                                    <div className="product-inf__percent-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                    <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="50" cy="50" r="47" strokeDasharray={`${result.PCA.Precision * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="product-inf__percent-txt">
                                        {result.PCA.Precision}
                                    </div>
                                </div>

                                <span className="product-labels__title">PRECISION</span>
                            </div>

                            <div className="product-inf">
                                <div className="product-inf__percent">
                                    <div className="product-inf__percent-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                    <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="50" cy="50" r="47" strokeDasharray={`${result.PCA.Recall * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="product-inf__percent-txt">
                                        {result.PCA.Recall}
                                    </div>
                                </div>

                                <span className="product-labels__title">RECALL</span>
                            </div>

                        </div>


                    </div>
                    <span className="hr-vertical"></span>
                    <div className="product-labels__group">
                        <div className="product-inf">
                            <div className="product-inf__percent">
                                <div className="product-inf__percent-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="50" cy="50" r="47" strokeDasharray={`${result.PCA.Accuracy * 3} 300`} stroke="#cb2240" strokeWidth="4" fill="none" />
                                    </svg>
                                </div>
                                <div className="product-inf__percent-txt">
                                    {result.PCA.Accuracy}
                                </div>
                            </div>

                            <span className="product-inf__title">ACCURACY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slides
