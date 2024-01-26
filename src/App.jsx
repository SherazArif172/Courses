import Section1 from "./Components/Section1/Section1";
import CardSection from "./Components/CardSection/CardSection";
import CoursesSection from "./Components/CoursesSection/CoursesSection";
import SpirtualSection from "./Components/SpirtualSection/SpirtualSection";
import AdvancedSection from "./Components/AdvancedCourses/AdvancedSection";
import Extensive from "./Components/ExtensiveSection/images/Extensive";
import MasterSection from "./Components/MasterTraning/MasterSection";
import TextMain from "./Components/TextSection/TextMain";
import FooterMain from "./Components/Footer/FooterMain";

function App() {
  return (
    <div>
      <Section1 />
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
