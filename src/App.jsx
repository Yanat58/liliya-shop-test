import {
  NavBar,
  Header,
  Advertisement,
  Hero,
  Catalog,
  FeedBacks,
  Filter,
  Footer,
  CareProducts,
  Sale,
  ScrollToTopButton,
} from './components';
import styles from './style';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  scrollToTop();


  return (
    <div className={`${styles.boxWidth} overflow-hidden bg-primary relative mx-auto `}>
      <Header>
        <div className={`${styles.boxWidth}`}>
          <Advertisement />
        </div>
        <NavBar />
        <Filter />
      </Header>
      <div
        className={`${styles.boxWidth}  ${styles.flexCenter} flex-col ${styles.paddingX}`}
      >
        <Hero />
        <Catalog />
        <Sale />
        <CareProducts />
        <FeedBacks />
      </div>
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}

export default App;
