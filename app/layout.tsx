import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'

const urbanist = Urbanist({
    subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-instrument-serif',
})


export const metadata: Metadata = {
    title: "Magic Knotes - Find Your Perfect Tutor",
    description: "Magic Knotes connects students with qualified tutors in their local area. Find verified tutors, access study resources, and transform your learning journey.",
    keywords: "tutors, home coaching, students, education, learning, local tutors, academic help, study resources",
    authors: [{ name: "Magic Knotes" }],
    creator: "Magic Knotes",
    publisher: "Magic Knotes",
    openGraph: {
        title: "Magic Knotes - Smart Tutor Matching Platform",
        description: "Connect with verified tutors in your locality for personalized home coaching. Making quality education accessible to everyone.",
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 1200,
                alt: "Magic Knotes - Tutor Student Matching Platform",
            },
        ],
        type: "website",
        locale: "en_US",
        siteName: "Magic Knotes",
        url: "https://magicknotes.in",
    },
    twitter: {
        card: "summary_large_image",
        title: "Magic Knotes - Find Local Tutors",
        description: "Smart matchmaking platform connecting students and tutors for home coaching within the same locality.",
        images: ["/images/logo.png"],
        creator: "@magicknotes",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "https://magicknotes.in",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${urbanist.className} ${instrumentSerif.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
