import React from 'react'
import {ItemCard,type ItemProps} from '../Card/ItemCard'
import ContentContainer from '../ContentContainer/ContentContainer'
import styles from  './ItemCard.module.css'

type BlogProps ={
    blogs : ItemProps[]
}
export const BlogsContainer = ({blogs}: BlogProps) => {
  return (
    <ContentContainer >
       <div className={styles['item-container']}>
        {
            blogs && blogs.length> 0 && blogs.map (
                blog => {
                 return  <ItemCard
                 imgLink= {blog.imgLink}
                 name={blog.name}
                 description={blog.description}
                 />
                }
            )
        }
        </div>
    </ContentContainer>
   
  )
}

export default BlogsContainer
