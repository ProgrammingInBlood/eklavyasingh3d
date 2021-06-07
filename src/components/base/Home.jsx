import "./Home.scss";
import Main from "../Main";
import Header from "../Header";
import MyWorks from "../MyWorks";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="animation">
        <Main />
      </div>
      <AboutMe />
      <MyWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
