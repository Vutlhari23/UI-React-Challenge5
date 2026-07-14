import React from 'react'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import styles from '../Navbar/Navbar.module.css'
import searchIcon from '../../assets/search-icon.png'
import logo from '../../assets/cofty-solution-logo.png'



export const Navbar =() => {
    return (
        <nav>

            <ContentContainer className={styles.navContent}>
               <img className={styles['logo']} src={logo} alt='Logo image'  />
               <div className={styles.g}>
                    <div className={styles.links}>
                    <a href="#" className={styles.link}>Home</a>
                    <a href="#" className={styles.link}>Menu</a>
                    <a href="#" className={styles.link}>Blog</a>
                    <a href="#" className={styles.link}>Media</a>
                    <a href='#' className={styles.link}>Contact</a>
                    </div>
                    <div className={styles.searchIcon}> 
                    <img className={styles['search-icon']} src={searchIcon} alt='Search Icon image'  />
                    </div>
               </div>
            </ContentContainer>
        </nav>
    )


}

