import Akbar from "./assets/akbar.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Code from "./assets/code.png";
import Consulting from "./assets/consulting.png";
import Design from "./assets/design.png";
import "./App.css";

function App() {
  return (
    <>
      <main className="md:px-20 lg:px-40">
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
            <h5 className="text-2xl py-2 md:text-3xl text-white">
              Web Developer
            </h5>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              dolore nihil sequi voluptates veniam sapiente.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
              <a href="">
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
        <div>
          <div>
            <h3 className="text-3xl py-1 text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white flex-1">
              <img src={Design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <img src={Code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <img src={Consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
