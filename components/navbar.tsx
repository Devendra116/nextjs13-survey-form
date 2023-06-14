import React, { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center py-2 bg-gray-50">
      <ul className="flex">
        <li>
          <Link href="/">
            <button
              key="home"
              type="button"
              className="text-gray-800 hover:text-white px-4 py-2 rounded-md"
            >
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link href="/create-survey">
            <button
              key="about"
              type="button"
              className="text-gray-800 hover:text-white px-4 py-2 rounded-md"
            >
              Create-Survey
            </button>
          </Link>
        </li>
        <li>
          <Link href="/view-surveys">
            <button
              key="signup"
              type="button"
              className="text-gray-800 hover:text-white px-4 py-2 rounded-md"
            >
              View-Survey
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
