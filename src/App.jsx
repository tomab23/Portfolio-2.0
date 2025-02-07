import { Button } from "flowbite-react";
import RoutesApp from "./Routes/RoutesApp";
import '../src/i18n/i18n';
import ScrollPage from "./helpers/ScrollPage";

function App() {
  return (
    <div className="bg-light-light dark:bg-dark">
      <RoutesApp/>
    </div>
  )
}

export default App
