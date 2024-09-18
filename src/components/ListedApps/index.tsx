import type { ListedAppsT } from "./types"
import { LISTED_APPS } from "./const"
import style from './styles.module.css';

export const ListedApps = ({title}: ListedAppsT) => {
    return (
        <div className={style['listed-apps']}>
            {title && (
                <div className={style['listed-apps__title']}>
                    {title}
              </div>
            )}
        <ul className={style['listed-apps__list']}>
            {LISTED_APPS.map((app, i) => {
                return (
                    <li key={i}>
                        <a href={app.url} target="_blank" className={style['listed-apps__list-item']}>
                            <img src={app.icon} alt="" />
                        </a>
                    </li>
                )
            })}
        </ul>
      </div>
    )
}