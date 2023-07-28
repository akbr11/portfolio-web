import Akbar from "./assets/akbar.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Frontend from "./assets/programming.png";
import Backend from "./assets/software-development.png";
import OS from "./assets/operational-system.png";
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

        <div>
          <h3 className="text-3xl py-1 text-white">About Me</h3>
          <p className="text-md py-2 leading-8 text-gray-200">
            Hi, I'm{" "}
            <span className="text-teal-500">Muhammad Akbar Nugraha</span>. I'm
            often called Akbar or Abay. I'm the third child of 4 siblings. I'm
            currently focus on developing myself to become a Website Developer.
            The language and tools that i often use are Codeigniter 4 in the
            application development process. Currently what I'm learning is
            React JS and Tailwind on the Frontend.
            <br />
            <br />
            I'm currently completing undergraduate studies at{" "}
            <a href="https://uniku.ac.id/" className="text-teal-500">
              Kuningan University
            </a>
            . but I also work at{" "}
            <a href="https://gurungaji.com/" className="text-teal-500">
              PT. Bakti Indonesia Mengaji
            </a>{" "}
            as a Junior Web Developer.
          </p>
          <br />
        </div>

        <h3 className="text-3xl py-1 text-white">Language & Tools</h3>
        <div className="lg:flex gap-10">
          <div className="shadow-lg p-8 rounded-xl my-10 bg-slate-100 flex-1">
            <div className="justify-center items-center text-center flex w-full ">
              <img src={Frontend} width={200} height={200} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Frontend Development
            </h3>
            <h4 className="py-4 text-teal-600">Language used</h4>
            <p className="text-gray-800 py-1">HTML</p>
            <p className="text-gray-800 py-1">Bootstrap</p>
            <p className="text-gray-800 py-1">Tailwind</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">React JS</p>
          </div>
          <div className="shadow-lg p-8 rounded-xl my-10 bg-slate-100 flex-1">
            <div className="justify-center items-center text-center flex w-full ">
              <img src={Backend} width={200} height={200} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Backend Development
            </h3>
            <h4 className="py-4 text-teal-600">Language used</h4>
            <p className="text-gray-800 py-1">PHP</p>
            <p className="text-gray-800 py-1">CodeIgniter</p>
          </div>
          <div className="shadow-lg p-8 rounded-xl my-10 bg-slate-100 flex-1">
            <div className="justify-center items-center text-center flex w-full ">
              <img src={OS} width={200} height={200} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Operation System</h3>
            <h4 className="py-4 text-teal-600">OS used</h4>
            <p className="text-gray-800 py-1">Linux (Ubuntu)</p>
          </div>
        </div>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-white">Portfolio</h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
