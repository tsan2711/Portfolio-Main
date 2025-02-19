import { useTranslation } from "react-i18next";
import {
  game,
  backend,
  uxui,
  web,
  game_dev,
  game_design,
  web_dev,
  backend_dev,
  javascript,
  unity,
  html,
  css,
  git,
  figma,
  office,
  mindx,
  carrent,
  jobit,
  tripguide,
  facebook,
  zalo,
  telegram,
  gmail,
  linkedin,
  facebook_link,
  zalo_link,
  telegram_link,
  gmail_link,
  linkedin_link,
  java,
  photoshop,
  premiere_pro,
  github,
  github_link,
  mobile_dev,
} from "../assets";

export const useConstants = () => {

  const { t } = useTranslation();

  const navLinks = [
    {
      id: "HOME",
      title: t("navbar.home"),
    },
    {
      id: "ABOUT",
      title: t("navbar.about"),
    },
    {
      id: "EXPERIENCE",
      title: t("navbar.experience"),
    },
    {
      id: "PROJECT",
      title: t("navbar.projects"),
    },
    {
      id: "CONTACT",
      title: t("navbar.contact"),
    },
  ];

  const languages = [
    {
      id: "en",
      title: "ENG",
    },
    {
      id: "vi",
      title: "VIE",
    }
  ]

  const media = [
    {
      id: "facebook",
      title: "Facebook",
      icon: facebook,
      icon_hover: facebook_link,
      url: "https://www.facebook.com/profile.php?id=61561928965148",
    },
    {
      id: "zalo",
      title: "Zalo",
      icon: zalo,
      icon_hover: zalo_link,
      url: "https://zalo.me/0903614342",
    },
    {
      id: "telegram",
      title: "Telegram",
      icon: telegram,
      icon_hover: telegram_link,
      url: "https://t.me/maigiaminh",
    },
    {
      id: "gmail",
      title: "Gmail",
      icon: gmail,
      icon_hover: gmail_link,
      url: "mailto:minh.mgia@gmail.com"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: linkedin,
      icon_hover: linkedin_link,
      url: "https://www.linkedin.com/in/mgminh"
    },
    {
      id: "github",
      title: "GitHub",
      icon: github,
      icon_hover: github_link,
      url: "https://github.com/maigiaminh"
    }

  ]

  const services = [
    {
      title: t("services.game_dev"),
      icon: game_dev,
    },
    {
      title: t("services.game_design"),
      icon: game_design,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Office",
      icon: office,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Premiere",
      icon: premiere_pro,
    },
  ];

  const experiences = [
    {
      title: t("experiences.ta_title"),
      company_name: "MindX Technology School",
      icon: mindx,
      iconBg: "#fff",
      date: t("experiences.ta_date"),
      points: [
        t("experiences.ta_point1"),
        t("experiences.ta_point2"),
      ],
    },
    {
      title: t("experiences.lecturer_title"),
      company_name: "MindX Technology School",
      icon: mindx,
      iconBg: "#fff",
      date: t("experiences.lecturer_date"),
      points: [
        t("experiences.lecturer_point1"),
        t("experiences.lecturer_point2"),
        t("experiences.lecturer_point3"),
      ],
    },
  ];

  const projects = [
    {
      name: "RPG 3D Multiplayer Game",
      participants: t("projects.RPG 3D Multiplayer Game.participants"),
      shortDescription: t("projects.RPG 3D Multiplayer Game.shortDescription"),
      description: t("projects.RPG 3D Multiplayer Game.description"),
      technologies: t("projects.RPG 3D Multiplayer Game.technologies", { returnObjects: true }),
      features: t("projects.RPG 3D Multiplayer Game.features", { returnObjects: true }),
      images: [
        "/images/rpg3d/rpg3d-02.png",
        "/images/rpg3d/rpg3d-03.png",
        "/images/rpg3d/rpg3d-04.png",
        "/images/rpg3d/rpg3d-06.png",
        "/images/rpg3d/rpg3d-07.png",
        "/images/rpg3d/rpg3d-08.jpg",
        "/images/rpg3d/rpg3d-09.png",
      ],
      thumbnail: "/images/rpg3d/rpg3d-thumbnail.png",
      video: [
        {
          "src": "https://www.youtube.com/embed/bqME5xO41Ss?si=r5LmF-_iltV-QktG",
          "type": "videos",
          "thumbnail": "/images/rpg3d/rpg3d-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/RPG3DMultiplayer"
    },
    {
      name: "3D Survivor Game",
      participants: t("projects.3D Survivor Game.participants"),
      shortDescription: t("projects.3D Survivor Game.shortDescription"),
      description: t("projects.3D Survivor Game.description"),
      technologies: t("projects.3D Survivor Game.technologies", { returnObjects: true }),
      features: t("projects.3D Survivor Game.features", { returnObjects: true }),
      images: [
        "/images/survivor/1.png",
        "/images/survivor/2.png",
        "/images/survivor/3.png",
        "/images/survivor/4.png",
        "/images/survivor/5.png",
        "/images/survivor/6.png",
        "/images/survivor/7.png",
        "/images/survivor/8.png",
        "/images/survivor/9.png",
        "/images/survivor/10.png",
        "/images/survivor/11.png",
        "/images/survivor/12.png",
        "/images/survivor/13.png",
        "/images/survivor/14.png",
        "/images/survivor/15.png",
        "/images/survivor/16.png",
        "/images/survivor/17.png",
        "/images/survivor/18.png",
        "/images/survivor/12.png",
        "/images/survivor/20.png",
        "/images/survivor/21.png",
        "/images/survivor/22.png",
        "/images/survivor/23.png",
        "/images/survivor/24.png",
        "/images/survivor/25.png",
      ],
      thumbnail: "/images/survivor/1.png",
      video: [
        {
          "src": "https://www.youtube.com/embed/KB_N5uMcm0s?si=0ZBACPTmq5rs8Aw2",
          "type": "videos",
          "thumbnail": "/images/survivor/1.png"
        }
      ],
      source: "https://github.com/tsan2711/Survivor"
    },
    {
      name: "2D Multiplayer Game",
      participants: t("projects.2D Multiplayer Game.participants"),
      shortDescription: t("projects.2D Multiplayer Game.shortDescription"),
      description: t("projects.2D Multiplayer Game.description"),
      technologies: t("projects.2D Multiplayer Game.technologies", { returnObjects: true }),
      features: t("projects.2D Multiplayer Game.features", { returnObjects: true }),
      images: [
        "/images/2dmulti/1.png",
        "/images/2dmulti/2.png",
        "/images/2dmulti/3.png",
        "/images/2dmulti/4.png",
        "/images/2dmulti/5.png",
        "/images/2dmulti/6.png",
      ],
      thumbnail: "/images/2dmulti/1.png",
      video: [
        {
          "src": "https://www.youtube.com/embed/XQZl5x9NxU0?si=rRcxOVG7uU1gvFtI",
          "type": "videos",
          "thumbnail": "/images/2dmulti/1.png"
        }
      ],
      source: "https://github.com/tsan2711/UniverseBattle"
    },
    {
      name: "VFX",
      participants: t("projects.VFX.participants"),
      shortDescription: t("projects.VFX.shortDescription"),
      description: t("projects.VFX.description"),
      technologies: t("projects.VFX.technologies", { returnObjects: true }),
      features: t("projects.VFX.features", { returnObjects: true }),
      images: [
        "/images/vfx/1.png",
        "/images/vfx/2.png",
        "/images/vfx/3.png",
        "/images/vfx/4.png",
        "/images/vfx/5.png",
        "/images/vfx/6.png",
        "/images/vfx/7.png",
        "/images/vfx/8.png",
        "/images/vfx/9.png",
        "/images/vfx/10.png",
        "/images/vfx/11.png",
      ],
      thumbnail: "/images/vfx/1.png",
      video: [
        {
          "src": "https://www.youtube.com/embed/H05OEA-MVSE?si=4gjZ2dMnRPhJ1kFG",
          "type": "videos",
          "thumbnail": "/images/vfx/1.png"
        }
      ],
      source: "https://github.com/tsan2711/UniverseBattle"
    },
  ];

  return { navLinks, services, languages, media, technologies, experiences, projects };
};