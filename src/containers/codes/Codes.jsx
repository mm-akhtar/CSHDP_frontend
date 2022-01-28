import React, { useRef } from 'react'
import Code from '../../components/code/Code'
import codes from './code'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import './codes.css'
function Codes() {
    const swiperRef = useRef(null);
    return (
        <div id='codes' className='hd_code'>
            <div className="wrapper">
                <div className="content">
                    <div className="product-slider">
                        <button className="prev " id="previousButton" onClick={() => { swiperRef.current.swiper.slidePrev() }}>
                            <span className="icon">
                                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left"></use></svg>
                            </span>
                        </button>
                        <button className="next " id="nextButton" onClick={() => { swiperRef.current.swiper.slideNext() }}>
                            <span className="icon">
                                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                            </span>
                        </button>

                        <Swiper
                            loop
                            ref={swiperRef}
                            allowTouchMove={false}
                            className=" mySwiper"
                        >
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    Naive Bayes Model Code:
                                </h2>
                                <Code code={codes.nb} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    K-Nearest Neighbor MOdel Code:
                                </h2>
                                <Code code={codes.knn} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    Support Vector Machine Model Code:
                                </h2>
                                <Code code={codes.svm} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    Decision Tree Model Code:
                                </h2>
                                <Code code={codes.dt} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    Random Forest Model Code:
                                </h2>
                                <Code code={codes.rf} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    Logistic Regression Model Code:
                                </h2>
                                <Code code={codes.lr} language="Python" copy />
                            </SwiperSlide>
                            <SwiperSlide className="product-slider__item swiper-slide">
                                <h2 className='gradient__text'>
                                    XG-Boosting Model Code:
                                </h2>
                                <Code code={codes.xg} language="Python" copy />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

            </div>
            <svg className="hidden" hidden style={{ 'display': 'none' }}>
                <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                    <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
                </symbol>
                <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                    <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
                </symbol>
            </svg>
        </div>
    )
}

export default Codes
