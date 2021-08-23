

import Karyera from "./components/Karyera";
import Rezyume from "./components/Rezyume";
import Taklif from "./components/Taklif";
import Frontend from "./components/Frontend";
import Main from "./components/Main";
import Email from "./components/Emai";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <div className="App">

        <NavigationBar/>

        <Karyera/>

        <Rezyume/>

        <Taklif/>

        <Frontend/>

        <Main/>

        <Email/>

        <Footer/>
    </div>
  );
}

export default App;
