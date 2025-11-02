export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Coach</h3>
                        <p className="text-gray-400 max-w-md">
                            Helping individuals unlock their potential and achieve meaningful personal and professional growth through personalized coaching.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="flex flex-col space-y-2 text-gray-400">
                            <p>coach@example.com</p>
                            <p>+1 (234) 567-890</p>
                            <p>Mon-Fri: 9AM-6PM</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Coach. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
