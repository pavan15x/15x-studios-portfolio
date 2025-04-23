import React from "react";
import Gallery from "./Gallery";
import logo from "../public/logo.png";

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img src={logo} alt="15x Studios" className="h-10 w-10 rounded-full animate-pulse" />
          <h1 className="text-xl font-semibold">15x Studios</h1>
        </div>
      </header>

      {/* Gallery */}
      <main className="py-6 px-4">
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="bg-[#111] text-gray-300 p-6 text-center mt-10 border-t border-gray-700">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full mb-2" />
          <p className="font-semibold text-lg">Pavan Kumar Ragala</p>
          <p>Publicity Designer | Graphic & Poster Editor | Web Designer | Media Editor</p>
          <p>Email: <a className="text-white underline" href="mailto:ragalapavankumar02@gmail.com">ragalapavankumar02@gmail.com</a></p>
          <p>Phone: <a className="text-white" href="tel:+918341636814">8341636814</a></p>
          <p>
            Instagram:{" "}
            <a
              className="text-blue-400 underline"
              href="https://www.instagram.com/15x.studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              @15x.studios
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

