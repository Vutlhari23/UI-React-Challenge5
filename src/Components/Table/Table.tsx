 import React from 'react'
 import styles from './Table.module.css'
import ContentContainer from '../ContentContainer/ContentContainer'
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import "bootstrap-icons/font/bootstrap-icons.css"

export const Table = () => {
  return (
    <>
    <ContentContainer className={styles['footer-table']}>
     <table>
        <tr>
            <th>Products</th>
            <th>Category</th>
            <th>Company Info</th>
            <th>Follow us</th>
        </tr>
        
        <tr>
            <td>Shoes</td>
            <td>Men</td>
            <td>About us</td>
            <td><i className="bi bi-instagram" style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}></i></td>
        </tr>

        <tr>
            <td></td>
            <td>New-in</td>
            <td>Contact us</td>
            <td><i className="bi bi-facebook" style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}></i></td>
        </tr>
        
        <tr>
            <td></td>
            <td>Weekly Pick</td>
            <td>Payment Options</td>
            <td><i className="bi bi-youtube"
            
            style={{fontSize: "1.5rem", color:"rgb(234,205,189"}}></i></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td>Track Order</td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td>Vouchers</td>
            <td></td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td>Size Charts</td>
            <td></td>
        </tr>
     </table>
     </ContentContainer>

     
     </>
  )
}

export default Table
