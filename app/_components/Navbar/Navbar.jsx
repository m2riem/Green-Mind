
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white">
      <div className="container w-full lg:w-[88%] mx-auto gap-4 flex-col flex lg:flex-row justify-between items-center p-4">
        <div className="left">
          <ul className="flex gap-2 lg:gap-6 items-center">
            <li className="text-2xl flex items-center gap-2">
              <Link href="/">
                <span className="flex items-center gap-2">
                  <i className="fa-solid "></i> Green mind
                </span>
              </Link>
              </li>
            <li><Link href="/">Home</Link></li>
            
            {/* <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/brands">Brands</Link></li> */}
          </ul>
         
        
        </div>

        <div className="right">
          <ul className="flex gap-4 items-center">
            {/* <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-linkedin"></i></li> */}
            <li><Link href="/Signup"> Signup</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
