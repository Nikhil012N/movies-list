import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { FaHome, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MovieBrowser
        </Link>
        
        <div className={styles.links}>
          <Link
            to="/"
            className={`${styles.link} ${
              location.pathname === '/' ? styles.active : ''
            }`}
          >
            <FaHome className={styles.linkIcon} />
            <span className={styles.linkText}>Home</span>
          </Link>
          <Link
            to="/favorites"
            className={`${styles.link} ${
              location.pathname === '/favorites' ? styles.active : ''
            }`}
          >
            <FaHeart className={styles.linkIcon} />
            <span className={styles.linkText}>Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;