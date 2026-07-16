import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from './Hero.module.css'
import hero from '../../assets/Hero.png'
import {Text} from '../Text/Text'

export const Hero = () => {
  return (
    <ContentContainer className={styles['coffee-image']}>

        <img src={hero} className={styles.image}/>
    </ContentContainer>
      )
}

export default Hero
