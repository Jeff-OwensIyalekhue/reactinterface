import { GiConsoleController } from "react-icons/gi";
import Search from "./components/Search";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <GiConsoleController className="inline-block text-red-400 align-top" />
        Repos
      </h1>
      <Search />
    </div>
  );
}

export default App;
