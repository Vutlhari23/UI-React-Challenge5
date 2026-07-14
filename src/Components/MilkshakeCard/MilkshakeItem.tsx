import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import styles from './Milkshake.module.css'
export type MilkshakeItemProps={

    imgLink?:string;
    name?: string;
    price?: number
}
 export const MilkshakeItem = ({imgLink,name,price}:MilkshakeItemProps) => {



  return (
      
<article className={styles['item-card']}>
    <button className={styles['btn-top']}>30 Likes</button>
    
    <img  className={styles['item-image']} src={imgLink}/>
    <Text variant='p'>{name}</Text>

    <ContentContainer className={styles['price-btn']}>
    
    <Text variant='p'>${price}</Text>
    <button className={styles['btn-bottom']} >Buy now</button>
   
    </ContentContainer>
   </article>
  )
}

export default MilkshakeItem
