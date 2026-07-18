import React from 'react'
import { MilkshakeItem,type MilkshakeItemProps } from './MilkshakeItem'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from '../MilkshakeCard/Milkshake.module.css'
type milkshakesProps ={
    milkshakes : MilkshakeItemProps[]
} 

const MilkshakeStock = ({milkshakes}: milkshakesProps) => {
  return (
<ContentContainer >

    <div id={styles['item-container']}>
    {
     milkshakes && milkshakes.length> 0 && milkshakes.map( milkshake =>{
        return <MilkshakeItem
        imgLink={milkshake.imgLink}
        name={milkshake.name}
        price={milkshake.price}
        />
     })

    }
    </div>
</ContentContainer>
  )
}

export default MilkshakeStock
