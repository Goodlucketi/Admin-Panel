import logo from "../assets/logo.png"
import menu from "../assets/icons/apps.png"
import users from "../assets/icons/users2.png"
import dept from "../assets/icons/community.png"
import attendance from "../assets/icons/calendar-check.png"
import payroll from "../assets/icons/coin-dollar.png"
import jobs from "../assets/icons/briefcase04.png"
import user from "../assets/icons/users1.png"
import leaves from "../assets/icons/notepad.png"
import holidays from "../assets/icons/notes01.png"
import settings from "../assets/icons/setting.png"
import lightMode from "../assets/icons/light-mode.png"
import darkMode from "../assets/icons/dark-mode.png"

const SideBar = () => {
    return ( 
        <nav className="fixed w-[30%] p-2 bg-slate-100 relative">
            <img src={logo} alt="HRMS-logo"  className="w-3/6 p-2 my-5"/>

            <aside className="">
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={menu} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">DashBoard</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={users} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">All Employees</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={dept} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">All Departments</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={attendance} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Attendance</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={payroll} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Payroll</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={jobs} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Jobs</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={user} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Candidates</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={leaves} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Leaves</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={holidays} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Holidays</p>
                </li>
                <li className="nav-menu list-none flex items-center gap-2 p-2 hover:bg-slate-200  hover:border-l-2 border-[ #7152F3] transition-all duration-500 rounded-md mb-1">
                    <img src={settings} alt="dash-menu" className="dash-menu"/>
                    <p className="text-sm">Settings</p>
                </li>
                
            </aside>
            <div className="mode absolute left-10 bottom-2 flex justify-center">
                <button className="block light bg-[#7152F3] mr-3 p-3 rounded-md">
                    <img src={lightMode} alt="" />
                </button>
                <button className="block dark  p-3 rounded-md border">
                    <img src={darkMode} alt="" />
                </button>
            </div>
        </nav>
     );
}
 
export default SideBar;