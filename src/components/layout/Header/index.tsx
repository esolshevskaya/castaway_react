import logo from '../../../assets/images/logo.svg'
import styles from './styles.module.css';

export const Header = () => {
    return (
        <>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <nav className="header__nav">
            <ul className={styles['header__nav-list']}>
                <li>
                <a href="#" className="active">
                    Home
                </a>
                </li>
                <li>
                <a href="#">
                    Episodes
                </a>
                </li>
                <li>
                <a href="#">
                    About
                </a>
                </li>
                <li>
                <a href="#">
                    Contacts
                </a>
                </li>
            </ul>
            </nav>
        </>
    )
}