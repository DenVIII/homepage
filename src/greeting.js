// greeting.js
import backgroundImg from "./background.JPG"

const image = document.createElement("img")
image.src = backgroundImg

document.body.appendChild(image)

export const greeting = "Hello, Odinite!"
