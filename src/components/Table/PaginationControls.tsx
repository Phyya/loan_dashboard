import React from "react";
import prev_btn from "../../assets/icons/prev_btn.svg";
import next_btn from "../../assets/icons/next_btn.svg";
import Dropdown from "../Dropdown/Dropdown";
import Icon from "../Icon/Icon";
import styles from "./Table.module.scss";

interface PaginationProps {
  totalLength: number;
  pagesLength: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (val: number) => void;
  startPage: number;
  endPage: number;
}
function PaginationControls({
  currentPage,
  pagesLength,
  totalLength,
  totalPages,
  startPage,
  endPage,
  onPageChange,
}: PaginationProps) {
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginationControlsContainer}>
      <div>
        <p>Showing</p>
        <div className={styles.paginationControlsDropdown}>
          <Dropdown
            options={["10", "25", "50", "100"]}
            onChange={() => {}}
            style={{
              backgroundColor: "#e5e8ee",
            }}
          />
        </div>
        <p>out of {totalLength}</p>
      </div>
      {pagesLength > 9 && (
        <div>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            data-testid="Prev"
            className={styles.pageControls}
          >
            <Icon src={prev_btn} />
          </button>
          {startPage > 1 && (
            <React.Fragment>
              <button onClick={() => onPageChange(1)}>1</button>
              {startPage > 2 && <span>...</span>}
            </React.Fragment>
          )}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={page == currentPage ? styles.activePage : ""}
            >
              {page}
            </button>
          ))}
          {endPage < totalPages && (
            <React.Fragment>
              {endPage < totalPages - 1 && <span>...</span>}
              <button onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </button>
            </React.Fragment>
          )}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            data-testid="Next"
            disabled
            className={styles.pageControls}
          >
            <Icon src={next_btn} />
          </button>
        </div>
      )}
    </div>
  );
}

export default PaginationControls;
