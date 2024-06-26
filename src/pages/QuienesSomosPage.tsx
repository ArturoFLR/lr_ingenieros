import Footer from "../components/Footer";
import Header from "../components/Header";
import QuienesSomos from "../components/QuienesSomos";
import styles from "./QuienesSomosPage.module.scss";
import { Helmet } from "react-helmet";

function QuienesSomosPage() {
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="L&R Ingenieros es un equipo de profesionales freelance, dedicados al desarrollo de proyectos y estudios en el ámbito de las instalaciones en edificación desde hace más de 20 años."
				/>
				<title>RL Ingenieros - Quienes Somos</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main className={styles.mainLabel}>
				<QuienesSomos />
			</main>

			<Footer />
		</>
	);
}

export default QuienesSomosPage;
