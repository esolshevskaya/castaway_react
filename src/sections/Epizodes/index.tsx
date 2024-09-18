import { PageBlock } from "../../components/layout/PageBlock"
import styles from './styles.module.css'
import { episodesList } from './data'
import { EpisodesCard } from "./EpisodesCard"

export const Episodes = () => {
    return (
        <PageBlock>
             <header className={styles['episodes__header']}>
                <div className={styles['episodes__header-title']}>
                    Latest episodes
                </div>
                <a href="#" className="button">
                    View all episodes
                </a>
          </header>

          <ul className={styles['episodes-list']}>
            {episodesList.map((episode, index) => {
                return (
                    <li key={index}>
                        <EpisodesCard {...episode} /> 
                    </li>
                )
            })}
          </ul>  
        </PageBlock>
    )
}