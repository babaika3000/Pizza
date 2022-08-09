import React from 'react';

import styles from './Pagination.module..scss'
import ReactPaginate from "react-paginate";

const Pagination = () => {
    return (
        <>
        <ReactPaginate
className={styles.main}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={()=>{}}
            pageRangeDisplayed={5}
            pageCount={4}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
        </>
    );
};

export default Pagination;