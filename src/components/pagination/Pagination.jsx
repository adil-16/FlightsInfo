import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <button
        onClick={() => handlePageClick(parseInt(currentPage) - 1)}
        disabled={parseInt(currentPage) === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl mr-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="mx-4 text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageClick(parseInt(currentPage) + 1)}
        disabled={parseInt(currentPage) === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl ml-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
