import { Helmet } from "react-helmet";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./ContactoPage.module.scss";

function ContactoPage() {
	return (
		<div className={styles.mainContainer}>
			<Helmet>
				<meta name="description" content="Información de contacto de L&R Ingenieros." />
				<title>RL Ingenieros - Contacto</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main>
				<div className={styles.contacto}>
					<Contacto />
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default ContactoPage;
