import Welcome from "./Contents/Welcome";
import Statistics from "./Contents/Statistics";
import Overview from "./Contents/Overview";

const Content = () => {
    return ( 
        <main className="w-[50%] p-5">
            <Welcome/>
            <Statistics />
            <Overview />
        </main>
     );
}
 
export default Content;