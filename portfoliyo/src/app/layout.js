import { Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

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
    "Cab Booking System",
  ].join(", "),
  openGraph: {
    title: "Tushar Thakor - IITRAM CS Student & Developer",
    description: "Portfolio of Tushar Thakor from IITRAM, Full-Stack Developer and Hackathon Winner",
    url: "https://portfolio-sigma-one-hbcernvfa9.vercel.app",
    siteName: "Tushar Thakor Portfolio",
    images: [
      {
        url: "https://portfolio-sigma-one-hbcernvfa9.vercel.app/_next/static/media/tushrphoto.5808b86a.jpg",
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
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
