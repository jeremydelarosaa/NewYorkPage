import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

function Carousels() {
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img className="d-block w-100 " src={img1} alt="" />
        <Carousel.Caption>
          <h3>NEW YORK</h3>
          <p>La Grande Mela</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={img2} alt="" />

        <Carousel.Caption>
          <h3>Voli per NY a soli 500€</h3>
          <p>Disponibile entro il Giugno 2024</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={img3} alt="" />

        <Carousel.Caption data-bs-theme="light">
          <h3>La città che non dorme mai</h3>
          <p>Prenota subito</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
