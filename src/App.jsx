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
} from './components';
import styles from './style';

function App() {
  return (
    <div className={`w-full overflow-hidden bg-primary relative `}>
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
    </div>
  );
}

export default App;
