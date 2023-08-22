import Frontend from "../assets/programming.png";
import Backend from "../assets/software-development.png";
import OS from "../assets/operational-system.png";
export default function Tools() {
  return (
    <>
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
    </>
  );
}
