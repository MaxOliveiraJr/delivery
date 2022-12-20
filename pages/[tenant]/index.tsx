import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log("Você está buscando " + searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a)👋 </div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "temp/Card-burger-1.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "25,99",
          }}
          mainColor="#fb9400"
          secondColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 2,
            image: "temp/Card-burger-1.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "25,99",
          }}
          mainColor="#fb9400"
          secondColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 3,
            image: "temp/Card-burger-1.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "25,99",
          }}
          mainColor="#fb9400"
          secondColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 4,
            image: "temp/Card-burger-1.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "25,99",
          }}
          mainColor="#fb9400"
          secondColor="#fff9f2"
        />
      </div>
    </div>
  );
};

export default Home;
