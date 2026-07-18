import React from 'react'
import styles from './Table.module.css'
import ContentContainer from '../ContentContainer/ContentContainer'

export const Table = () => {
  return (
    <>
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
            <td>Instagram Image</td>
        </tr>

        <tr>
            <td></td>
            <td>New-in</td>
            <td>Contact us</td>
            <td>Facebook Image</td>
        </tr>
        
        <tr>
            <td></td>
            <td>Weekly Pick</td>
            <td>Payment Options</td>
            <td>Youtube image</td>
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

     <ContentContainer>
        <ul>
            <li>Data Settings</li>
            <li>Cookie Settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>

        </ul>
     </ContentContainer>
     </>
  )
}

export default Table
