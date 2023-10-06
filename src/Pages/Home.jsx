import Header from "../Components/Shared/Header/Header";
import LeftSideNav from "../Components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Components/Shared/Navbar/Navbar";
import RighSideNav from "../Components/Shared/RightSideNav/RighSideNav";


const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-4">
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