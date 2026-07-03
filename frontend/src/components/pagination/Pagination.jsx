// PaginationComponent.js

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className='flex items-center  justify-end me-3 gap-2 py-2'>
      <p className='font-semibold flex items-center gap-3'>Page <span className='btn font-semibold outline rounded-none'>{`${currentPage}`}</span> <span>of</span> <span className='btn font-semibold rounded-none'>{`${totalPages}`}</span></p>
      <button className='btn-main' onClick={onPrevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
      <button className='btn-main' onClick={onNextPage} disabled={currentPage === totalPages}><FaChevronRight /> </button>
    </div>
  );
};

export default Pagination;
