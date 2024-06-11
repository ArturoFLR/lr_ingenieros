import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

function Header() {
	const ulElement = useRef<HTMLUListElement>(null);
	const url = useLocation();

	function changeMobileNavVisibility() {
		if (ulElement.current?.classList.contains(styles.mobileNavOpen)) {
			ulElement.current.classList.remove(styles.mobileNavOpen);
			ulElement.current.classList.add(styles.mobileNavClose);
		} else {
			ulElement.current?.classList.remove(styles.mobileNavClose);
			ulElement.current?.classList.add(styles.mobileNavOpen);
		}
	}

	return (
		<header className={styles.mainContainer}>
			<nav className={styles.navContainer}>
				<img src="img/logo.jpg" alt="Logo"></img>

				<div onClick={changeMobileNavVisibility} className={styles.mobileMenu}>
					<MenuIcon fontSize="inherit" color="inherit" />
				</div>

				<ul ref={ulElement} className={styles.ulContainer}>
					<div className={styles.decorator}></div>
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
							<button type="button" className={url.pathname === "/quienes_somos" ? styles.selectedRoute : ""}>
								Quiénes Somos
							</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/proyectos">
							<button type="button" className={url.pathname === "/proyectos" ? styles.selectedRoute : ""}>
								Proyectos
							</button>
						</Link>
					</li>

					<span></span>

					<li>
						<Link to="/contacto">
							<button type="button" className={url.pathname === "/contacto" ? styles.selectedRoute : ""}>
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
