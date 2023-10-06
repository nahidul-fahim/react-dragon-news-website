import Header from "../../Components/Shared/Header/Header";
import LeftSideNav from "../../Components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import RighSideNav from "../../Components/Shared/RightSideNav/RighSideNav";
import LatestNews from "./LatestNews";


const Home = () => {
    return (
        <div>
            <Header />

            {/* Latest News section */}

            <div className="flex justify-start items-center mt-14">
                <button className="text-white font-medium bg-[#d72050] px-4 py-2">Latest</button>
                <LatestNews />
            </div>

            {/* Navbar Section */}

            <Navbar> </Navbar>

            {/* Main Content  */}

            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16">
                <div>
                    <LeftSideNav />
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-center">Main Content</h2>
                </div>
                <div>
                    <RighSideNav />
                </div>
            </div>

        </div>
    );
};

export default Home;