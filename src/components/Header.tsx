import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
	return (
		<header className={styles.mainContainer}>
			<img src="img/logo.jpg" alt="Logo"></img>
			<nav>
				<ul className={styles.ulContainer}>
					<li>
						<Link to="/">
							<button type="button">Inicio</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/quienes_somos">
							<button type="button">Quiénes Somos</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/proyectos">
							<button type="button">Proyectos</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/contacto">
							<button type="button">Contacto</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}


export default Header;
