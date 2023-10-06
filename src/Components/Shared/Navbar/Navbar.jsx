import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="mt-[80px]">
            <div className="flex justify-center items-center gap-x-5">
                <NavLink className="text-base text-[gray]">Home</NavLink>
                <NavLink className="text-base text-[gray]">About</NavLink>
                <NavLink className="text-base text-[gray]">Career</NavLink>
            </div>
        </div>
    );
};

export default Navbar;