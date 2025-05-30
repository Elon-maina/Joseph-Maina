import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };
    return (_jsx("nav", { className: `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`, children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx("div", { className: `text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`, children: "JM" }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navLinks.map((link) => (_jsx("button", { onClick: () => scrollToSection(link.href), className: `hover:text-blue-600 transition-colors font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`, children: link.label }, link.href))) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: `md:hidden transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`, children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isOpen && (_jsx("div", { className: "md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1", children: navLinks.map((link) => (_jsx("button", { onClick: () => scrollToSection(link.href), className: "block px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors font-medium w-full text-left", children: link.label }, link.href))) }) }))] }) }));
};
export default Navigation;
