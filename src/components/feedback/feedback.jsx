import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setModalOpen} from "../../store/action";
import Rating from "../rating/rating";

const Feedback = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments)
  const _handleAddClick = (evt) => {
    dispatch(setModalOpen(true));
  }

  return (
    <React.Fragment>
      <ul className="feedback__list">
        {comments.map((comment, index) => (
          <li className="feedback__item" key={index}>
            <p className="feedback__name">{comment.name}</p>
            <div className="feedback__wrapper">
              <svg className="feedback__img" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.61816 4.36377H0.703125V3.06006H3.61816V0.0717773H4.93652V3.06006H7.85889V4.36377H4.93652V7.3374H3.61816V4.36377Z" fill="#D12136"/>
              </svg>
              <div>
                <p className="feedback__label">Достоинства</p>
                <p className="feedback__value">{comment.pros}</p>
              </div>
            </div>
            <div className="feedback__wrapper">
              <svg className="feedback__img" width="7" height="2" viewBox="0 0 7 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.600586 1.66748V0.275879H6.89941V1.66748H0.600586Z" fill="#FF0000"/>
              </svg>
              <div>
                <p className="feedback__label">Недостатки</p>
                <p className="feedback__value">{comment.cons}</p>
              </div>
            </div>
            <p className="feedback__label">Комментарий</p>
            <p className="feedback__value">{comment.text}</p>
            <Rating rating={comment.rating}/>
          </li>
        ))}
      </ul>
    <button
      className="feedback__add-comment"
      onClick={_handleAddClick}
    >
      оставить отзыв
    </button>
    </React.Fragment>
  );
};

export default Feedback;
