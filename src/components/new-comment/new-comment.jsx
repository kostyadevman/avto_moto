import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {addComment, setModalOpen} from "../../store/action";
import {getID, getRatingList, isEscEvent} from "../../utils";
import {EMPTY_COMMENT, ERRORS_INIT, MAX_RATING} from "../../const";


const NewComment = () => {



  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const [comment, setComment] = useState(JSON.parse(localStorage.getItem('commnet')));
  const [errors, setErrors] = useState(ERRORS_INIT);
  const textInput = useRef(null);

  const modalClassName = isModalOpen ? `modal modal--active` : `modal`;

  const ratingList = getRatingList(MAX_RATING);


  const _handleEscPress = (evt) => {
    isEscEvent(evt, () => {
      dispatch(setModalOpen(false))
    })
  }

  useEffect(() => {

    if (!isModalOpen) {
      return
    }

    textInput.current.focus();

    document.addEventListener(`keydown`, _handleEscPress)
    document.body.style.overflow = `hidden`;

    return () => {
      document.removeEventListener(`keydown`, _handleEscPress)
      document.body.style.overflow = `unset`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen])


  useEffect(() => {
    localStorage.setItem('commnet', JSON.stringify(comment))
  }, [comment]);

  const _getCustomValidity = () => {
    setErrors({
      ...errors,
      name: !comment.name,
      text: !comment.text
    })
  }

  const _getFieldClassName = (isFieldError) => {
    return  classNames (
      'new-comment__field',
      'new-comment__field--required',
      {'new-comment__field--error': isFieldError}
    );
  }

  const _close = () => {
    dispatch(setModalOpen(false));
  }

  const _reset = () => {
    setComment(EMPTY_COMMENT);
    setErrors(ERRORS_INIT);
  }

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    _getCustomValidity();

    if (!comment.name || !comment.text) {
      return;
    }

    dispatch(addComment({
      ...comment,
      id: getID(),
      date: new Date()
    }));

    _close();
    _reset()
  }

  const _handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setComment({...comment, [name]: value});
  }

  const _handleRatingChange = (evt) => {
    setComment({...comment, rating: parseInt(evt.target.value, 10)})
  }

  const _handleCloseClick = () => {
    _close();
  }

  return (
    <section className={modalClassName} onClick={_handleCloseClick}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <div className="modal__title">Оставить отзыв</div>
        <form className="modal__form new-comment" noValidate onSubmit={_handleSubmit}>
          <div className={_getFieldClassName(errors.name)}>
            <label htmlFor="name" className="new-comment__label visually-hidden">Name</label>
            <input
              type="text"
              className="new-comment__input"
              name="name"
              id="name"
              autoComplete="off"
              required
              onChange={_handleInputChange}
              value={comment.name}
              autoFocus //not working
              placeholder="Имя"
              ref={textInput}
            />
          </div>
          <label htmlFor="pros" className="new-comment__label visually-hidden">Pros</label>
          <input
            type="text"
            className="new-comment__input new-comment__input--pros"
            name="pros"
            id="pros"
            autoComplete="off"
            onChange={_handleInputChange}
            value={comment.pros}
            placeholder="Достоинства"
          />
          <label htmlFor="cons" className="new-comment__label visually-hidden">Cons</label>
          <input
            type="text"
            className="new-comment__input new-comment__input--cons"
            name="cons"
            id="cons"
            autoComplete="off"
            onChange={_handleInputChange}
            value={comment.cons}
            placeholder="Недостатки"
          />
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
                    className="rating__label"
                  >
                    <svg className="rating__star-img" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z"/>
                    </svg>
                  </label>
                </React.Fragment>
              )
            })}
            <p className="rating__text">Оцените товар:</p>
          </div>
          <div className={`new-comment__field--text ${_getFieldClassName(errors.text)}`}>
            <label htmlFor="text" className="new-comment__label visually-hidden">Text</label>
            <textarea
              className="new-comment__input new-comment__input--text"
              name="text"
              id="text"
              autoComplete="off"
              required
              onChange={_handleInputChange}
              value={comment.text}
              placeholder="Комментарий"
            />
          </div>
          <button className="new-comment__submit button button--type1" type="submit">Оставить отзыв</button>
        </form>
        <button
          className="modal__cancel"
          onClick={_handleCloseClick}
        >
          <svg className="modal__cancel-img" version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 20.514 20.512">
            <polygon points="20.513,1.414 19.099,0 10.256,8.842 1.414,0 0,1.414 8.842,10.256 0,19.098 1.414,20.512 10.256,11.67 19.099,20.512 20.513,19.098 11.671,10.256 "/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewComment;
