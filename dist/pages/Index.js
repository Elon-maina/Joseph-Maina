import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
const Index = () => {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navigation, {}), _jsx("div", { id: "home", children: _jsx(Hero, {}) }), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
};
export default Index;
