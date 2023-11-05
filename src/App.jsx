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
} from "./components";
import styles from "./style";

function App() {
  return (
    <div className={`${styles.boxWidth} mx-auto bg-primary `}>
      <Header>
        <div
          className={`bg-secondary mx-auto px-[100px] py-[8px] ${styles.flexCenter}`}
        >
          <Advertisement />
        </div>
        <NavBar />
        <Filter />
      </Header>
      <Hero />
      <Catalog />
      <Sale />
      <CareProducts />
      <FeedBacks />
      <Footer />
    </div>
  );
}

export default App;
