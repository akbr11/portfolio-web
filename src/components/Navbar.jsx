import Akbar from "../assets/akbar.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Navbar() {
  return (
    <section className="min-h-screen">
      <nav className="py-5 mb-5 flex justify-between text-white">
        <h1 className="font-burtons text-xl">makra</h1>
        <ul className="flex items-center">
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
      <div className="text-center p-5 py-10">
        <h4 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Muhammad Akbar Nugraha
        </h4>
        <h5 className="text-2xl py-2 md:text-3xl text-white">Web Developer</h5>
        <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
          I'm ready to collaborate and to turn Ideas into Reality.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
          <a href="https://github.com/akbr11">
            <AiFillGithub />
          </a>
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 mt-8 rounded-full relative mb-10 overflow-hidden md:h-96 md:w-96">
          <img src={Akbar} className="image pt-8" />
        </div>
      </div>
    </section>
  );
}
