import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
    const projects = [
        {
            title: "Quick Delicacies",
            description: "A modern food delivery platform that connects customers with local restaurants. Features real-time order tracking, secure payment processing, and an intuitive user interface for seamless dining experiences.",
            technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
            link: "#",
            github: "#",
            category: "Web Application"
        },
        {
            title: "Egerton Sports Resource Management Club",
            description: "A comprehensive management system for sports club operations including member registration, event scheduling, resource booking, and performance tracking. Streamlines club administration and enhances member engagement.",
            technologies: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript"],
            link: "#",
            github: "#",
            category: "Management System"
        },
        {
            title: "Data Visualization Dashboard",
            description: "An interactive dashboard that transforms complex datasets into clear, actionable insights. Features dynamic charts, real-time data updates, and customizable visualization options for data-driven decision making.",
            technologies: ["Python", "JavaScript", "HTML", "CSS", "Chart.js"],
            link: "#",
            github: "#",
            category: "Data Analytics"
        },
        {
            title: "Personal Blog",
            description: "A responsive blogging platform with modern design and smooth user experience. Features article management, commenting system, search functionality, and responsive design for optimal reading across all devices.",
            technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
            link: "#",
            github: "#",
            category: "Content Platform"
        }
    ];
    return (_jsx("section", { id: "projects", className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-800 mb-6", children: "Featured Projects" }), _jsx("div", { className: "w-24 h-1 bg-blue-600 mx-auto mb-8" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Explore my portfolio of projects that demonstrate my technical skills and problem-solving abilities" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((project, index) => (_jsx("div", { className: "bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200", children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("span", { className: "bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full", children: project.category }), _jsxs("div", { className: "flex gap-3", children: [_jsx("a", { href: project.github, className: "text-gray-600 hover:text-blue-600 transition-colors", children: _jsx(Github, { size: 20 }) }), _jsx("a", { href: project.link, className: "text-gray-600 hover:text-blue-600 transition-colors", children: _jsx(ExternalLink, { size: 20 }) })] })] }), _jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: project.title }), _jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: project.description }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-800 mb-3", children: "Technologies Used:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, techIndex) => (_jsx("span", { className: "bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full", children: tech }, techIndex))) })] }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("a", { href: project.link, className: "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors", children: [_jsx(ExternalLink, { size: 16 }), "View Project"] }), _jsxs("a", { href: project.github, className: "flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors", children: [_jsx(Github, { size: 16 }), "Code"] })] })] }) }, index))) })] }) }));
};
export default Projects;
