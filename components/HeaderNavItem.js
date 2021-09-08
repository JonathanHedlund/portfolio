import Link from 'next/link'
import { useRouter } from "next/router";

import styles from '../styles/Header.module.css'

const HeaderNavItem = ({text, link}) => {
    const router = useRouter();

    return (
        <Link href={link} >
            <a className={router.pathname == link ? styles.headerNavItemContainerActive : (link !== '/' && router.pathname.startsWith(link)) ? styles.headerNavItemContainerActive : styles.headerNavItemContainer}>
                {text}
            </a>
        </Link>
    )
}

export default HeaderNavItem
