export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Lifefitgoals</h1>
        <nav>
          <a href="/" className="px-4">Inicio</a>
          <a href="/dashboard" className="px-4">Dashboard</a>
          <a href="/contact" className="px-4">Contacto</a>
        </nav>
      </header>
    );
  }
  