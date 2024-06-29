import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Educational Platform for UPSC Students.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoom-clone-wheat.vercel.app/",
  },
  {
    id: 1,
    title: "Car showcase App",
    des: "A full-stack app that allows users to browse and filter cars based on their preferences. Built with React, Node.js, and MongoDB.",
    img: "/Car-showcase.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://cars-showcase-beige-three.vercel.app/",
  },
  {
    id: 2,
    title: "Devflow - A stackoverflow clone",
    des: "A full-stack app that allows users to ask and answer questions, built with Next.js, Tailwind CSS, and MongoDB.",
    img: "/DevFlow.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/Ishuboi07/stack_overflow_nextjs_14",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://imaginify-rust-pi.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Ishaan was a game-changer for our business. His expertise and innovative approach to web development exceeded our expectations. Ishaan's attention to detail and commitment to quality are unmatched. We highly recommend him for any project.",
    name: "Sarah Mitchell",
    title: "CEO of TechWave Solutions",
  },
  {
    quote:
      "Ishaan's ability to understand our vision and translate it into a stunning website was impressive. He is not only skilled but also a great communicator, making the whole process smooth and enjoyable. We are thrilled with the results and look forward to future collaborations.",
    name: "James Lee",
    title: "Marketing Manager at Horizon Ventures",
  },
  {
    quote:
      "Ishaan demonstrated exceptional technical skills and a deep understanding of our needs. His proactive approach and dedication to delivering top-notch solutions were instrumental in the success of our project. We couldn't have asked for a better partner.",
    name: "Linda Green",
    title: "Project Lead at InnovateX",
  },
  {
    quote:
      "From the initial consultation to the final delivery, Ishaan showed professionalism and creativity. His work ethic and passion for development shine through in every aspect of his work. Ishaan is a true asset to any team, and we highly recommend him.",
    name: "David Brown",
    title: "CTO of BlueSky Technologies",
  },
  {
    quote:
      "Ishaan's work on our website was nothing short of outstanding. His technical prowess combined with his artistic vision resulted in a product that far surpassed our expectations. He is a true professional and a joy to work with.",
    name: "Emily Wilson",
    title: "Founder of Bright Future Enterprises",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ishuboi07",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/agarwalishaan7",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ishaan-agarwal-2a6a2b221/",
  },
];
