const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const HandleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const HandlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center px-2 join pb-10">
            {page <= 1 ? null :
                <button onClick={HandlePrevPage} className="join-item btn bg-base-200 text-gray-800 text-xl hover:text-colorPrimarySaya transition-all duration-300">«</button>
            }
            <button className="join-item btn bg-base-200 text-gray-800 transition-all hover:text-colorPrimarySaya duration-300">{page} of {lastPage}</button>
            <button onClick={HandleNextPage} className="join-item btn bg-base-200 text-gray-800 text-xl hover:text-colorPrimarySaya transition-all duration-300">»</button>
        </div>

    )
}

export default Pagination