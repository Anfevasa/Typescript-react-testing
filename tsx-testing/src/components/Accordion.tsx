import { useState } from "react"

type AccordionProps = {
    title: string
    children: React.ReactNode
}

function Accordion({ title, children }: AccordionProps) {
    const [showContent, setShowContent] = useState(false)

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => {setShowContent(!showContent)}}>{showContent ? "Close" : "Open"} </button>
            {showContent && <div>{children}</div>}
        </div>
    )
}

export default Accordion