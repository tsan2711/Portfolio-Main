import FacebookIcon from "../assets/media/facebook.png";
import ZaloIcon from "../assets/media/zalo.png";
import GmailIcon from "../assets/media/gmail.png";
import LinkedInIcon from "../assets/media/linkedin.png";
import GitHubIcon from "../assets/media/github.png";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import FacebookPortraitIcon from "../assets/media/portrait/facebook.png";
import ZaloPortraitIcon from "../assets/media/portrait/zalo.png";
import GmailPortraitIcon from "../assets/media/portrait/gmail.png";
import LinkedInPortraitIcon from "../assets/media/portrait/linkedin.png";
import GitHubPortraitIcon from "../assets/media/portrait/github.png";

const HeroNew = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center mx-auto">
            <ComputersCanvas />

            <div className="absolute inset-0 top-[120px] max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
                {/* Nội dung chữ */}
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                    Hi, I'm <span className="text-[#A56A5C]">Tan Sang</span>
                </h1>
                <p className="text-white-100 text-lg sm:text-xl mt-2 max-w-xl leading-relaxed">
                    A game developer passionate about creating unique 3D & 2D experiences with Unity.
                    I love telling stories through games, building AI NPCs, and optimizing player experiences.
                </p>

                {/* 🔹 Buttons Section */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                        className="bg-[#A56A5C] text-white px-6 py-3 rounded-lg font-bold text-lg shadow-md transition-all hover:bg-[#7F4F44] w-full sm:w-auto"
                        onClick={() => window.location.href = "mailto:your.email@example.com"}
                    >
                        Contact Me
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-white text-[#A56A5C] px-6 py-3 rounded-lg font-bold text-lg shadow-md border-2 border-[#A56A5C] transition-all hover:bg-[#A56A5C] hover:text-white w-full sm:w-auto"
                    >
                        Download Resume
                    </a>
                </div>

                {/* 🔹 Social Media Icons */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {[FacebookIcon, ZaloIcon, GmailIcon, LinkedInIcon, GitHubIcon].map((icon, index) => (
                        <div
                            key={index}
                            className="relative group w-12 h-12 flex justify-center items-center bg-[#A56A5C] rounded-full p-2 hover:scale-110 transition-all"
                        >
                            {/* Icon luôn hiển thị */}
                            <img
                                src={icon}
                                alt="Social Icon"
                                className="w-8 h-8 z-10"
                            />

                            {/* Profile Image khi hover */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <img
                                    src={[FacebookPortraitIcon, ZaloPortraitIcon, GmailPortraitIcon, LinkedInPortraitIcon, GitHubPortraitIcon][index]}
                                    alt="Profile Image"
                                    className="w-[250px] max-w-[80vw] h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center">
                <a href="#about">
                    <div className="w-[64px] h-[35px] rounded-3xl border-4 border-[#A56A5C] flex justify-center items-center p-2">
                        <motion.div
                            animate={{ x: [-10, 10, -10] }} // Di chuyển ngang qua lại
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} // Mượt hơn
                            className="w-3 h-3 rounded-full bg-[#A56A5C]"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroNew;