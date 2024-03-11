import { Helmet } from "react-helmet";
import styles from "./ProyectosPage.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Proyectos from "../components/Proyectos";

function ProyectosPage() {
	return (
		<>
			<Helmet>
				<title>RL Ingenieros - Quienes Somos</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main className={styles.mainLabel}>
				<Proyectos />
			</main>

			<Footer />
		</>
	);
}

export default ProyectosPage;
