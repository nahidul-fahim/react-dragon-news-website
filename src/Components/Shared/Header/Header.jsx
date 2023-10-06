import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-2">
            <img src={logo} alt="Logo of the website" />
            <p className='text-xl text-[gray] text-center'>Journalism Without Fear or Favour</p>
            <p className="text-base text-[gray]"> <span className="font-medium text-[#616161]">{moment().format("dddd,")}</span> {moment().format("MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;