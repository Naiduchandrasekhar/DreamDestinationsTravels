import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../utils/navigation";
import { DreamDestinationLogo } from "../utils/images";
import { useTranslation } from "../hooks/useTranslation";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/languageSlice";
import { availableLanguages } from "../utils/languages";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const pathName = location?.pathname;
  const { t, lang } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (code) => {
    dispatch(setLanguage(code));
  };

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setIsScrolled(scrollTop > 48);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinksMemo = useMemo(
    () =>
      navLinks.map((link) => (
        <motion.div
          key={link.path}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            to={link.path}
            className={`nav-link ${pathName === link.path ? "active" : ""}`}
          >
            {t(link.key)}
          </Link>
        </motion.div>
      )),
    [pathName, t]
  );

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
    >
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="container">
        <motion.div
          className="navbar-brand d-flex align-items-center"
          onClick={() => (window.location.href = "/")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ cursor: "pointer" }}
        >
          <img
            className="DreamDestinationLogo"
            src={DreamDestinationLogo}
            alt="Dream Destinations"
          />
        </motion.div>

        <div className="nav-links d-none d-lg-flex ms-auto">{navLinksMemo}</div>

        <div className="nav-actions d-flex align-items-center gap-3">
          <div className="dropdown d-none d-lg-block">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang.toUpperCase()}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              {availableLanguages.map((l) => (
                <li key={l.code}>
                  <button className="dropdown-item" onClick={() => changeLanguage(l.code)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="menu-toggle d-lg-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img className="DreamDestinationLogo" src={DreamDestinationLogo} alt="Dream Destinations" />
                </div>
                <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <FiX size={24} />
                </button>
              </div>

              <div className="mobile-menu-nav mt-4">{navLinksMemo}</div>

              <div className="mobile-menu-footer mt-4">
                <div className="text-muted mb-2">Language</div>
                <div className="d-flex gap-2 justify-content-center">
                  {availableLanguages.map((l) => (
                    <button
                      key={l.code}
                      className={`btn btn-sm ${lang === l.code ? "btn-primary" : "btn-outline-secondary"}`}
                      onClick={() => changeLanguage(l.code)}
                    >
                      {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
