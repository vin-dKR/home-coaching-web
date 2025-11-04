"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HamburgerButton from '../ui/HamburgerButton'
import CTAButton from '../ui/CTAButton'

const navItems = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Features', href: '#features' },
    { label: 'About us', href: '#about' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize() // Set initial value
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Width calculations based on device and scroll state
    const getHeaderWidth = () => {
        if (isMobile) {
            return isScrolled ? "90%" : "85%"
        } else {
            return isScrolled ? "60%" : "50%"
        }
    }

    const getNavPadding = () => {
        if (isMobile) {
            return isScrolled ? "1rem" : "1.5rem"
        } else {
            return isScrolled ? "1.25rem" : "2.5rem"
        }
    }

    return (
        <motion.header
            className="fixed top-5 md:top-10 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ width: isMobile ? "85%" : "50%" }}
            animate={{
                width: getHeaderWidth(),
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <motion.nav
                className="flex justify-between items-center py-2 px-4 md:px-10 bg-midy/20 rounded-xl backdrop-blur-sm"
                initial={false}
                animate={{
                    paddingLeft: getNavPadding(),
                    paddingRight: getNavPadding(),
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3"
                    initial={false}
                    animate={{
                        scale: isScrolled ? 0.9 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 relative">
                        <Image
                            src="/images/logo.png"
                            alt="magic knotes logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <motion.a
                        href="#home"
                        className="text-xl md:text-2xl font-bold text-gray-900"
                        initial={false}
                        animate={{
                            fontSize: isScrolled ? (isMobile ? "1rem" : "1.25rem") : (isMobile ? "1.125rem" : "1.5rem"),
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        Magic Knotes
                    </motion.a>
                </motion.div>

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
                    <CTAButton className={isScrolled ? "py-2 px-4 text-sm" : ""}>
                        Get Started
                    </CTAButton>
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
            </motion.nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-midy/20 backdrop-blur-sm border-b border-gray-200 py-6 rounded-b-xl overflow-hidden"
                    >
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
                            <CTAButton onClick={() => setIsMenuOpen(false)}>
                                Get Started
                            </CTAButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
