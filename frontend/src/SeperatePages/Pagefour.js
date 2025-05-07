import React from 'react';

const Pagefour = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SensGrid</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a></li>
              <li><a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-red-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Page Four</h2>
          <p className="text-xl mb-8">Contact us and stay connected with our team</p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition duration-300">Get in Touch</button>
        </div>
      </section>

      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Contact Us</h3>
              <p className="mb-2 text-gray-700"><span className="font-medium">Email:</span> info@sensgrid.com</p>
              <p className="mb-2 text-gray-700"><span className="font-medium">Phone:</span> (123) 456-7890</p>
              <p className="text-gray-700"><span className="font-medium">Address:</span> 123 SensGrid Ave, Technology Park</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent h-32"></textarea>
                </div>
                <button type="submit" className="bg-red-600 text-white font-medium py-2 px-6 rounded-md hover:bg-red-700 transition duration-300">Submit</button>
              </form>
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

export default Pagefour;
