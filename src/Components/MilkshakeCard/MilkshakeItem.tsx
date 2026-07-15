import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import styles from './Milkshake.module.css'
import { BsHandThumbsUpFill } from "react-icons/bs";
import "bootstrap-icons/font/bootstrap-icons.css"




export type MilkshakeItemProps={

    imgLink?:string;
    name?: string;
    price?: string
}
 export const MilkshakeItem = ({imgLink,name,price}:MilkshakeItemProps) => {



  return (
      
<article className={styles['item-card']}>
    <button className={styles['btn-top']}><i className="bi bi-hand-thumbs-up-fill" style={{fontSize: "1.5rem", color:"gray"}}></i>      30 Likes</button>
    <ContentContainer className={styles['middle-elements']}>
    <img  className={styles['item-image']} src={imgLink}/>
    <Text variant='p'>{name}</Text>



    <ContentContainer className={styles['price-btn']}>
    
    <Text variant='p'>${price}</Text>
    <button className={styles['btn-bottom']} >Buy now</button>
    </ContentContainer>
    </ContentContainer>
   </article>
  )
}

export default MilkshakeItem
