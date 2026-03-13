// Portfolio data - same as Next.js project
const mainData = {
    websiteTitle: 'Mateusz Niznik - Senior iOS Developer & Project Manager',
    description: 'Senior iOS Developer & Project Manager with 8+ years building native mobile apps. Swift, Objective-C, UX/UI, map-based apps, and scalable backend integrations.',
    keywords: 'iOS developer, Swift, mobile app developer, project manager, Mateusz Niznik',
};

const headerData = {
    logo: 'images/niznik.png',
};

const heroData = {
    mainData: {
        name: "Mateusz Niznik",
    }
};

const aboutData = {
    mainData: {
        heroAvatar: "images/mn1.jpeg",
        biography: "Accomplished IT professional with 8+ years in mobile and software development, specializing in native iOS applications using Swift and Objective-C. Combines hands-on engineering with strong product and leadership experience. Delivered 30+ production apps from concept to App Store release—marketplace, retail, wellbeing, fitness, map-based tools, and AI-powered solutions.",
        projectsDone: "30+",
        yearsOfExperience: "8+",
        worldwideClients: "12",
    },
    skills: [
        { name: 'iOS Development' },
        { name: 'Project Management' },
        { name: 'Swift & Objective-C' },
        { name: 'UX/UI & MapKit' },
    ],
    connect: [
        { url: 'https://www.linkedin.com/in/mateusz-niznik/', bootstrapIcon: 'bi bi-linkedin' },
        { url: 'https://github.com/mateuszniznik8', bootstrapIcon: 'bi bi-github' },
        { url: 'https://medium.com/@mateusz.niznik', bootstrapIcon: 'bi bi-medium' },
    ]
};

const servicesData = {
    mainData: {
        title: "Services",
        title2: "What I Do",
        title2Span: "Do",
    },
    services: [
        { number: '01', bootstrapIcon: 'bi bi-phone', title: 'iOS Development', description: 'Native iOS apps with Swift and Objective-C—map-based tools, QR/barcode scanning, video features, and scalable backend integrations. MVP to production delivery with modular architecture and App Store compliance.' },
        { number: '02', bootstrapIcon: 'bi bi-kanban', title: 'Project Management', description: 'Lead mobile product initiatives from requirements to release. Coordinate API integration, UX/UI workflows, backend-mobile synchronization, and Agile delivery cycles.' },
        { number: '03', bootstrapIcon: 'bi bi-diagram-3', title: 'Technical Leadership', description: 'CTO and founder experience overseeing iOS builds, mobile UX implementation, App Store deployments, and release cycles.' },
    ]
};

const clientsData = {
    clients: [
        { url: 'https://taycor.com/', logo: 'images/taycor.png' },
        { url: 'https://www.zippia.com/', logo: 'images/zippia.png' },
        { url: 'https://www.sgh.waw.pl/en', logo: 'images/sgh.png' },
        { url: 'https://ue.poznan.pl/en/university/', logo: 'images/uep.png' },
        { url: 'https://www.buc.edu/', logo: 'images/bethesda.png' },
        { url: 'https://xberry.tech/', logo: 'images/xberry.png' },
    ]
};

