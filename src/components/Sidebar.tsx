import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from '@phosphor-icons/react/dist/ssr';

export function Sidebar(){
	return(
		<aside className={styles.sidebar}>
			<img 
				className={styles.cover} 
				src="https://media.licdn.com/dms/image/v2/D4D16AQGPmzPZ0Hiilw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1708143490435?e=1746057600&v=beta&t=vuUdyfUhnrBEXWkmHnf2NrCNnqpaH8bIMEh4qwT7DVI" />
			<div className={styles.profile}>
				<Avatar src="https://github.com/VyniHenrique.png"/>
				<strong> Vynicius Henrique</strong>
				<span> Web developer</span>

			</div>

			<footer>
				<a href="#">
				<PencilSimpleLine size={20}/>
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);

}