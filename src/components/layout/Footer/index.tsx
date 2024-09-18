import { ListedApps } from "../../ListedApps"
import { PageBlock } from "../PageBlock";
import { Socials } from "../../Socials";
import logo from '../../../assets/images/logo.svg';

import style from './styles.module.css';

export const Footer = () => {
    return (
    <footer className="site-footer">
        <PageBlock className={style['site-footer-content']} isSpaced={false}>
            
        <div className={style['footer-logo']}>
            <img className="footer-logo-img" src={logo} alt="" />
            <Socials />
        </div>
  <ul className={style['footer-nav']}>
    <ul className={style['footer-nav-list']}>
      <li>
        <a href="#">
          Home
        </a>
      </li>
      <li>
        <a href="#">
          About
        </a>
      </li>
      <li>
        <a href="#">
          Episodes
        </a>
      </li>
      <li>
        <a href="#">
          Contact
        </a>
      </li>
    </ul>

    <ul className={style['footer-nav-list']}>
      <li>
        <a href="#">
          Style Guide
        </a>
      </li>
      <li>
        <a href="#">
          Instructions
        </a>
      </li>
      <li>
        <a href="#">
          Changelog
        </a>
      </li>
      <li>
        <a href="#">
          Credit
        </a>
      </li>
      <li>
        <a href="#">
          Powered by Webflow
        </a>
      </li>
      <li>
        <a href="#">
          Licenses
        </a>
      </li>
    </ul>
  </ul>
  <div className={style['footer-apps']}>
    <div className={style['listed-apps']}>
        <ListedApps />
    </div>
  </div>
</PageBlock>
</footer>
)
}