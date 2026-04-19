import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import rigo from "../../img/rigo-baby.jpg";
import Footer from "./Footer";


const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container mt-4">
				<Jumbotron />

				<div className="row mt-4">
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card
							image={rigo}
							title="Primera card"
							text="Texto de la primera card."
							buttonText="Ver más"
						/>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card
							image={rigo}
							title="Segunda card"
							text="Texto de la segunda card."
							buttonText="Explorar"
						/>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card
							image={rigo}
							title="Tercera card"
							text="Texto de la tercera card."
							buttonText="Entrar"
						/>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card
							image={rigo}
							title="Cuarta card"
							text="Texto de la cuarta card."
							buttonText="Más info"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;