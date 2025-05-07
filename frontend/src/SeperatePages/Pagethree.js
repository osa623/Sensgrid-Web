import React from 'react';

const Pagethree = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SensGrid</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a></li>
              <li><a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">About</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-purple-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Page Three</h2>
          <p className="text-xl mb-8">Discover our innovative products and technology</p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">Explore Now</button>
        </div>
      </section>

      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Product 1</h3>
              <p className="text-gray-600">Information about our first product and its specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Product 2</h3>
              <p className="text-gray-600">Information about our second product and its specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Product 3</h3>
              <p className="text-gray-600">Information about our third product and its specifications.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SensGrid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pagethree;
