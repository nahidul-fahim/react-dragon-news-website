import RighNavLogin from "./RighNavLogin";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bgImg from "../../../assets/bg.png";


const RighSideNav = () => {
    return (
        <div className="px-5">
            <RighNavLogin />

            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-5">Find Us On</h3>

                <a href=""> <div className="border-[1px] border-[lightgray] flex justify-start items-center gap-x-5 w-full p-4 rounded-t-md">
                    <span> <FaFacebookF /> </span>
                    <p className="font-medium text-[gray]">Facebook</p>
                </div></a>

                <a href=""><div className="border-x-[1px] border-[lightgray] flex justify-start items-center gap-x-5 w-full p-4">
                    <span> <FaTwitter /> </span>
                    <p className="font-medium text-[gray]">Twitter</p>
                </div></a>

                <a href=""><div className="border-[1px] border-[lightgray] flex justify-start items-center gap-x-5 w-full p-4 rounded-b-md">
                    <span> <FaInstagram /> </span>
                    <p className="font-medium text-[gray]">Instagram</p>
                </div></a>
            </div>

            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-5">Q-zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" className="mt-6"/>
                <img src={qZone3} alt="" className="mt-6"/>
            </div>

            <div className="mt-12">

            </div>
        </div>
    );
};

export default RighSideNav;