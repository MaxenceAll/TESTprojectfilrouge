import Carouselhome from "../../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <div className="carousel--container">
        <Carouselhome />
      </div>

      <div className="home-bottom--container">
        <h1>Ici home page</h1>
        <p>bla bla bla !</p>
      </div>

    </div>
  );
}

export default Home;
