import logo from "../assets/logo.png"

const Login = () => {
    return ( 
        <main className="login border-2 pt-48">
            <div className="loginForm pl-8 my-5 w-10/12">
                <img src={logo} alt="HRMS-logo"  className="w-3/6 p-2 my-5"/>
                
                <h2 className="font-bold text-2xl my-2">Welcome <span>👋</span></h2>
                <p className="text-sm text-slate-200 mb-7">Please login here</p>
                <form className="login">
                    <div className="relative">
                        <span className="placeholder absolute left-2 text-[#7152F3] text-xs top-1">
                            Email Address
                        </span>
                        <input type="email" name="email" id="email" className="p-2 rounded-md focus:outline-none border-2 my-1 w-full" />
                    </div>
                    <div className="relative">
                        <span className="placeholder absolute left-2 text-[#7152F3] text-xs top-1">
                            Password
                        </span>
                         <input type="password" name="password" id="password"  className="p-2 rounded-md focus:outline-none border-2 my-1 w-full" />
                    </div>
                    <div className="rememberMe flex items-center justify-between my-2">
                        <div className="flex gap-2">
                            <input type="checkbox" name="rememberMe" d="rememberMe" value="checked" />
                            <p className="text-sm font-bold">Remember Me</p>
                        </div>
                        <div>
                            <p className="text-sm ">Forgot Password?</p>
                        </div>
                        
                    </div>
                    <div className="submit">
                         <input type="submit" value="Login" placeholder="Password" className="p-2 rounded-md bg-[#7152F3] text-white my-1 w-full" />
                    </div>
                

                </form>
            </div>
        </main>
     );
}
 
export default Login;