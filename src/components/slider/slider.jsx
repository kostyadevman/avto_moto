import React, {useEffect, useState} from "react";
import CarBg1 from "../../img/car_bg_1.jpg";
import CarBg2 from "../../img/car_bg_2.jpg";
import CarBg3 from "../../img/car_bg_3.jpg";

const images = [CarBg1, CarBg2, CarBg3]

const Slider = () => {

  const [index, setIndex] = useState(0);
  const [previousStatus, setPreviousStatus] = useState(false);
  const [nextStatus, setNextStatus] = useState(true);

  useEffect(() => {
    setPreviousStatus(index === 0);
    setNextStatus(index === (images.length - 1));
  }, [index]);


  const getNextIndex = (index) => {
    return (index + 1) % images.length
  }

  const getPreviousIndex = (index) => {
    return (index < 0) ? 0 : index - 1;
  }

  const previousClickHandler = () => {
    setIndex(getPreviousIndex(index));
  }

  const nextClickHandler = () => {
    setIndex(getNextIndex(index));
  }

  const getIconClass = (btnNotActive) => {
    return btnNotActive ? `slider__icon` :`slider__icon slider__icon--active`
  }

  return (
    <section className="slider">
      <span className="slider__tag">New model</span>
      <img
        width="600"
        height="375"
        src={images[index]}
        alt="Car big"
      />
      <div className="slider__wrapper">
        <button
          className="slider__btn"
          onClick={previousClickHandler}
          disabled={previousStatus}
          aria-label="previous"
        >
          <svg className={getIconClass(previousStatus)} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25.5" fill="white" stroke="#D7D9DF"/>
            <path d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513" />
          </svg>
        </button>
        <img src={images[0]} alt="" width="128" height="80"/>
        <img src={images[1]} alt="" width="128" height="80"/>
        <img src={images[2]} alt="" width="128" height="80"/>
        <button
          className="slider__btn"
          onClick={nextClickHandler}
          disabled={nextStatus}
          aria-label="next"
        >
          <svg className={getIconClass(nextStatus)} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.500408 26C0.500408 40.0834 11.9143 51.5 25.9939 51.5C40.0734 51.5 51.4873 40.0834 51.4873 26C51.4873 11.9166 40.0734 0.5 25.9939 0.5C11.9143 0.5 0.500408 11.9166 0.500408 26Z" fill="white" stroke="#D7D9DF"/>
            <path d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513" />
          </svg>
        </button >
      </div>
    </section>
  )
}

export default Slider;
