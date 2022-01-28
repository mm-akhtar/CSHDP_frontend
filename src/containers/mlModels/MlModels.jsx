import React, { useRef, useState } from 'react'
import './mlmodels.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import Knn from '../../assets/KNN.png'
import nb from '../../assets/naive-bayes.png'
import dt from '../../assets/dt.png'
import lr from '../../assets/lr.png'
import rf from '../../assets/rf.png'
import xg from '../../assets/xg.png'
import svm from '../../assets/svm.png'

import logo from '../../assets/logo.png'
import SwiperCore, {
    Navigation
} from 'swiper';
import { Slides } from '../../components';
SwiperCore.use([Navigation]);

function MlModels({ slidesData }) {
    const [image, setImage] = useState(6)
    const swiperRef = useRef(null);
    return (
        <div id='models'>
            <div className="wrapper">
                <div className="content">
                    <div className="bg-shape">
                        <img src={logo} alt="" />
                    </div>
                    <div className="product-img">
                        <div className={`product-img__item ${image === 0 ? 'active ' : image}`} id="img1">
                            <img src={nb} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 1 ? 'active ' : image}`}>
                            <img src={Knn} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 2 ? 'active ' : image}`} id="img3">
                            <img src={svm} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 3 ? 'active ' : image}`} id="img3">
                            <img src={dt} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 4 ? 'active ' : image}`} id="img3">
                            <img src={rf} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 5 ? 'active ' : image}`} id="img3">
                            <img src={lr} alt="star wars" className="product-img__img" />
                        </div>
                        <div className={`product-img__item ${image === 6 ? 'active ' : image}`} id="img3">
                            <img src={xg} alt="star wars" className="product-img__img" />
                        </div>

                    </div>
                    <div className="product-slider">
                        <button className="prev " id="previousButton" onClick={() => { swiperRef.current.swiper.slidePrev(); setImage(swiperRef.current.swiper.realIndex); }}>
                            <span className="icon">
                                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left"></use></svg>
                            </span>
                        </button>
                        <button className="next " id="nextButton" onClick={() => { swiperRef.current.swiper.slideNext(); setImage(swiperRef.current.swiper.realIndex) }}>
                            <span className="icon">
                                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                            </span>
                        </button>

                        <Swiper
                            loop
                            ref={swiperRef}
                            className="product-slider__wrp swiper-wrapper mySwiper"
                        >
                            {slidesData.map((item, index) => (
                                <SwiperSlide className="product-slider__item swiper-slide" key={index}>
                                    <Slides
                                        title={item.title}
                                        result={item.result}
                                        key={item.title + index}
                                    />
                                </SwiperSlide>
                            ))}
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

export default MlModels
