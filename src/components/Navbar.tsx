import { useState, useRef, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDown, IoCalendarOutline, IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/80 shadow-lg shadow-slate-950/20">
      <nav className="flex items-center justify-between h-14 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 text-slate-100 hover:text-white transition-colors">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-700 text-slate-200 font-semibold text-sm">
            S
          </span>
          <span className="font-semibold text-lg tracking-tight hidden sm:inline">Scheduler</span>
        </a>

        {/* Profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setProfileOpen((o) => !o)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-700/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-expanded={profileOpen}
            aria-haspopup="true"
          >
            <FaRegUserCircle className="w-8 h-8 text-slate-400 shrink-0" aria-hidden />
            <span className="text-sm font-medium hidden sm:inline">Profile</span>
            <IoChevronDown
              className={`w-4 h-4 text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>

          {profileOpen && (
            <div
              className="navbar-dropdown absolute right-0 mt-2 w-56 rounded-xl bg-slate-800 border border-slate-600/80 shadow-xl shadow-slate-950/40 py-1"
              role="menu"
            >
              <div className="px-4 py-3 border-b border-slate-600/60">
                <p className="text-sm font-medium text-slate-100">Signed in</p>
                <p className="text-xs text-slate-400 mt-0.5">Manage your account</p>
              </div>
              <a
                href="#profile"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-700/60 hover:text-white transition-colors"
                role="menuitem"
                onClick={() => setProfileOpen(false)}
              >
                <FaRegUserCircle className="w-5 h-5 text-slate-400" />
                Profile
              </a>
              <a
                href="#calendar"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-700/60 hover:text-white transition-colors"
                role="menuitem"
                onClick={() => setProfileOpen(false)}
              >
                <IoCalendarOutline className="w-5 h-5 text-slate-400" />
                My schedule
              </a>
              <div className="border-t border-slate-600/60 mt-1 pt-1">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-700/60 hover:text-red-300 transition-colors"
                  role="menuitem"
                  onClick={() => {
                    setProfileOpen(false);
                    console.log("Sign out...");
                  }}
                >
                  <IoLogOutOutline className="w-5 h-5" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;