import styles from '../../styles/AboutHome.module.css'

const AboutHomeSkillsAndTools = () => {
	return (
		<div>
			<div className={styles.skillsContainer}>
				<h3 className={styles.skillsAndToolsHeader}>SKILLS</h3>
				<p className={styles.tag}>
					Software development, DevOps, UI/UX design, Prototyping, Visual
					design, Leadership
				</p>
			</div>
			<div className={styles.toolsContainer}>
				<h3 className={styles.skillsAndToolsHeader}>TOOLS</h3>
				<p className={styles.tag}>
					Typescript/Javascript, NodeJS, Express, MongoDB, ReactJS, NextJS,
					noSQL, SQL, C#, .NET, AWS, Java, C, PHP, UX, UI, Redux, Wordpress,
					Codeigniter, HTML, CSS, Adobe Creative Suite, Microservices,
					Event-driven Architecture, Domain Driven Design (DDD)
				</p>
			</div>
		</div>
	)
}

export default AboutHomeSkillsAndTools
