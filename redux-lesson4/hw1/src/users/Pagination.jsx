import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const pageToStart = currentPage + 1;

    const isPrevPageAvailable = pageToStart === 1;
    const isNextPageAvailable = pageToStart * itemsPerPage > totalItems;
    
    return (
        <div className="pagination">
            <button
                className="btn"
                onClick={() => goPrev()}
                disabled={isPrevPageAvailable}>
                {!isPrevPageAvailable && '←'}
            </button>

            <span className="pagination__page">{pageToStart}</span>

            <button
                className="btn"
                onClick={goNext}
                disabled={isNextPageAvailable}>
                {!isNextPageAvailable && '→'}
            </button>
        </div>
    );
}

export default Pagination;