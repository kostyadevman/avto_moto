import React from "react";
import PropTypes from 'prop-types';
import {getRatingList} from "../../utils";
import {MAX_RATING, RatingScore, RatingText} from "../../const";

const Rating = ({rating}) => {
  const ratingList = getRatingList(MAX_RATING);

  const getStarClassName = (index) => {
    return (index >= rating) ? `rating__star` : `rating__star rating__star--active`
  }

  const getRatingText = (rating) => {
    let text = ``;

    switch (rating) {
      case RatingScore.NOT:
        text = RatingText.EMPTY;
        break;
      case RatingScore.WORST:
        text = RatingText.NOT_MATCH;
        break;
      case RatingScore.BAD:
        text = RatingText.NOT_MATCH;
        break;
      case RatingScore.MEDIUN:
        text = RatingText.MATCH;
        break;
      case RatingScore.HIGHT:
        text = RatingText.MATCH;
        break;
      case RatingScore.BEST:
        text = RatingText.MATCH;
        break;
      default:
        text = RatingText.EMPTY;
    }
    return text;
  }
  return (
    <div className="rating__wrapper">
      <ul className="rating__list">
        {ratingList.map((item, index) => (
          <li key={index}>
            <svg className={getStarClassName(index)} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z"/>
            </svg>
          </li>
        ))}
      </ul>
      <span className="rating__score">{getRatingText(rating)}</span>
    </div>
  );
};

Rating.propTyes = {
  rating: PropTypes.number.isRequired
}

export default Rating;
