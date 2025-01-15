import Link from "next/link";

const Header = ({ title, LinkHref, LinkTitle }) => {
    return (
        <div className="flex justify-between items-center px-7 py-4 bg-transparent">
            <h1 className="text-2xl font-bold text-purple-500">{title}</h1>
            {LinkHref && LinkTitle && (
                <Link href={LinkHref}>
                    <span className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold transition-all duration-300 hover:bg-purple-100 hover:text-purple-700">
                        {LinkTitle}
                    </span>
                </Link>
            )}
        </div>
    );
};

export default Header;