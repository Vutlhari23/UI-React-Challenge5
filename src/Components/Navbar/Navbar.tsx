import React, { useState } from 'react'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import styles from '../Navbar/Navbar.module.css'
import searchIcon from '../../assets/search-icon.png'
import logo from '../../assets/cofty-solution-logo.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <ContentContainer className={styles.navContent}>
                
                <img className={styles.logo} src={logo} alt='Logo image' />
                
              
                <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}
                onClick={(e) => e.stopPropagation()}>

                    <div className={styles.links}>
                        
                        
                        <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Home</a>
                         <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Menu</a>
                         <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Blog</a>
                         <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Media</a>
                         <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Contact</a>
                       
                    </div>
                    
                    <div className={styles.searchIcon}> 
                        <img className={styles['search-icon']} src={searchIcon} alt='Search Icon image' />
                    </div>
                </div>
                

              
                <button
                    className={`${styles.navBtn} ${isOpen ? styles.btnOpen : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
             
            </ContentContainer>
        </nav>
    )
}
