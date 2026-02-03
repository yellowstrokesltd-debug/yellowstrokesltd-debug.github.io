import { useState } from 'react';
import { Send } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

interface BackProjectsSectionProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    defaultSubject?: string;
}

export function BackProjectsSection({
    title = "Back Our Projects",
    description = "We desire to see teachers in public institutions do better and be better. By coaching public teachers, we would like to equip them with tools that will improve their effectiveness, support their professional growth, boost confidence and motivate them to show up better at work. Back this project by clicking on the button below.",
    buttonLabel = "Back This Project",
    defaultSubject = ""
}: BackProjectsSectionProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: defaultSubject,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

        const mailtoLink = `mailto:hello@yellowstroke.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-[#28708F] backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
            </h2>
            <p className="text-lg text-gray-100 max-w-4xl mx-auto mb-10 leading-relaxed">
                {description}
            </p>

            <Dialog>
                <DialogTrigger asChild>
                    <button
                        className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.7)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] transition-all"
                    >
                        {buttonLabel}
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-[#1a2333] border-gray-700 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center mb-2">Send Us a Message</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white placeholder-gray-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white placeholder-gray-500"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white placeholder-gray-500"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                                placeholder="Tell us more..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all mt-2"
                        >
                            <Send size={18} className="mr-2" />
                            Send Message
                        </button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
