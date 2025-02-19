import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ContactInfo from "./ContactInfo";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return t("contact.error.name");
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return t("contact.error.email");
    if (!form.message.trim()) return t("contact.error.message");
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setModal({ show: true, success: false, message: error });
      return;
    }

    setLoading(true);
    emailjs
      .send(
        'service_e9t0nq5',
        'template_k27w20p',
        {
          from_name: form.name,
          to_name: "Nguyen Tan Sang",
          from_email: form.email,
          to_email: "nguyentansangxd@gmail.com",
          message: form.message,
        },
        'g7YX69R0zMoTcSx0f'
      )
      .then(() => {
        setLoading(false);
        setModal({ show: true, success: true, message: t("contact.success") });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setModal({ show: true, success: false, message: t("contact.failure") });
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden rounded-2xl py-20 bg-white bg-opacity-10">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='bg-transparent p-8 rounded-2xl'>
        <ContactInfo />
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] px-10'>
        <h3 className="font-bold text-[30px] text-white">{t("contact.title")}.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="relative flex items-center">
            <FaUser className="absolute left-8 text-white opacity-50" />
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.name")}
              className='bg-[#2D2D2D] py-4 px-14 text-white placeholder-gray-400 rounded-[100px] outline-none w-full border border-[#3D3D3D]'
            />
          </div>
          <div className="relative flex items-center">
            <MdEmail className="absolute left-8 text-white opacity-50" />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.email")}
              className='bg-[#2D2D2D] py-4 px-14 text-white placeholder-gray-400 rounded-[100px] outline-none w-full border border-[#3D3D3D]'
            />
          </div>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.message")}
            className='bg-[#2D2D2D] py-4 px-6 text-white placeholder-gray-400 rounded-[30px] outline-none w-full border border-[#3D3D3D]'
          />

          <button type='submit' className='bg-[#A56A5C] hover:bg-[#8B4513] py-3 px-8 rounded-[100px] text-white font-bold w-full transition-colors duration-300'>
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>

      {/* Modal hiển thị kết quả */}
      {modal.show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
        >
          <div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg text-center border border-[#3D3D3D]">
            <h2 className={`text-xl font-bold ${modal.success ? "text-green-400" : "text-red-400"}`}>
              {modal.success ? t("contact.success_title") : t("contact.failure_title")}
            </h2>
            <p className="text-gray-300 mt-2">{modal.message}</p>
            <button onClick={() => setModal({ ...modal, show: false })} className="mt-4 px-6 py-2 bg-[#A56A5C] hover:bg-[#8B4513] text-white rounded-md transition-colors duration-300">
              OK
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "CONTACT");
