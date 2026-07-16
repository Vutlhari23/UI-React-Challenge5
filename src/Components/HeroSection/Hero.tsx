import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from './Hero.module.css'
import {Text} from '../Text/Text'

export const Hero = () => {
  return (
    <ContentContainer className={styles['coffee-image']}>

        <Text variant='h3'>Hero Section</Text>
    </ContentContainer>
      )
}

export default Hero