const portfolioData = {
    mainData: {
        title: "Selected Projects",
        title2: "iOS & Mobile",
        title2Span: "Works",
        description: "Marketplace apps, retail, wellbeing, fitness, games, and client solutions—from concept to App Store"
    },
    projects: [
        {
            title: 'SentiKits - Digital Wellbeing',
            slug: 'sentikits',
            description: 'Native iOS digital wellbeing platform with AI-assisted reflection modules, intelligent journaling, and personalized emotional support. Built with Swift and UIKit for production-grade performance.',
            services: [{ name: 'iOS' }, { name: 'Swift' }, { name: 'AI' }, { name: 'Wellbeing' }],
            client: 'Client',
            projectLink: null,
            duration: 'Ongoing',
            content: '<p>Led design and implementation of AI-enabled learning and reflection features. Delivered structured reflection modules, intelligent journaling concepts, and digital learning frameworks. Tech: Swift, UIKit, Core Data, REST APIs, AI/ML integration, MVVM.</p>',
            mainImage: 'images/sentikits.png',
            mainImageWide: 'images/sentikits.png',
            images: [{ image: 'images/sentikits-1.png' }, { image: 'images/sentikits-2.png' }, { image: 'images/sentikits-3.png' }],
            categories: [{ name: 'iOS' }, { name: 'AI' }, { name: 'Wellbeing' }],
        },
        {
            title: 'Gabi - Pastry Bakery App',
            slug: 'gabi',
            description: 'Native iOS app for Las Vegas pastry bakery. Customer loyalty and rewards system, mobile ordering, and repeat-purchase incentives. Built with Swift and UIKit.',
            services: [{ name: 'iOS' }, { name: 'Swift' }, { name: 'Retail' }, { name: 'Loyalty' }],
            client: 'Gabi Bakery, Las Vegas',
            projectLink: null,
            duration: 'Client Project',
            content: '<p>Developed native iOS app with loyalty/rewards program, mobile ordering, and repeat-purchase incentives. Tech: Swift, UIKit, Core Data, REST APIs, MVVM.</p>',
<<<<<<< HEAD
            mainImage: 'images/gabi.png',
            mainImageWide: 'images/gabi.png',
            images: [{ image: 'images/gabi-1.png' }, { image: 'images/gabi-2.png' }, { image: 'images/gabi-3.png' }, { image: 'images/gabi-4.png' }],
=======
            mainImage: 'images/Gabi.png',
            mainImageWide: 'images/Gabi.png',
            images: [{ image: 'images/Gabi-1.png' }, { image: 'images/Gabi-2.png' }, { image: 'images/Gabi-3.png' }, { image: 'images/Gabi-4.png' }],
>>>>>>> 2e4177f (image error fixed)
            categories: [{ name: 'iOS' }, { name: 'Retail' }, { name: 'Loyalty' }],
        },
        {
            title: 'Legitness - Resale Authentication',
            slug: 'legitness',
            description: 'Native iOS marketplace for premium second-hand clothing. Community and platform authentication to increase transparency and trust in the resale market.',
            services: [{ name: 'iOS' }, { name: 'Swift' }, { name: 'Marketplace' }, { name: 'Authentication' }],
            client: 'Concept / Startup',
            projectLink: null,
            duration: 'Concept & Development',
            content: '<p>Peer-to-peer marketplace with dual-layer authentication (community + platform). Tech: Swift, UIKit, Core Data, REST APIs, MVVM.</p>',
<<<<<<< HEAD
            mainImage: 'images/legitness.png',
            mainImageWide: 'images/legitness.png',
            images: [{ image: 'images/legitness-1.png' }, { image: 'images/legitness-2.png' }, { image: 'images/legitness-3.png' }, { image: 'images/legitness-4.png' }],
=======
            mainImage: 'images/Legitness.png',
            mainImageWide: 'images/Legitness.png',
            images: [{ image: 'images/Legitness-1.png' }, { image: 'images/Legitness-2.png' }, { image: 'images/Legitness-3.png' }, { image: 'images/Legitness-4.png' }],
>>>>>>> 2e4177f (image error fixed)
            categories: [{ name: 'iOS' }, { name: 'Marketplace' }, { name: 'Authentication' }],
        },
        {
            title: 'STREETVERS - Roguelike',
            slug: 'second',
            description: 'STREETVERS is a gritty, fast-paced roguelike shooter set in the streets of Los Angeles.',
            services: [{ name: 'Unity' }, { name: 'Game Development' }],
            client: 'Myself',
            projectLink: { title: 'streetvers.com', url: 'https://streetvers.com' },
            duration: '24 months',
            content: '<p>Start from Long Beach and clear turf district by district. Each area throws increasingly difficult enemy waves at the player.</p>',
            mainImage: 'images/Streetverse.png',
            mainImageWide: 'images/Streetverse.png',
            images: [{ image: 'images/Streetverse-1.png' }, { image: 'images/Streetverse-2.png' }, { image: 'images/Streetverse-3.png' }, { image: 'images/Streetverse-4.png' }],
            categories: [{ name: 'Unity Game' }, { name: 'Roguelike Shooter' }, { name: 'Urban Combat' }],
        },
    ]
};

const awardsData = {
    mainData: {
        title: "Achievements",
        title2: "Awa",
        title2Span: "rds",
    },
    awards: [
        { title: 'MBA (GPA 3.91)', date: 'Bethesda University, 2025', description: 'Graduate degree combining business strategy with technology leadership.' },
        { title: 'Adjunct Professor', date: 'Bethesda University, 2024–Present', description: 'Teaching mobile & web development, iOS basics with Swift, and responsible AI in education.' },
        { title: '30+ Production iOS Apps', date: '2021–2025', description: 'Designed and delivered apps across retail, marketplace, wellbeing, fitness, and client solutions.' },
        { title: 'IT Project Manager', date: 'Taycor Financial, 2022–2023', description: 'Led mobile UI/UX workflows and API integration for financial applications.' },
    ]
};

const testimonialData = {
    testimonial: [
        { name: 'Alexander Warren', avatar: 'images/testimonial-avatar.jpg', jobTitle: 'CTO - Company', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { name: 'Alexander Warren', avatar: 'images/testimonial-avatar.jpg', jobTitle: 'CTO - Company', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { name: 'Alexander Warren', avatar: 'images/testimonial-avatar.jpg', jobTitle: 'CTO - Company', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    ]
};

const blogData = {
    mainData: {
        title: "Journal",
        title2: "Blog",
        title2Span: "Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    posts: [
        { title: 'Blog Post Title', slug: 'blog-post-title', description: 'Lorem ipsum dolor sit amet.', category: 'Category', date: 'Oct 8', postedBy: 'Admin', content: '<p>Lorem ipsum dolor sit amet.</p>', mainImage: 'images/blog-img.jpg', mainImageWide: 'images/blog-img-wide.jpg', images: [{ image: 'images/blog-img.jpg' }], tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }] },
        { title: 'Blog Post Title', slug: 'blog-post-title-1', description: 'Lorem ipsum dolor sit amet.', category: 'Category', date: 'Oct 8', postedBy: 'Admin', content: '<p>Lorem ipsum dolor sit amet.</p>', mainImage: 'images/blog-img.jpg', mainImageWide: 'images/blog-img-wide.jpg', images: [{ image: 'images/blog-img.jpg' }], tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }] },
        { title: 'Blog Post Title', slug: 'blog-post-title-2', description: 'Lorem ipsum dolor sit amet.', category: 'Category', date: 'Oct 8', postedBy: 'Admin', content: '<p>Lorem ipsum dolor sit amet.</p>', mainImage: 'images/blog-img.jpg', mainImageWide: 'images/blog-img-wide.jpg', images: [{ image: 'images/blog-img.jpg' }], tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }] },
    ]
};

const contactData = {
    mainData: {
        phone: "+1 (909) 901-3141",
        email: "m.niznik.tech.mba@gmail.com",
    }
};

const footerData = {
    name: 'Mateusz Niznik',
    copyWriteText: 'All Rights Reserved.',
};

const mapData = {
    mainData: {
        lat: -3.745,
        lng: -38.523,
    },
};
