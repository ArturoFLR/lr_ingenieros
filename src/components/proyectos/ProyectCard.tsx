import styles from "./ProyectCard.module.scss";

type ProyectCardProps = {
	images: string[],
	title: string,
	employer: string,
	handleClick: (images: string[], title: string, employer: string) => void
}

function ProyectCard({ images, title, employer, handleClick }: ProyectCardProps) {

	return (
		<div className={styles.mainContainer} onClick={() => handleClick(images, title, employer)}>

			<img src={images[0]} alt="" />

			<div className={styles.proyectInfoContainer}>
				<p className={styles.title}>{title}</p>
				<p className={styles.employer}>{employer}</p>
			</div>

		</div>
	);
}

export default ProyectCard;
