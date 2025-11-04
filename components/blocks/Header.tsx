"use client"
import Image from 'next/image'
import { useState } from 'react'
import HamburgerButton from '../ui/HamburgerButton'
import CTAButton from '../ui/CTAButton'

const navItems = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Features', href: '#features' },
    { label: 'About us', href: '#about' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="absolute top-5 md:top-10 left-0 w-full z-50">
            <div className="container-custom">
                <nav className="flex justify-between items-center py-2 px-5 md:px-10 bg-midy/20 rounded-xl backdrop-blur-sm">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/images/logo.png"
                                alt="magic knotes logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <a href="#home" className="text-2xl font-bold text-gray-900">Magic Knotes</a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:bg-white hover:font-bold py-1 px-4 rounded-xl hover:text-gray-900 font-medium transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <CTAButton>Get Started</CTAButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <HamburgerButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2"
                            barColor="bg-gray-900"
                        />
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-midy/20 backdrop-blur-sm border-b border-gray-200 py-6 rounded-b-xl animate-fade-in">
                        <div className="flex flex-col space-y-4 px-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-gray-900 font-medium py-2 text-center hover:bg-gray-50 rounded-lg transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <CTAButton>Get Started</CTAButton>

                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
