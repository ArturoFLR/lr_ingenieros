import ProyectCard from "./ProyectCard";
import styles from "./Proyectos.module.scss";

function Proyectos() {
	return (
		<div className={styles.mainContainer}>

			<h1 className={styles.h1Header}>
				Proyectos
			</h1>

			<h2 className={styles.h2Header}>
				Edificación Singular
			</h2>

			<div className={styles.proyectCardContainer}>
				<ProyectCard
					image="img/projects/junta_puente_vallecas/junta-municipal-puente-de-vallecas-02.png"
					title="Nueva Junta Municipal de Puente de Vallecas"
					employer="LKS - Ayuntamiento de Madrid"
				/>

				<ProyectCard
					image="../../public/img/projects/alto_horno_sestao/alto-horno-sestao-01.png"
					title="Restauración del Alto Horno de Sestao"
					employer="ATC Proyecta - SESTAO BERRI SAMP"
				/>
			</div>

			<h2 className={styles.h2Header}>
				Viviendas Sector Público
			</h2>

			<h2 className={styles.h2Header}>
				Viviendas Sector Privado
			</h2>

			<h2 className={styles.h2Header}>
				Viviendas Unifamilares de Lujo
			</h2>

			<h2 className={styles.h2Header}>
				Informes Periciales
			</h2>

			<h2 className={styles.h2Header}>
				Informes Técnicos sobre Riesgos y Optimización de Proyectos:
			</h2>

		</div>
	);
}

export default Proyectos;
