import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tushar Thakor",
   description:
    " Tushar Thakor a passionate Computer Science student IITRAM, hackathon winner, and full-stack developer. Experienced in React, Node.js, Flutter, MongoDB, and C++. Creator of innovative projects in women safety, work tracking, cab booking, and kids animation using AI.",
  icons: {
    icon: "/tusharphoto.jpg", // Make sure favicon.ico exists in the public folder
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
