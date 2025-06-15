import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Krish Makadiya | Portfolio",
    description:
        "Portfolio of Krish Makadiya – Backend Developer, Full Stack Enthusiast, and Problem Solver. Explore my projects, skills, and experience in web development",
    keywords: [
        "Krish Makadiya",
        "Portfolio",
        "Backend Developer",
        "Full Stack Developer",
        "Web Developer",
        "JavaScript",
        "React",
        "Node.js",
        "APIs",
        "Firebase",
        "Projects",
        "Resume",
        "ZeldaTech",
        "Software Engineer",
        "Programming",
        "Developer Portfolio",
    ],
    authors: [
        { name: "Krish Makadiya", url: "https://github.com/Krish-Makadiya" },
        {
            name: "Krish Makadiya",
            url: "https://www.linkedin.com/in/krish-makadiya-a9a1332a0/",
        },
    ],
    creator: "Krish Makadiya",
    openGraph: {
        title: "Krish Makadiya | Portfolio",
        description:
            "Explore the portfolio of Krish Makadiya, a backend developer and full stack enthusiast. Discover projects, skills, and professional experience.",
        url: "https://krish-makadiya.vercel.app/",
        siteName: "Krish Makadiya Portfolio",
        locale: "en_US",
        type: "website",
    },
    robots: "index, follow",
    themeColor: "#1e1e1e",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.className}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Krish Makadiya",
                            url: "https://krish-makadiya.vercel.app/",
                            sameAs: [
                                "https://github.com/Krish-Makadiya",
                                "https://www.linkedin.com/in/krish-makadiya-a9a1332a0/",
                            ],
                            jobTitle: "Full-Stack Developer",
                        }),
                    }}
                />
                <link rel="icon" href="/favicon.png" />
            </head>
            <body className={`overflow-x-hidden`} cz-shortcut-listen="true">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
