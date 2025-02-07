import React, { FC } from 'react';
import { CardProps } from '@/components/dummies/Card/types';
import styles from './index.module.scss';

const Card: FC<CardProps> = ({ body, footer }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__body}>{body}</div>
			<footer className={styles.card__footer}>{footer}</footer>
		</div>
	);
};

export default Card;
