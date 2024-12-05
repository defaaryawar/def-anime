const NotFound = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

                <p className="mt-4 text-gray-500">Kami tidak dapat menemukan halaman itu.</p>

                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-colorPrimarySaya px-5 py-3 text-sm font-medium text-white hover:bg-colorPrimarySaya outline-none"
                >
                    Kembali ke Halaman Utama
                </a>
            </div>
        </div>
    )
}

export default NotFound