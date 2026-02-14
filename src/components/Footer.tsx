export default function Footer() {
    return (
        <footer className="w-full bg-[#121212] py-12 px-6 border-t border-white/10">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
                <div className="mb-4 md:mb-0">
                    <p className="font-medium text-white">Pixel Webstar</p>
                    <p>© 2026. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
