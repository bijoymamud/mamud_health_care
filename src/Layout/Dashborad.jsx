import { AiOutlineProduct } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import {IoWalletOutline } from "react-icons/io5";
import { RiHomeOfficeLine } from "react-icons/ri";
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
           


            <>
              <li>
                <Link to="/dashboard/userhome" ><FiUsers className="text-lg"/><span>User Home</span></Link>
              </li>
              
              <li className="py-1"><Link to="/dashboard/mycart"><BsCartCheck className="text-lg" />My Cart</Link></li>
              
              <li><Link to="/dashboard/paymentHistory"><IoWalletOutline className="text-lg" />Payment History</Link></li>
            </>
        

            <div className="divider my-10"></div>

            <li>
              <Link to="/"><RiHomeOfficeLine size="18px"/>Home</Link>
            </li>
            <li>
              <Link to="/products"><AiOutlineProduct className="text-lg" />Products</Link>
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;