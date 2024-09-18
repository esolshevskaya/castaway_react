import { ListedApps, PageBlock } from "../../components"
import style from './styles.module.css';
import heroMain from '../../assets/images/hero-main.png';
 

export const HeroMain = () => {
    return (
        <PageBlock className={style['hero-main']}>
        <div className={style['hero-main__image']}>
          <img src={heroMain} alt="" />
        </div>
        <div className={style['hero-main__details']}>
          <h1 className={style['hero-main__title']}>
            Take your podcast to the
            <br />
            <span className={style['hero-main__title--highlighted']}>next level</span>
          </h1>
          <ListedApps />    
        </div>
      </PageBlock>
    )
}
