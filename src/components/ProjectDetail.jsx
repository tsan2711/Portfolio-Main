import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icon mũi tên
import { useConstants } from "../constants";
import { useTranslation } from "react-i18next";


const ProjectDetail = () => {
  const { t } = useTranslation();
  const { projects } = useConstants();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); // Thêm ref để điều khiển slider

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-light-orange">Project Not Found</h1>
        <p className="text-gray-600 text-lg mt-2">
          The project you are looking for does not exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-light-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all"
        >
          ← Back to Projects
        </button>
        <img src="/images/404.gif" alt="404" className="w-72 mt-10" />
      </div>
    );
  }

  // Cấu hình Slideshow chính
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  // Chuyển slide khi bấm vào thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Tạo danh sách tất cả hình ảnh & video
  const mediaItems = [
    ...(project.video ? project.video.map((vid) => ({ type: "video", src: vid.src, thumbnail: vid.thumbnail })) : []),
    ...(project.images ? project.images.map((img) => ({ type: "image", src: img })) : []),
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#A56A5C] mt-8">{project.name}</h1>
      <p className="text-white-700 text-lg mt-4 italic">{project.participants}</p>
      
      {/* Slideshow cho hình ảnh và video */}
      
      <div className="relative mt-6">
        <Slider {...settings} ref={sliderRef} className="rounded-lg shadow-lg" initialSlide={currentSlide}>
          {mediaItems.map((item, index) => (
            <div key={index}>
              {item.type === "image" ? (
                <img src={item.src} alt={`Project ${index}`} className="rounded-lg w-full h-[200px] lg:h-[500px] object-fit " />
              ) : item.src.includes("youtube") ? (
                <iframe
                  src={item.src}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[200px] lg:h-[500px] rounded-lg"
                ></iframe>
              ) : (
                <video controls className="w-full h-[200px] lg:h-[500px] rounded-lg">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}  
            </div>
          ))}
        </Slider>
        
        <button onClick={handlePrevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition">
          <FaChevronLeft size={20} />
        </button>

        <button onClick={handleNextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition">
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail Preview */}
      <div className="flex mt-4 gap-2 justify-center">
        {mediaItems.map((item, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => handleThumbnailClick(index)}>
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                <span className="text-white text-xs font-bold">Video</span>
              </div>
            )}
            <img
              src={item.type === "image" ? item.src : item.thumbnail}
              alt={`Thumbnail ${index}`}
              className={`w-24 h-12 lg:h-16 rounded-md cursor-pointer border-2 ${
                currentSlide === index ? "border-light-orange" : "border-gray-300"
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Công nghệ sử dụng */}
      {project.technologies && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#A56A5C]">Technologies Used</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mô tả */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#A56A5C]">Description</h2>
        <p className="text-white mt-4 text-gray-700">{project.description}</p>
      </div>

      {/* Danh sách tính năng */}
      {project.features && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#A56A5C]">Key Features</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Nút điều hướng */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
        >
          ← {t("project-detail.back-to-home")}
        </button>
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A56A5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cd5c5c] transition-all"
          >
            {t("project-detail.view-source")}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
