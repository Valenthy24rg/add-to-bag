import DescriptionSection from '../Description Section';
import Selection from '../Selection';
import TShirtSection from '../TShirtSection';
import styles from './dashboard.styles.module.css';

const Dashboard = () => {
  return (
    <div className={styles.flexContainer}>
      <TShirtSection />
      <Selection />
      <DescriptionSection />
    </div>
  )
}

export default Dashboard