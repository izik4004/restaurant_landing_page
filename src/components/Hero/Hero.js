import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './hero.css';
import Sidebar from '../Sidebar/Sidebar';

const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Sweet and Yummy Burger</h1>
					<p>
						A local favorite for 83+ years. Featuring our famous DeAngelis donuts ice
						cream and our cakes. Full menu offered all day and late night. Full bar with
						entertainment on weekends.
					</p>
					<div className="btn">Book now</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;