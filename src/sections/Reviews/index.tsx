
import { REVIEWS_LIST } from "./const"
import { PageBlock } from "../../components";
import { Review } from "./Review";
import style from './styles.module.css';

export const Reviews = () => {
    return (
        <PageBlock className={style['reviews']}>
            {REVIEWS_LIST.map((review, i) => (
                 <Review
                    key={i}
                    rating={review.rating}
                    author={review.author}
                    text={review.text}
             />
            ))}
        </PageBlock>
    )
}
