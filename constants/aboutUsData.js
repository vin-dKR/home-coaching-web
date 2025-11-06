export interface AboutUsData {
    header: {
        title: string;
        accentColor: string;
    };
    brand: {
        name: string;
        description: string;
    };
    beliefs: string[];
    vision: {
        title: string;
        description: string;
        icon: React.ReactNode;
    };
    values: {
        title: string;
        desc: string;
        icon: React.ReactNode;
    }[];
}

export interface ImageConfig {
    ribbon: {
        src: string;
        alt: string;
        className: string;
        quality: number;
        priority: boolean;
    };
    students: {
        src: string;
        alt: string;
        className: string;
        quality: number;
        priority: boolean;
    };
}


export const aboutUsData: AboutUsData = {
    header: {
        title: "Who We Are",
        accentColor: "bg-amber-500",
    },
    brand: {
        name: "Magic Knotes",
        description: "is a smart matchmaking platform that connects students and tutors for home coaching within the same locality."
    },
    beliefs: [
        "We believe learning works best when it's personal, nearby, and trust-based.",
        "Our mission is to make education more accessible by helping learners and teachers find each other quickly — without extra hassle."
    ],
    vision: {
        title: "Our Vision",
        description: "To build India's most trusted network for local home tutoring, empowering teachers and students to grow together.",
        icon: (
            <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        )
    },
    values: [
        {
            title: 'Personal',
            desc: 'Tailored learning experiences for every student',
            icon: <div className="w-6 h-6 bg-amber-500 rounded-full" />
        },
        {
            title: 'Nearby',
            desc: 'Connect with tutors in your local community',
            icon: <div className="w-6 h-6 bg-amber-500 rounded-full" />
        },
        {
            title: 'Trust-Based',
            desc: 'Verified profiles and transparent reviews',
            icon: <div className="w-6 h-6 bg-amber-500 rounded-full" />
        },
    ]
};

export const imageConfig: ImageConfig = {
    ribbon: {
        src: "/images/ribbon.png",
        alt: "Decorative ribbon",
        className: "absolute top-70 h-[100vh] w-[120vw] opacity-100",
        quality: 100,
        priority: true,
    },
    students: {
        src: "/images/students.png",
        alt: "students images",
        className: "object-cover",
        quality: 100,
        priority: true,
    }
};
