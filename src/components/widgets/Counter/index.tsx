'use client';
import React from 'react';
import Card from '@/components/dummies/Card';
import { Col, Row, Typography } from 'antd';
import { counterStore } from '@/stores/counterStore';
import Button from '@/components/ui/Button';

const Counter = () => {
	const store = counterStore();
	return (
		<div>
			<Card
				footer={
					<Row>
						<Col>
							<Button onClick={() => store.dec()}>Dec</Button>
						</Col>
						<Col>
							<Button onClick={() => store.inc()}>Inc</Button>
						</Col>
					</Row>
				}
				body={<Typography.Title>{store.count}</Typography.Title>}
			/>
		</div>
	);
};

export default Counter;
