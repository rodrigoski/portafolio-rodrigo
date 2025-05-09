export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-black py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold text-white">
                <span className="text-cyan-400">Port</span>folio
              </a>
            </div>
  
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Mi Portafolio. Todos los derechos reservados.
            </div>
  
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 mr-4">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  