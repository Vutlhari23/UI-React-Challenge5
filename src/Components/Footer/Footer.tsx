import React from 'react'
import styles from './Footer.module.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import ContentContainer from '../ContentContainer/ContentContainer'

export const Footer = () => {
  return (
   <footer>
    <ContentContainer className={styles['main-container']}>
      <ContentContainer className={styles['content-container']}>
        <div className={styles.products}>
        <h3>Products</h3>
        <a className={styles.link}>Shoes</a>
    </div>

    <div className={styles.category}>
        <h3 >Category</h3>
        <a className={styles.link}>Men</a>
        <a className={styles.link}>New In</a>
        <a className={styles.link}>Weekly Pick</a>

    </div>

    <div className={styles.company}>
        <h3>Company Info</h3>

         <a className={styles.link}>About us</a>
        <a  className={styles.link}>Contact us</a>
        <a className={styles.link}>Payment Options</a>
        <a className={styles.link}>Track Order</a>
        <a className={styles.link}>Support</a>
        <a className={styles.link}>Vouchers</a>
        <a className={styles.link}>Size charts</a>
    </div>

    <div className={styles.social}>
      <h3>Follow us</h3>
      <a  className={styles.link}><i className="bi bi-instagram" style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}/></a>
        <a className={styles.link}><i className="bi bi-facebook" style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}></i></a>
        <a className={styles.link}><i className="bi bi-youtube" style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}></i></a>
    </div>
    </ContentContainer>

    <ContentContainer className={styles.list}>
        <ul>
            <li>Data Settings</li>
            <li>Cookie Settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>

        </ul>
    </ContentContainer>
    </ContentContainer>

   </footer>
  )
}

export default Footer
