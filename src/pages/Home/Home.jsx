import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div className="home-container">

      <div className="carousel--container">
        <Carousel/>
      </div>

      <div className="home-bottom--container">
        <h1>Ici home page</h1>
        <p>bla bla bla !</p>
      </div>

    </div>
  );
}

export default Home;
