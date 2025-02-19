import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { useConstants } from "../constants";
import { avt_half } from "../assets";
import { t } from "i18next";

const MediaButton = ({ name, image, image_hover, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mr-4"
    >
      <img src={image} alt={name} className="w-1/2 h-1/2 object-contain" />

      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white border border-gray-300 rounded-lg shadow-lg w-96">
          <img src={image_hover} alt={`${name}`} className="w-full h-auto object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
};

const Hero2D = () => {
  const { media } = useConstants();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const updateSize = () => {
      const screenHeight = window.innerHeight;
      setIsSmallScreen(screenHeight < 700);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto mb-16 lg:mb-0" id="HOME">
      <div className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start`}>
        
        {/* Ảnh Avatar */}
        {!isSmallScreen && (
          <div className="flex-1 flex justify-center items-center min-w-[300px] lg:order-2 order-1">
            <img
              src={avt_half}
              alt="Avatar"
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-lg"
            />
          </div>
        )}
        {isSmallScreen && (
          <div className="flex-1 flex justify-center items-center min-w-[300px] lg:order-2 order-1">
            <img src={avt_half} alt="Avatar" className="w-[150px] h-[150px] rounded-full object-cover shadow-lg" />
          </div>
        )}

        {/* Nội dung Text */}
        <div className="lg:order-1 order-2 text-center lg:text-left lg:pl-10">
          <h1 className={`${styles.heroSubText} text-white`}>
            <span className="text-light-orange">{t("hero2d.title")}</span>
          </h1>
          <h1 className={`${styles.heroHeadText} text-black`}>
            {t("hero2d.hello")}<br />{t("hero2d.name")}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black text-justify`}>
            {t("hero2d.description")}
          </p>

          {/* Nút Contact Me & Download Resume */}
          <div className="flex flex-row justify-center lg:justify-start mt-8 space-x-4 text-[10px] lg:text-[16px] ">
            <a href="#CONTACT">
              <button className="bg-light-orange cursor-pointer py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-[#6D6D6D] hover:text-[#151030] border-b-8 border-l-4 border-r-4 hover:border-black">
                {t("hero2d.contact")}
              </button>
            </a>
            <a href="/resume.pdf" download>
              <button className="bg-white cursor-pointer py-3 px-8 rounded-xl text-black font-bold shadow-md shadow-[#6D6D6D] border-black hover:bg-light-orange hover:text-white border-b-8 border-l-4 border-r-4 transition-all ">
                {t("hero2d.resume")}
              </button>
            </a>
          </div>

          {/* Nút mạng xã hội */}
          <div className="relative inset-0 flex justify-center lg:justify-start mt-8">
            {media.map((med) => (
              <MediaButton key={med.id} name={med.id} url={med.url} image={med.icon} image_hover={med.icon_hover} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2D;
