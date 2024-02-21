import { useEffect, useRef } from "react";
import styles from "./Footer.module.scss";

function Footer() {
	const logo = useRef(null);

	const logoObserver = new IntersectionObserver( (entries) => {
		if (entries[0].isIntersecting) {
			logo.current.classList.add(styles.logoAnimation);
		}else {
			logo.current.classList.remove(styles.logoAnimation);
		}
	}, {root: null, threshold: 0.5});

	useEffect( () => {
		logoObserver.observe(logo.current);
	});

	return (
		<footer className={styles.footer}>
			<img className={styles.logo} src="img/logo.jpg" ref={logo}></img>
			<p className={styles.phone_mail}>Tel: 914755004 - 619507056 | <a href="mailto:info@l&r-ingenieros.com">info@l&r-ingenieros.com</a></p>
		</footer>
	);
}

export default Footer;
