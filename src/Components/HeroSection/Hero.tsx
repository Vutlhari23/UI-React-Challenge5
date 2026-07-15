import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from './Hero.module.css'
import Picture from '../../assets/Hero.png'
export const Hero = () => {
  return (
    <ContentContainer className={styles['coffee-image']}>

        <img src={Picture} className={styles.image}/>
    </ContentContainer>
      )
}

export default Hero
