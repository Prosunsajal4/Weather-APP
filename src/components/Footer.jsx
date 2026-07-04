export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-white/10 pt-10 pb-6 text-white/70 text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white">Prosun Mukherjee</h3>
          <p className="text-white/50">Software Developer</p>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <a
              href="https://github.com/prosunsajal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Github
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://linkedin.com/in/prosunsajal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Linkedin
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://prosunsajal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Portfolio
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href="mailto:prosunsajal123@gmail.com"
              className="hover:text-white transition-colors"
            >
              prosunsajal123@gmail.com
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a href="tel:+8801911572117" className="hover:text-white transition-colors">
              +8801911572117
            </a>
          </div>
          <p className="text-white/40 mt-2">Khulna, Bangladesh</p>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-white/30 mb-3">
            <span>React</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
            <span>OpenWeatherMap API</span>
          </div>
          <p className="text-white/20 text-xs">
            Built by Prosun Mukherjee &middot; Weather data from OpenWeatherMap
          </p>
        </div>
      </div>
    </footer>
  );
}
