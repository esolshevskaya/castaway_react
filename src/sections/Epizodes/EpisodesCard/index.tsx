import style from './styles.module.css'
import { Tag } from '../../../components'
import type { TEpisodesCardProps } from './type'

export const EpisodesCard = ({
    link,
    preview,
    tag,
    subtitle,
    title,
    description,
    linkText = 'View Episode Details'
}: TEpisodesCardProps) => {
    return (
        <article className={style['episode-card']}>
            <a href={link} className={style['episode-card__hidden-link']}></a>
            <div className={style['episode__card-img']}>
                <img src={preview} alt="" />
            </div>
            <div className={style['episode__card-body']}>
            <div className={style['episode__card-tag']}>
                <Tag tagText={tag} />
            </div>
            <div className={`${style['repisode__card-subtitle']} subtitle`}>
                {subtitle}
            </div>
            <h3 className={style['episode__card-title']}>
                {title}
            </h3>
            <p className={style['episode__card-description']}>
                {description}
            </p>
            <footer className={style['episode__card-footer']}>
                <a href={link} className="button">{linkText}</a>
            </footer>
            </div>
      </article>
    )
}
