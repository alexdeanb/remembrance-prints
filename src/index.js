import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RemembrancePrints } from "./components/RemembrancePrints"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <RemembrancePrints />
    </BrowserRouter>
)

