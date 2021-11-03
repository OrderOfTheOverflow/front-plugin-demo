import React from 'react';
import { Link } from 'react-router-dom';

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
	return <div>
		SignIn Page
		<Link to="/primary">List of items</Link>
		<Link to="/create">Create item</Link>
	</div>;
};

export default SignIn;
