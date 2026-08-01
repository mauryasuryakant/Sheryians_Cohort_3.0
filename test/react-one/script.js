import React from "react"

const root = document.querySelector("#root")
const h1 = React.createElement("h1", null, "Hello  sa")


console.log(h1)


const virtualDOM = ReactDOM.createRoot(root)

virtualDOM.render(h1)