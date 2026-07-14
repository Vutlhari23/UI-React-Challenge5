import React from 'react'
import styles from './Footer.module.css'
import ContentContainer from '../ContentContainer/ContentContainer'
import {Table} from '../Table/Table'
export const Footer = () => {
  return (
   <footer>

      <ContentContainer className={styles.footer}>
        <Table/>
       
        <ul>
            <li>Data Settings</li>
            <li>Cookie Settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>

        </ul>
     
      </ContentContainer>

   </footer>
  )
}

export default Footer
