import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
function App() {
  return (
    <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container px-4 pt-8 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-500" />
          </button>
        </div>
        <form
          className="flex items-center gap-3 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md"
          action=""
        >
          <span className="inline-block w-5 h-5 border-2 rounded-full"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo"
          />
        </form>
      </header>
      <main className="container px-4 mx-auto mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block w-5 h-5 border-2 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JS course</p>
            <button className="flex">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block w-5 h-5 border-2 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JS course</p>
            <button className="flex">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block w-5 h-5 border-2 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JS course</p>
            <button className="flex">
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between px-4 py-5">
            <span className="text-gray-400">5 ítems left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container px-4 mx-auto mt-8">
        <div className="bg-white mt-8 rounded-md [&>button]:p-4 justify-center flex gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section className="container px-4 mx-auto mt-8">
        <p className="text-center">Drag and drop</p>
      </section>
    </div>
  );
}

export default App;
