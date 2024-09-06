import { useSearchParams } from 'react-router-dom';
import styles from './selection.styles.module.css';

const Selection = () => {
  const [selectImage] = useSearchParams();

  const selectedImage = selectImage.get('images') || 'front-image';

  const imagesMap: { [key: string]: string } = {
    'front-image': 'img/view-one.svg',
    'side-image': 'img/view-two.svg',
    'image-behind': 'img/view-three.svg',
  };


  return (
    <div className={styles.container}>
       <img className={styles.viewSelection} src={imagesMap[selectedImage]} alt="Selected T-shirt view" />
    </div>
  )
}

export default Selection;