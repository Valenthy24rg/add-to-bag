import { useSearchParams } from 'react-router-dom';
import styles from './tshirt.styles.module.css';

const TShirtSection = () => {
  const [sidesParams, setSidesParams] = useSearchParams()
  
  const seeSides = (queries: string) => {
    const newParams = new URLSearchParams(sidesParams)
    newParams.set('images', queries)
    setSidesParams(newParams)
  }


  return (
    <div className={styles.imageContainer}>
      <div className={styles.view}>
      <img
          src='img/view-one.svg'
          alt="front-image"
          onClick={() => seeSides('front-image')}
        />
        <img
          src='img/view-two.svg'
          alt="side-image"
          onClick={() => seeSides('side-image')}
        />
        <img
          src='img/view-three.svg'
          alt="image-behind"
          onClick={() => seeSides('image-behind')}
        />
      </div>
    </div>
  )
}

export default TShirtSection;