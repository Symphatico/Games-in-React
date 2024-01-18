import { useEffect, useState } from 'react';
import './App.css';

const FollowMouse = () => {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		console.log('efecto');

		const handleMove = (event) => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};
		if (enabled) {
			window.addEventListener('pointermove', handleMove);
		}

		return () => {
			window.removeEventListener('pointermove', handleMove);
		};
	}, [enabled]);
	return (
		<>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#09f',
					borderRadius: '50%',
					border: '1px solid #fff',
					opacity: 0.8,
					pointerEvents: 'none',
					left: -25,
					top: -25,
					width: 60,
					height: 60,
					transform: `translate(${position.x}px,${position.y}px)`,
				}}
			/>
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Desactivas' : 'Activar'} seguir puntero
			</button>
		</>
	);
};

function App() {
	return (
		<main>
			<FollowMouse />
		</main>
	);
}

export default App;
