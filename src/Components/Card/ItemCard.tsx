import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import { Text } from '../Text/Text'
import styles from  '../Card/ItemCard.module.css'
import Button from '../Button/Button'

export type ItemProps= {
 name ?: string;
 imgLink?: string;
 description?: string
}
export const ItemCard = ({name,imgLink,description}: ItemProps) => {

  return (
   <article className={styles['item-card']} >
    <img  className={styles['blog-image']} src={imgLink}/>
    <Text variant='' className={styles.cos}>{name}</Text>
    <Text variant={"span"}>{description}</Text>
    <button className={styles.btn} >View more</button>
    
   </article>

   
  )
}

export default ItemCard
