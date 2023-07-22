import { useState } from "react";
import { useProductsActions } from "../Providers/ProductProvider";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";

const filterOptions = [
  { value: "", label: "ALL" },
  { value: "XL", label: "XL" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "L", label: "L" },
  { value: "M", label: "M" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <SelectComponent
          title="filter by size "
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by price "
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
