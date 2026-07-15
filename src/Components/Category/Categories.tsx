import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from './Categories.module.css'
import {Text} from '../Text/Text'
export const Categories = () => {
  return (
   <ContentContainer className={styles.MainContainer}>
      
      <Text variant='h2'>TOP CATEGORIES</Text>
       <Text variant='p'>Explore The Recent Most Bought Shakes This Week</Text>

       <ContentContainer className={styles['divs-container']}>
      <ContentContainer className={styles['item-one']}>
        <Text variant='h2'>Coffee Mocha</Text>
        <hr className={styles.line}/>
        <Text variant='p'>View More</Text>
        
      </ContentContainer>
      <ContentContainer  className={styles['item-two']}>
        <Text variant='h2'>Expresso Americano</Text>
        <hr className={styles.line}/>

        <Text variant='p'>View More</Text>
        
      </ContentContainer>
      <ContentContainer className={styles['item-three']}>
        <Text variant='h2'>Cuppacino</Text>
        <hr className={styles.line}/>

        <Text variant='p'>View More</Text>
        
      </ContentContainer>
      </ContentContainer>
      
   </ContentContainer>
  )
}

export default Categories
