import { FaCalendar,FaWallet } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdLibraryBooks} from "react-icons/md";
import { RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <section>
      <div className="drawer lg:drawer-open bg-[#D1A054]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-white">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80 min-h-full  font-medium text-black ">
           


                <> <li><Link to="/dashboard/userhome"><RiHome2Fill className="text-lg" />User Home</Link></li>
                  <li><Link to="/dashboard/mycart"><RiShoppingCart2Fill className="text-lg" />My Cart</Link></li>
                  <li><Link><FaCalendar className="text-lg" />Reservations</Link></li>
                  <li><Link><FaWallet className="text-lg" />Payment History</Link></li></>
        

            <div className="divider my-10"></div>

            <li><Link to="/"><RiHome2Fill className="text-lg" />Home</Link></li>
            <li><Link to="/ourMenu"><IoMenu className="text-lg" />Menu</Link></li>
            <li><Link to="/order/salad"><MdLibraryBooks className="text-lg" />Order Food</Link></li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;