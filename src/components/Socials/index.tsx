import { SOCIALS } from "./const";
import style from './styles.module.css';

export const Socials = () => (
    <ul className={style.socials}>
        {SOCIALS.map((social, i) => {
            return (
                <li key={i}>
                <a href={social.url} className={style['social__link']}>
                  <img src={social.icon} alt="" />
                </a>
              </li>
            )
        })}
  </ul>
)