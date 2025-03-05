export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <label className="block mb-2">Nombre</label>
          <input type="text" className="w-full border rounded-lg p-2 mb-4" />
  
          <label className="block mb-2">Correo Electrónico</label>
          <input type="email" className="w-full border rounded-lg p-2 mb-4" />
  
          <label className="block mb-2">Mensaje</label>
          <textarea className="w-full border rounded-lg p-2 mb-4" />
  
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
        </form>
      </main>
    );
  }
  