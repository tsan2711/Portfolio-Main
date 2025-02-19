import React from "react";
import { motion } from "framer-motion";
import { contact } from "../assets";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t, i18n } = useTranslation(); // Lấy ngôn ngữ hiện tại

  // Định nghĩa các biến thể (variants) cho các trạng thái mặc định và hover
  const containerVariants = {
    hover: {},
  };

  const imageVariants = {
    hover: { opacity: 0, transition: { duration: 0.5 } },
    initial: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hover: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    initial: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={i18n.language}
      className="contact w-auto xl:w-[550px] relative overflow-hidden"
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
    >
        <motion.img
            src={contact}
            alt="Contact"
            className="w-full h-auto md:block hidden"
            variants={imageVariants}
        />

        <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-black bg-transparent md:block hidden"
            variants={textVariants}
            animate="initial" 
            whileHover="hover"
        >
            <motion.h1 className="text-[30px] md:text-[40px] font-bold">{t("contact.contact_info")}</motion.h1>
            <motion.div className="item mt-10">
                <h2 className="font-bold">Mail</h2>
                <span>nguyentansangxd@gmail.com</span>
            </motion.div>
            <motion.div className="item mt-4">
                <h2 className="font-bold">{t("contact.address")}</h2>
                <span>{t("contact.address_detail")}</span>
            </motion.div>
            <motion.div className="item mt-4">
                <h2 className="font-bold">{t("contact.phone")}</h2>
                <span>(+84) 024 031 093</span>
            </motion.div>
        </motion.div>

        <motion.div
            className="top-0 left-0 w-full h-full justify-center items-center text-center text-black bg-transparent block md:hidden pt-28"
        >
            <motion.h1 className="text-[20px] md:text-[30px] font-bold">{t("contact.contact_info")}</motion.h1>
            <motion.div className="item mt-6">
                <h2 className="font-bold">Mail</h2>
                <span>nguyentansangxd@gmail.com</span>
            </motion.div>
            <motion.div className="item mt-4">
                <h2 className="font-bold">{t("contact.address")}</h2>
                <span>{t("contact.address_detail")}</span>
            </motion.div>
            <motion.div className="item mt-4">
                <h2 className="font-bold">{t("contact.phone")}</h2>
                <span>(+84) 024 031 093</span>
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
