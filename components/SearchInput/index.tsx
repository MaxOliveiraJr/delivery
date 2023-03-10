import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchIcon.svg";
import { useAppContext } from "../../contexts/AppContext";

type Props = {
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
  const { tenant } = useAppContext();

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : "#ffffff" }}
    >
      <div className={styles.button} onClick={(e) => onSearch(searchValue)}>
        <SearchIcon color={tenant?.mainColor} />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do que procura"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
