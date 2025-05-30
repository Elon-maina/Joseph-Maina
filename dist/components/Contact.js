import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { submitrailway } from '@/services/mysql';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Submit form data to MySQL via API
            await submitrailway(formData);
            // Show success message
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
            // Reset the form
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
        catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "There was a problem sending your message. Please try again.",
                variant: "destructive"
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsx("section", { id: "contact", className: "py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Get In Touch" }), _jsx("div", { className: "w-24 h-1 bg-blue-400 mx-auto mb-8" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Let's discuss how we can work together to bring your ideas to life" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "Contact Information" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx(Mail, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Email" }), _jsx("a", { href: "mailto:machuhijoseph734@gmail.com", className: "text-blue-400 hover:text-blue-300 transition-colors", children: "machuhijoseph734@gmail.com" })] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx(Phone, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Phone" }), _jsx("a", { href: "tel:+254746848928", className: "text-blue-400 hover:text-blue-300 transition-colors", children: "+254 746848928" })] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx(MapPin, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Location" }), _jsx("p", { className: "text-gray-300", children: "P.O.Box 239 \u2013 10218 KANGARI" })] })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Personal Interests" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full" }), _jsx("span", { children: "Photography" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full" }), _jsx("span", { children: "Entrepreneurship" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full" }), _jsx("span", { children: "Graphic Design" })] })] })] })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "Send a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300", placeholder: "Your Name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300", placeholder: "your.email@example.com" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium mb-2", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleChange, required: true, className: "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300", placeholder: "Project Discussion" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 5, className: "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300 resize-none", placeholder: "Tell me about your project or how I can help you..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 20 }), "Send Message"] })) })] })] })] })] }) }));
};
export default Contact;
