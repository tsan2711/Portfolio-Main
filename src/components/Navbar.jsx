import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { styles } from "../styles";
import { useConstants } from "../constants";
import { logo, menu, close } from "../assets";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { useTranslation } from "react-i18next"; // Import hook dịch ngôn ngữ


const Navbar = () => {
  const { t, i18n } = useTranslation(); // Hook của react-i18next
  const [active, setActive] = useState("");
  const [language, setLanguage] = useState(i18n.language || "en");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const navigate = useNavigate(); // Điều hướng trang
  
  const { navLinks, languages } = useConstants(); // Lấy dữ liệu từ file constants
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/project/")) {
      setActive("PROJECT");
    }
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("PROJECT");
      if (!projectsSection) return;
  
      const rect = projectsSection.getBoundingClientRect(); // Lấy vị trí section
      const viewportHeight = window.innerHeight; // Chiều cao màn hình
  
      // Nếu phần lớn section "Projects" xuất hiện trên màn hình, active nó
      if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.3) {
        setActive("PROJECT");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          setActive(entry.target.getAttribute("id"));
          console.log("Active Section:", entry.target.getAttribute("id")); // 🔥 Debugging
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3,
    });
    
    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navLinks]);

  const handleNavClick = (id) => {
    if (location.pathname.startsWith("/project/") || !location.pathname.startsWith("/#")) {
      // Nếu đang trong trang ProjectDetail, điều hướng về trang chủ trước rồi mới scroll
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Đợi một chút trước khi scroll để đảm bảo trang đã load
    } 
    else {
      // Nếu đang ở trang chủ, chỉ cần scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setToggle(false); 
  };

  const changeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang); // Thay đổi ngôn ngữ
    setLanguage(lang);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[#A56A5C] text-[24px] font-bold cursor-pointer flex">
            Tan &nbsp;
            <span className="md:block hidden">Sang</span>
          </p>
        </Link>

        {/* Thanh điều hướng */}
        <div className="relative">
          <ul className="list-none hidden lg:flex flex-row gap-10 relative">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative text-[16px] font-medium cursor-pointer ${
                  active === nav.id ? "text-[#A56A5C]" : "text-[#aaa6c3]"
                } hover:text-black`}
                onClick={() => handleNavClick(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>

                {/* Thanh gạch chân */}
                {active === nav.id && (
                  <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-[#A56A5C] transition-all duration-300"></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Ngôn ngữ */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {languages.map((lang) => (
            <li
              key={lang.id}
              className={`${
                language === lang.id ? "text-light-orange" : "text-secondary"
              } hover:text-black text-[16px] font-medium cursor-pointer`}
              onClick={() => changeLanguage(lang.id)}
            >
              <a href={`#${lang.id}`}>{lang.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg flex flex-col items-center pt-20 z-30"
              >
                <button className="absolute top-8 right-8 text-gray-600" onClick={() => setToggle(false)}>
                  <img src={close} alt="" />
                </button>

                <ul className="list-none flex flex-col gap-6">
                  {navLinks.map((nav) => (
                    <li key={nav.id} className={`text-[18px] font-medium cursor-pointer hover:text-light-orange transition ${active === nav.id ? "text-light-orange" : "text-black"}`} onClick={() => handleNavClick(nav.id)}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4">
                  <button onClick={() => changeLanguage("en")} className={`px-4 py-2 rounded-lg ${language === "en" ? "bg-light-orange text-white" : "bg-gray-200 text-black"}`}>ENG</button>
                  <button onClick={() => changeLanguage("vi")} className={`px-4 py-2 rounded-lg ${language === "vi" ? "bg-light-orange text-white" : "bg-gray-200 text-black"}`}>VI</button>
                </div>

              </motion.div>
            )}
            </AnimatePresence>
          {/* <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
