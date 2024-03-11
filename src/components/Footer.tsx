import { useEffect, useRef } from "react";
import styles from "./Footer.module.scss";

function Footer() {
	const logo = useRef(null);

	const logoObserver = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			(logo.current! as HTMLImageElement).classList.add(styles.logoAnimation);
		}
	}, { root: null, threshold: 0.5 });

	useEffect(() => {
		logoObserver.observe(logo.current! as HTMLImageElement);
	});

	return (
		<footer className={styles.footer}>
			<img className={styles.logo} src="img/logo.jpg" ref={logo}></img>
			<p className={styles.phone_mail}><a href="mailto:rl.rubio.lopez@gmail.com">rl.rubio.lopez@gmail.com</a></p>
		</footer>
	);
}

export default Footer;
