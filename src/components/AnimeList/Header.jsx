import Link from "next/link"

const Header = ({title, LinkHref, LinkTitle}) => {
    return (
        <div className="flex justify-between items-center p-2">
            <h1 className="px-2 pt-2 font-bold text-xl select-none font-arial">{title}</h1>
            {LinkHref && LinkTitle ?
             <Link href={LinkHref} className="md:text-lg text-sm hover:text-colorPrimarySaya transition-all mr-2">{LinkTitle}
             </Link>
             : null
            }
           
        </div>
    )
}

export default Header