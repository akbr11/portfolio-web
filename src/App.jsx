import { useState } from "react";
import Akbar from "./assets/akbar.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* <div className={darkMode ? "dark" : ""}> */}
      <main className=" bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between ">
            <h1 className="font-burtons text-xl">makra</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative mb-10 overflow-hidden md:h-96 md:w-96">
              <img src={Akbar} className="image pt-8" />
            </div>
            <h4 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hi 👋, I'm Muhammad Akbar Nugraha
            </h4>
            <h5 className="text-2xl py-2 md:text-3xl">Web Developer</h5>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              dolore nihil sequi voluptates veniam sapiente.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillGithub />
              <AiFillLinkedin />
              <AiFillInstagram />
            </div>
          </div>
        </section>
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
