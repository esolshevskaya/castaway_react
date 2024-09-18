import { PageBlock } from "../../components"
import arrRight from '../../assets/images/icons/arr-right.svg'
import hostImage from '../../assets/images/hero-host.jpg'
import style from './styles.module.css'

export const HostDetails = () => {
    return (
        <PageBlock className={`${style['hero-main']} content-row--spaced`}>
          <div className={style['hero-main__details']}>
            <div className={style['host__icon']}>
              <img src={arrRight} alt="" />
            </div>
            <div className={style['host__subtitle']}>
              Meet your host
            </div>
            <h2 className="subtitle">
              Jacob Paulaner
            </h2>
            <div className={style['host__description']}>
              <p>
                Jacob has a background in audio engineering, and has been podcasting since the early days.
              </p>
              <p>
                He’s here to help you level up your game by sharing everything he’s learned along the way.
              </p>
            </div>
           
          </div>
          <div className={style['hero-main__image']}>
            <img src={hostImage} alt="" />
          </div>
        </PageBlock>
    )
}
