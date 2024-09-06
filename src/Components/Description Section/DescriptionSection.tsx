import { Link, useSearchParams } from 'react-router-dom';
import styles from './description.styles.module.css';
import { queries } from '../../App';

const DescriptionSection = () => {

  const [params, setParams] = useSearchParams();

  const addParams = (queries: string) => {
    const newParams = new URLSearchParams(params);
    newParams.set('size', queries);
    setParams(newParams)
  }

  return (
    <div className={styles.container}>
      <p className={styles.name}>POLO RALPH</p>
      <div>
        <h2 className={styles.description}>Custom Fit Polo Bear Oxford Shirt</h2>
        <p className={styles.made}>Blue polo with a classic cut. Made of smooth and soft cotton.</p>
      </div>
      <div className={styles.price}>
        <h2>$99.00</h2>
        <p className={styles.discount}>-25%</p>
      </div>
      <div className={styles.previousPrice}>
        <span>$132.00</span>
      </div>
        <h5>CHOOSE SIZE</h5>
      <div className={styles.size}>
        {queries.size.map((query) => (
          <button
          key={query}
          className={styles.buttonSize}
          onClick={() => addParams(query)}
          >
            <Link to="/">{query}</Link></button>
        ))
        }
      </div>
      <div>
        <button className={styles.add}>ADD TO BAG</button>
      </div>
    </div>
  )
}

export default DescriptionSection;