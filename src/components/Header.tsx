import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
	const url = useLocation();
	console.log(url.pathname);

	return (
		<header className={styles.mainContainer}>

			<nav className={styles.navContainer}>
				<img src="img/logo.jpg" alt="Logo"></img>

				<ul className={styles.ulContainer}>
					<li>
						<Link to="/">
							<button type="button" className={url.pathname === "/" ? styles.selectedRoute : ""}>
								Inicio
							</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/quienes_somos">
							<button type="button" className={url.pathname === "/quienes_somos" ? styles.selectedRoute : ""} >
								Quiénes Somos
							</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/proyectos">
							<button type="button" className={url.pathname === "/proyectos" ? styles.selectedRoute : ""} >
								Proyectos
							</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/contacto">
							<button type="button" className={url.pathname === "/contacto" ? styles.selectedRoute : ""} >
								Contacto
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}


export default Header;
