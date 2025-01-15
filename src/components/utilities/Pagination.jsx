const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    const HandleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTop();
    };

    const HandlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTop();
    };

    return (
        <div className="flex justify-center items-center space-x-4 py-8">
            <button
                onClick={HandlePrevPage}
                disabled={page <= 1}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            <span className="text-gray-700 font-semibold">
                Page {page} of {lastPage}
            </span>
            <button
                onClick={HandleNextPage}
                disabled={page >= lastPage}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;