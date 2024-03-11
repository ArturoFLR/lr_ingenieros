import styles from "./ProyectCard.module.scss";

type ProyectCardProps = {
	image: string,
	title: string,
	employer: string
}

function ProyectCard({ image, title, employer }: ProyectCardProps) {
	return (
		<div className={styles.mainContainer}>
			<img src={image} alt="" />

			<div className={styles.textContainer}>
				<p className={styles.title}>{title}</p>
				<p className={styles.employer}>{employer}</p>
			</div>
		</div>
	);
}

export default ProyectCard;
