import styles from "../styles/Intro.module.css"
import LogoTodo from "./LogoTodo"
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';

export default function Intro(){
	const [p1, setP1] = useState({Y: "0", opacity: 1});
	const [p2, setP2] = useState({Y: "0", opacity: 1});
	const [rocket, setRocket] = useState({X: "0", opacity: 1});
	const [intro, setIntro] = useState({Y: "0", opacity: 1});

	const activeRocket = {
		x: rocket.X,
		transition: {
			duration: 2,
			type: "spring",
		}
	}

	const activeIntro = {
		y: intro.Y,
		transition: {
			duration: 2,
			type: "spring",
		}
	}

	const activeParagraph1 = {
		y: p1.Y,
		opacity: p1.opacity,
		transition: {
			duration: 2,
			type: "spring",
		}
	}

	const activeParagraph2 = {
		y: p2.Y,
		opacity: p2.opacity,
		transition: {
			duration: 2,
			type: "spring",
		}
	}

	useEffect(() =>{
		setTimeout(() => {
			setP1({Y: "-10vh", opacity: 0});
		}, 100);
		setTimeout(() => {
			setP2({Y: "-10vh", opacity: 0});
		}, 800);
		setTimeout(() => {
			setRocket({X: "7vh", opacity: 1});
		}, 1200);
		setTimeout(() => {
			setIntro({Y: "-100vh", opacity: 1});
		}, 2200);
	},[])

	return(
		<motion.div className={styles.intro} animate={activeIntro}>
			<motion.div animate={activeRocket}>
				<LogoTodo />
			</motion.div>
			<div className={styles.text}>
				<motion.p className={styles.p1} animate={activeParagraph1}>to</motion.p>
				<motion.p className={styles.p2} animate={activeParagraph2}>do</motion.p>
			</div>
		</motion.div>
	)
}