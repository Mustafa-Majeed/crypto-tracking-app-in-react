import React, { useState } from "react";

const PaginationExample = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Check if data is an array
    if (!Array.isArray(data)) {
        return <div>Data is not an array</div>;
    }

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Check if current page is within the range of available pages
    if (currentPage > totalPages) {
        return <div>Current page is out of range</div>;
    }

    // Calculate the index of the first and last items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPageData = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ul>
                {currentPageData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default PaginationExample;

