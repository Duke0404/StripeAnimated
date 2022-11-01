import styled from "styled-components"

import { useState, useEffect } from "react"

import Features from "./components/Features"
import Invoice from "./components/Invoice"

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem;
	gap: 2rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`

const App = () => {
	const [active, setActive] = useState([false, false, false, false, false, false])
	const [initalAnimation, setInitalAnimation] = useState(true)

	useEffect(() => {
		let i = -1

		const interval = setInterval(() => {
			setActive(prev => prev.map((b, ind) => (ind === i ? true : b)))
			++i

			if (i === active.length) {
				setInitalAnimation(false)
				clearInterval(interval)
			}
		}, 3000)
	}, [])

	const changeActive = (id: number) => {
		setActive(prev => prev.map((b, i) => (i === id ? !b : b)))
	}

	return (
		<AppContainer>
			<Features
				changeActive={changeActive}
				active={active}
			/>
			<Invoice
				active={active}
			/>
		</AppContainer>
	)
}

export default App
