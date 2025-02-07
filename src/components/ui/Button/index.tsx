import React, { FC, HTMLAttributes } from 'react';

const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
	return <button {...props}></button>;
};

export default Button;
