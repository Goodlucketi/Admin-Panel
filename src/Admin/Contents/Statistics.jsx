import users from "../../assets/icons/employees.png"
import attendance from "../../assets/icons/attendance.png"
import applicants from "../../assets/icons/applicants.png"
import projects from "../../assets/icons/projects.png"
import upArrow from "../../assets/icons/up-arrow.png"
import downArrow from "../../assets/icons/down.png"


const Statistics = () => {
    return ( 
        <main className="stats">
            <div className="stat-container grid grid-cols-2 items-center gap-6">
                <div className="shadow-md p-4 rounded-md gap-2">
                    <li className="list-none flex items-center gap-3">
                        <img src={users} alt="All-Employees" className="  p-2 rounded-md" />
                        <p>Total Employee</p>
                    </li>
                    <li className="list-none flex justify-between items-center gap-3">
                        <h2 className=" font-bold p-2 text-xl">560</h2>
                        <p className="bg-green-100 rounded-md p-2 flex items-center"><span><img src={upArrow} alt="" /></span>12%</p>
                    </li>
                    <hr className="my-2" />
                    <p className="text-xs text-slate-300">Updated July, 15, 2023</p>

                </div>

                <div className="shadow-md p-4 rounded-md gap-2">
                    <li className="list-none flex items-center gap-3">
                        <img src={applicants} alt="All-Employees" className="  p-2 rounded-md" />
                        <p>Total Applicants</p>
                    </li>
                    <li className="list-none flex justify-between items-center gap-3">
                        <h2 className=" font-bold p-2 text-xl">1050</h2>
                        <p className="bg-green-100 rounded-md p-2 flex items-center"><span><img src={upArrow} alt="" /></span>12%</p>
                    </li>
                    <hr className="my-2" />
                    <p className="text-xs text-slate-300">Updated July, 15, 2023</p>

                </div>

                <div className="shadow-md p-4 rounded-md gap-2">
                    <li className="list-none flex items-center gap-3">
                        <img src={attendance} alt="All-Employees" className="  p-2 rounded-md" />
                        <p>Total Attendance</p>
                    </li>
                    <li className="list-none flex justify-between items-center gap-3">
                        <h2 className=" font-bold p-2 text-xl">470</h2>
                        <p className="bg-red-100 rounded-md p-2 flex items-center"><span><img src={downArrow} alt="" /></span>12%</p>
                    </li>
                    <hr className="my-2" />
                    <p className="text-xs text-slate-300">Updated July, 15, 2023</p>

                </div>

                <div className="shadow-md p-4 rounded-md gap-2">
                    <li className="list-none flex items-center gap-3">
                        <img src={projects} alt="All-Employees" className="  p-2 rounded-md" />
                        <p>Total Projects</p>
                    </li>
                    <li className="list-none flex justify-between items-center gap-3">
                        <h2 className=" font-bold p-2 text-xl">250</h2>
                        <p className="bg-green-100 rounded-md p-2 flex items-center"><span><img src={upArrow} alt="" /></span>12%</p>
                    </li>
                    <hr className="my-2" />
                    <p className="text-xs text-slate-300">Updated July, 15, 2023</p>

                </div>

            </div>
        </main>
     );
}
 
export default Statistics;