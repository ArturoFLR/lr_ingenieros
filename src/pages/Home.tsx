import styles from "./Home.module.scss";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { proyectsMainImgs } from "../data/SlideshowMainImgs";

function Home() {
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="L&R Ingenieros ofrece las mejores soluciones a tus proyectos de instalaciones en edificiación."
				/>
				<title>RL Ingenieros - Inicio</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main className={styles.mainLabel}>
				<div className={styles.slideshow}>
					<Slideshow images={proyectsMainImgs} />
				</div>
				<div className={styles.presentation}>
					<Presentation />
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Home;
