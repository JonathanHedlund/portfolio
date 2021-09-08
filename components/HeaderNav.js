import Link from 'next/link'

import HeaderNavItem from '../components/HeaderNavItem'

import styles from '../styles/Header.module.css'

const HeaderNav = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
                <HeaderNavItem text="Home" link="/"/>
                <HeaderNavItem text="Portfolio" link="/portfolio"/>
                <HeaderNavItem text="About" link="/about"/>
            </div>
        </div>
    )
}

export default HeaderNav
