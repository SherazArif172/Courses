import Header from "../Header/Section1";
import CardSection from "../GitfSection/CardSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import SpirtualSection from "../SpirtualSection/SpirtualSection";
import AdvancedSection from "../AdvancedCourses/AdvancedSection";
import Extensive from "../ExtensiveSection/Extensive";
import MasterSection from "../MasterTraning/MasterSection";
import TextMain from "../TextSection/TextMain";
import FooterMain from "../Footer/FooterMain";

function App() {
  return (
    <div className="w-[100%]">
      <Header />
      <CardSection />
      <CoursesSection />
      <SpirtualSection />
      <AdvancedSection />
      <Extensive />
      <MasterSection />
      <TextMain />
      <FooterMain />
    </div>
  );
}

export default App;
