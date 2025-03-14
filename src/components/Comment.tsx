import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

	const [likeCount, setLikeCount] = useState(0);



	function handleDeleteComment() {
		onDeleteComment(content);

	}
		
	function handlewLikeComment (){
		setLikeCount((state) => {
			return state + 1
		});
	}
	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/VyniHenrique.png" />
			
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Vynicius Henrique</strong>
							<time title='26 de janeiro às 20h' dateTime="26/02/2025 20:51">Cerca de 1h atrás</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentario'> <Trash size={24} /> </button>
					</header>

					<p>{content}</p>
				</div>
			
			<footer>
				<button onClick={handlewLikeComment}>
					<ThumbsUp />
					Aplaudir <span>{likeCount}</span>
				</button>
			</footer>
			</div>
		</div>
	)
}