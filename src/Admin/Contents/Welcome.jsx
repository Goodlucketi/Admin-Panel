import search from "../../assets/icons/search-icon.png"
const Welcome = () => {
    return ( 
        <nav className="welcome p-4 mb-5">
            <div className="flex items-center justify-between">
                <div className="userName">
                    <h2 className="font-bold">Hello Robert <span>👋</span></h2>
                    <p className="font-thin text-sm">Good Morning</p>
                </div>
                <div className="search relative">
                    <span className="absolute top-3 left-1">
                        <img src={search} alt="Search Icon" className="w-4/6"/>
                    </span>
                    <input type="search" name="search" id="search" className="shadow-md rounded-md pl-6 p-2 focus:outline-none" />
                </div>
            </div>
        </nav>
     );
}
 
export default Welcome;