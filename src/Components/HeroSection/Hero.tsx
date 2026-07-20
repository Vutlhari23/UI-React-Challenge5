import styles from "./Hero.module.css";
import { Text } from "../Text/Text";
import ContentContainer from "../ContentContainer/ContentContainer";

export const Hero = () => {
  return (
    <>

    
    <div className={styles.heroSection}>

      <svg
      className={styles['top-waves']}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      shapeRendering='auto'
    
      >
        <defs>
          <path 
          id="gentle-wave"
           d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          />
           
        </defs>
       <use
  href="#gentle-wave"
  x="0"
  y="0"
  fill="#EACDBD"
/>
        
        </svg>
        {/* Content*/}
       <ContentContainer className={styles['hero-content']}>
        <Text variant="h1" className={styles['fresh-text']}>FRESHLY ROASTED</Text>
        <Text variant='h1' className={styles['coffee-text']}>COFFEE</Text>
        <button className={styles['btn']}>Shop now</button>

        </ContentContainer>






     
      <svg
      className={styles['bottom-waves']}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      shapeRendering='auto'
    
      >
        <defs>
          <path 
          id="gentle-wave-bottom"
           d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          />
           
        </defs>
       <use
  href="#gentle-wave-bottom"
  x="0"
  y="0"
  fill="#EACDBD"
/>
        
        </svg>
     
      
    </div>
         </>

  );
};

export default Hero;