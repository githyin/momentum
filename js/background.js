const images = [
    "burj.webp",
    "colosseum.jpg",
    "timesquare.jpg.avif"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)