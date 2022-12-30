import Link from "next/link";
import { useAppContext } from "../../contexts/AppContext";
import { Product } from "../../types/Products";
import styles from "./styles.module.css";
type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const { tenant } = useAppContext();

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`} legacyBehavior>
      <a className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: tenant?.secondColor }}
        ></div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} alt={data.image} />
          </div>
          <div className={styles.categoryName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: tenant?.mainColor }}>
            {data.price}
          </div>
        </div>
      </a>
    </Link>
  );
};
