import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '@/constants/footerData';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { brand, quickLinks, forStudents, forTutors, socialLinks, contactInfo, legalLinks } = footerData;

    return (
        <footer className="relative bg-gradient-to-b from-midy to-transparent border-t border-amber-200 rounded-t-[3rem] border border-black/10 overflow-hidden w-full">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    {brand.name}
                                </h3>
                                <p className="text-gray-600 text-sm">{brand.tagline}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed font-atki">
                            {brand.description}
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <span className="text-sm">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-amber-700">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center space-x-2 group"
                                    >
                                        <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Students */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-amber-700">For Students</h4>
                        <ul className="space-y-3">
                            {forStudents.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center space-x-2 group"
                                    >
                                        <span className="text-amber-500">{link.icon}</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Tutors */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-amber-700">For Tutors</h4>
                        <ul className="space-y-3">
                            {forTutors.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center space-x-2 group"
                                    >
                                        <span className="text-amber-500">{link.icon}</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-amber-200 w-full">
                    {contactInfo.map((contact, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm">{contact.icon}</span>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">{contact.label}</p>
                                {contact.href ? (
                                    <a
                                        href={contact.href}
                                        className="text-amber-600 hover:text-amber-700 transition-colors font-medium"
                                    >
                                        {contact.value}
                                    </a>
                                ) : (
                                    <p className="text-amber-600 font-medium">{contact.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-amber-200 bg-amber-50/50 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
                        <div className="text-gray-600 text-sm">
                            © {currentYear} {brand.name}. All rights reserved.
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-amber-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-amber-300/40 rounded-full"></div>
            <div className="absolute top-1/4 right-20 w-4 h-4 bg-amber-400/30 rounded-full"></div>
        </footer>
    );
};

export default Footer;
