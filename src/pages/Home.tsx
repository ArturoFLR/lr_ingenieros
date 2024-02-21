import styles from "./Home.module.scss";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import { proyectsMainImgs } from "../components/SlideshowProps";

function Home() {
	return (
		<>
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
