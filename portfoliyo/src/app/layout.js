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

// Absolute origin used for canonical + social share URLs.
export const SITE_URL = "https://portfolio-sigma-one-hbcernvfa9.vercel.app";
export const SITE_NAME = "Tushar Thakor — Computer Science & Software Engineer | IITRAM";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tushar Thakor — Computer Science & Software Engineer | IITRAM",
    template: "%s · Tushar Thakor",
  },
  description:
    "Portfolio of Tushar Thakor, a Computer Science & Engineering student at IITRAM building production web platforms, distributed REST APIs, algorithmic solutions, and applied AI/ML systems with Next.js, React, Node.js, C++, and MongoDB.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Tushar Thakor — Computer Science & Software Engineer | IITRAM",
    description:
      "Full-stack web apps, distributed REST APIs, C++ algorithmic solutions, and applied AI/ML models built end to end.",
    url: SITE_URL,
    siteName: "Tushar Thakor",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Tushar Thakor — Computer Science & Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Thakor — Computer Science & Software Engineer | IITRAM",
    description:
      "Full-stack web apps, distributed REST APIs, C++ algorithmic solutions, and applied AI/ML models built end to end.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#060913" },
  ],
};

// Apply default 'dark' theme or saved theme before paint
const themeScript = `try{var t=localStorage.getItem('th-theme')||'dark',d=document.documentElement;d.setAttribute('class',t);d.style.colorScheme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}