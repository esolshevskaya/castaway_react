import { ReviewT } from "./types"
import starIcon from '../../../assets/images/icons/star-filled.svg';

import style from './styles.module.css';

const TOTAL = 5;

const STARS = [...Array(TOTAL).keys()];


export const Review = ({
    rating,
    text,
    author
}: ReviewT) => {
    return (
        <article className={style.review}>
        <div className={style['review-rating']}>
            {STARS.map((_, i) => {
                if (i >= rating) {
                    return null
                }
                return (
                    <img src={starIcon} key={i} alt="" />
                )
            })}
        </div>
        <div className={style['review__text']}>
          {text}
        </div>
        <div className={style['review__author']}>
          {author}
        </div>
      </article>
    )
}
