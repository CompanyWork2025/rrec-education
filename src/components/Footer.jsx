import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation from react-router-dom

function Footer() {
  const location = useLocation();  // Get the current route

  return (
    <footer className="footer bg-base-200 bg-black text-base-content rounded p-10 z-10">
      <div className={`grid grid-rows-3 grid-cols-1 text-white ${location.pathname === '/' ? 'lg:mt-0 mt-0' : 'lg:mt-0 mt-0'} gap-4 text-center`}>
        {/* Footer Links (Top Center) */}
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="link hover:text-blue-400 link-hover">Home</Link>
          <Link to="/admission-procedure-for-study-in-russia/" className="link hover:text-blue-400 link-hover">Admission Procedure</Link>
          <Link to="/contact" className="link hover:text-blue-400 link-hover">Contact Us</Link>
          <Link to="/apply" className="link hover:text-blue-400 link-hover">Apply Now!</Link>
        </nav>

        {/* Icons (Middle Center) */}
        <nav>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/rrecrussia_officials?igsh=azd6YTR6MHdzaG85"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-pink-500"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.15 4.771 1.691 4.921 4.921.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.15 3.252-1.691 4.771-4.921 4.921-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-3.252-.15-4.771-1.691-4.921-4.921C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.15-3.252 1.691-4.771 4.921-4.921C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 3.012.227.227 3.012.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.157 4.04 2.942 6.825 6.982 6.982C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c4.04-.157 6.825-2.942 6.982-6.982.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.157-4.04-2.942-6.825-6.982-6.982C15.668.012 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.846a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>

            <a
              href="https://youtube.com/@rrecrussiaofficials?si=FugkoL7-aPBWWa_7"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-400">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1ETeMZt2WX/?mibextid=wwXIfr"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-400">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright (Bottom Center) */}
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by RREC Team.</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
