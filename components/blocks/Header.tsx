"use client"
import { useState } from 'react'

const navItems: NavItem[] = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="container-custom">
                <nav className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-900">
                        <a href="#home">Coach</a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="#contact" className="btn-primary">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col space-y-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="w-6 h-0.5 bg-gray-900"></span>
                        <span className="w-6 h-0.5 bg-gray-900"></span>
                        <span className="w-6 h-0.5 bg-gray-900"></span>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 animate-fade-in">
                        <div className="flex flex-col space-y-4 px-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-gray-900 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-primary text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
