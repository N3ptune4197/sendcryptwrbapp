import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar"
import SeccionUno from "./componentes/SeccionUno"
import SectionFour from "./componentes/SectionFour";
import SectionThree from "./componentes/SectionThree";
import SectionTwo from "./componentes/SectionTwo";

function App() {

  return (
    <>

      <main className="w-[100%] md:max-w-[1250px] mx-auto bg-[#16171D]" >
        <Navbar />

        <SeccionUno />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />

      </main>

    </>
  );
}
export default App
