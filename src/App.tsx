import styled from "styled-components"

import { useState, useEffect } from "react"

import Features from "./components/Features"
import Invoice from "./components/Invoice"

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem;
	gap: 2rem;
`

const App = () => {
	const [highlighted, setHighlighted] = useState([false, false, false, false, false, false])
	const [active, setActive] = useState([true, true, true, true, true, true])

	const changeActive = (id: number) => {
		setActive(prev => prev.map((b, i) => (i === id ? !b : b)))
	}

	const changeHighlighted = (id: number) => {
		setHighlighted(prev => prev.map((b, i) => (i === id ? !b : b)))
		console.log(highlighted)
	}

	return (
		<AppContainer>
			<Features
				changeHighlighted={changeHighlighted}
				changeActive={changeActive}
			/>
			<Invoice
				active={active}
				highlighted={highlighted}
			/>
		</AppContainer>
	)
}

export default App
