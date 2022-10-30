import styled from "styled-components"

interface InvoiceNodeProps {
	active: boolean
	highlighted: boolean
	children: JSX.Element
}

const InvoiceNodeUnstyled = ({ active, highlighted, children }: InvoiceNodeProps) => (
	<>{active && children}</>
)

const InvoiceNode = styled(InvoiceNodeUnstyled)`
	color: ${props => (props.highlighted ? "#fff" : "initial")};
`

export default InvoiceNode
