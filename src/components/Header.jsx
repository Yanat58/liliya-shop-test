import styles from "../style";
import PropTypes from 'prop-types'

const Header = ({children}) => {
  return (
   <section className={`${styles.line}`}>
    {children}
   </section>
  );
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header;
