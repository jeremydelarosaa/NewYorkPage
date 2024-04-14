import React from "react";
import Navbars from "../components/Navbars";
import Carousels from "../components/Carouselss";
import Cards from "../components/Cards";
import CentralPark from "../img/central-park.jpg";
import Esb from "../img/esb.jpg";
import Statue from "../img/statua.jpg";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <header>
        <Navbars />
        <Carousels />
      </header>
      <main className="main-container">
        <Cards
          photo={CentralPark}
          title="Central Park"
          info="Central Park is the largest public park in the borough of Manhattan, New York. It is located in Uptown in the center between the two residential ..."
          href="CentralPark.html"
        />
        <Cards
          photo={Esb}
          title="Empire State Building"
          info="The Empire State Building is an art deco style skyscraper in New York City, located in the Midtown neighborhood of Manhattan, on the corner..."
          href="EmpireStateBuilding.html"
        />{" "}
        <Cards
          photo={Statue}
          title="Statue of Liberty"
          info="The Statue of Liberty, whose full name is Liberty Enlightening the World, inaugurated in 18 important and well-known monuments in the world...."
          href="StatueOfLiberty.html"
        />
        <Timeline />
      </main>

      <footer id="main-footer">
        <section id="footer-top">
          <Footer title="Link" arg1="Home" arg2="Chi siamo" arg3="Contatti" />

          <Footer
            title="Account"
            arg1="Login"
            arg2="Termini e condizione"
            arg3="Privacy Policy"
          />
        </section>
        <section id="footer-bottom">
          &copy;Copyright e informazioni legali
        </section>
      </footer>
    </div>
  );
}

export default Home;
