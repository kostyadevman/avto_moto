import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addComment, setModalOpen} from "../../store/action";
import {getRatingList, isEscEvent} from "../../utils";
import {EMPTY_COMMENT, MAX_RATING} from "../../const";

const NewComment = () => {

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const modalClassName = isModalOpen ? `modal modal--active` : `modal`
  const [comment, setComment] = useState(EMPTY_COMMENT)

  const _handleEscPress = (evt) => {
    isEscEvent(evt, () => {
      dispatch(setModalOpen(false))
    })
  }
  useEffect(() => {
    if (!isModalOpen) {
      return
    }

    document.addEventListener(`keydown`, _handleEscPress)

    return () => document.removeEventListener(`keydown`, _handleEscPress)
  }, [isModalOpen])

  useEffect(() => {
    console.log(comment)
  }, [comment])

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addComment({...comment}));
    reset();
    dispatch(setModalOpen(false));
  }

  const _handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setComment({...comment, [name]: value});
  }

  const _handleRatingChange = (evt) => {
    setComment({...comment, rating: parseInt(evt.target.value, 10)})
  }

  const ratingList = getRatingList(MAX_RATING)

  const reset = () => {
    setComment(EMPTY_COMMENT);
  }

  return (
    <section className={modalClassName}>
      <div className="modal__content">
        <div className="modal__title">Оставить отзыв</div>
        <form className="modal__form new-comment" onSubmit={_handleSubmit}>
          <label htmlFor="name" className="new-comment__label visually-hidden">Name</label>
          <input
            type="text"
            className="new-comment__input new-comment__input--name"
            name="name"
            autoComplete="off"
            required
            onChange={_handleInputChange}
            value={comment.name}
          />
          <label htmlFor="pros" className="new-comment__label visually-hidden">Pros</label>
          <input
            type="text"
            className="new-comment__input new-comment__input--pros"
            name="pros"
            autoComplete="off"
            onChange={_handleInputChange}
            value={comment.pros}
          />
          <label htmlFor="cons" className="new-comment__label visually-hidden">Name</label>
          <input
            type="text"
            className="new-comment__input new-comment__input--cons"
            name="cons"
            autoComplete="off"
            onChange={_handleInputChange}
            value={comment.cons}
          />
          <label htmlFor="text" className="new-comment__label visually-hidden">Name</label>
          <div className="new-comment__rating rating">
            {ratingList.reverse().map((index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    className="rating__input visually-hidden"
                    name="rating"
                    id={`${index}-star`}
                    value={index}
                    checked={comment.rating === index}
                    onChange={_handleRatingChange}
                  />
                  <label
                    htmlFor={`${index}-star`}
                    className="rating__label">
                    <svg className="rating__star-img" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z"/>
                    </svg>
                  </label>
                </React.Fragment>
              )
            })}
            <p>Оцените товар</p>
          </div>
          <textarea
            className="new-comment__input new-comment__input--text"
            name="text"
            autoComplete="off"
            required
            onChange={_handleInputChange}
            value={comment.text}
          />
          <button className="new-comment__submit" type="submit">Оставить отзыв</button>
        </form>
      </div>
    </section>
  );
};

export default NewComment;
