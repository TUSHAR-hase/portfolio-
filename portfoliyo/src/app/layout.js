import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Tushar Thakor - IITRAM Computer Science Student & Developer",
//    description:
//     " Tushar Thakor a passionate Computer Science student At IITRAM(Institute of Infrastructure, Technology, Research And Management), hackathon winner, and full-stack developer. Experienced in React, Node.js, Flutter, MongoDB, and C++. Creator of innovative projects in women safety, work tracking, cab booking, and kids animation using AI.",
//    keywords: [
//     "Tushar Thakor",
//     "IITRAM",
//     "tushar thakor iitram",
//     "Institute of Infrastructure, Technology, Research And Management",
//     "Computer Science Student",
//     "Full-stack Developer",
//     "React Developer",
//     "Node.js Developer",
//     "Flutter Developer",
//     "MongoDB",
//     "C++",
//     "Hackathon Winner",
//     "Women Safety Projects",
//     "AI Animation",
//     "Work Tracking App",
//     "Cab Booking App"
//   ].join(", "),
//   icons: {
//     icon: "/latter.png",
//   },
// };

export const metadata = {
  title: "Tushar Thakor - IITRAM Computer Science Student & Developer",
  description:
    "Tushar Thakor, a Computer Science student at IITRAM (Institute of Infrastructure, Technology, Research And Management), hackathon winner, and full-stack developer skilled in React, Node.js, Flutter, MongoDB, and C++. Creator of innovative projects in women safety, freelance work tracking, cab booking, and AI-based kids animation.",
  keywords: [
    "Tushar Thakor",
    "Thakor Tushar",
     "Tushar Thakor IITRAM",
  "Thakor Tushar IITRAM Computer Science",
  "Tushar Thakor portfolio",
  "Tushar Thakor full stack developer",
  "Tushar Thakor React Node developer",
  "Tushar Thakor hackathon winner",
  "IITRAM Computer Science student Tushar Thakor",
  "Tushar Thakor freelance projects",
  "Tushar Thakor MERN stack developer",
  "Tushar Thakor AI animation projects",
  "Tushar Thakor work tracker app",
  "Tushar Thakor POS system developer",
  "Tushar Thakor women safety project",
  "Tushar Thakor cab booking system",
  "IITRAM developer portfolio",
    "IITRAM",
    "Thakor Tushar IITRAM",
    "IITRAM Computer Science",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Flutter",
    "MongoDB",
    "C++",
    "Hackathon Projects",
    "AI Kids Animation",
    "Freelance Work Tracker",
    "Cab Booking System"
  ].join(", "),
  openGraph: {
    title: "Tushar Thakor - IITRAM CS Student & Developer",
    description: "Portfolio of Tushar Thakor from IITRAM, Full-Stack Developer and Hackathon Winner",
    url: "https://portfolio-sigma-one-hbcernvfa9.vercel.app", // replace with your actual domain
    siteName: "Tushar Thakor Portfolio",
    images: [
      {
        url: "https://portfolio-sigma-one-hbcernvfa9.vercel.app/_next/static/media/tushrphoto.5808b86a.jpg", // optional preview image
        width: 1200,
        height: 630,
        alt: "Tushar Thakor Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {children}</body>
    </html>
  );
}
