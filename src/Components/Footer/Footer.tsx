import React from 'react'
import styles from './Footer.module.css'
export const Footer = () => {
  return (
   <footer>

      
        <div className={styles.procucts}>
        <h3>Products</h3>
        <a>Shoes</a>
    </div>

    <div className={styles.category}>
        <h3>Category</h3>
        <a>Men</a>
        <a>New In</a>
        <a>Weekly Pick</a>

    </div>

    <div className={styles.company}>
        <h3>Company Info</h3>

         <a>About us</a>
        <a>Contact us</a>
        <a>Payment Options</a>
        <a>Track Order</a>
        <a>Support</a>
        <a>Vouchers</a>
        <a>Size charts</a>
    </div>

    <div className={styles.social}>
      <h3>Follow us</h3>
      <a>Instagram</a>
        <a>Facebook</a>
        <a>Youtube</a>
    </div>

   </footer>
  )
}

export default Footer
