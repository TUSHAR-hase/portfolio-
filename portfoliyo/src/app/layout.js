import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tushar Thakor - IITRAM Computer Science Student & Developer",
   description:
    " Tushar Thakor a passionate Computer Science student At IITRAM(Institute of Infrastructure, Technology, Research And Management), hackathon winner, and full-stack developer. Experienced in React, Node.js, Flutter, MongoDB, and C++. Creator of innovative projects in women safety, work tracking, cab booking, and kids animation using AI.",
   keywords: [
    "Tushar Thakor",
    "IITRAM",
    "tushar thakor iitram",
    "Institute of Infrastructure, Technology, Research And Management",
    "Computer Science Student",
    "Full-stack Developer",
    "React Developer",
    "Node.js Developer",
    "Flutter Developer",
    "MongoDB",
    "C++",
    "Hackathon Winner",
    "Women Safety Projects",
    "AI Animation",
    "Work Tracking App",
    "Cab Booking App"
  ].join(", "),
  icons: {
    icon: "/latter.png",
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
