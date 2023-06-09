import styles from './Footer.module.css'
import Logo from '../Logo/Logo.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return(
			<footer id="#footer" className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.footerContent}>
					<Logo/>
							<div className={styles.blockMail}>
								<p>Почта для  зв`язку</p>
								<a href="mailto:vankord21@gmail.com">vankord21@gmail.com</a>
							</div>
							<a href='#header' className={styles.blockUp}>
								<FontAwesomeIcon icon={faArrowUp} className={styles.upIcon}/>
							</a>
					</div>
				</div>
			</footer>
	)
}

export default Footer;
