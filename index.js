document.querySelectorAll(".img").forEach((div) => {
    div.addEventListener("click", (e) => {
        const divElement = e.currentTarget
        const imgElement = divElement.querySelector("img")
        const imgSrc = imgElement.src
        const imgAlt = imgElement.alt

        // Get the p element and its data
        const pElement = divElement.querySelector("p")
        const name = pElement.querySelector("span:nth-child(1)").textContent
        const price = pElement.querySelector("span:nth-child(2)").textContent

        const asideElement = document.getElementById("aside")
        const asideImgElement = asideElement.querySelector("img")

        asideImgElement.src = imgSrc
        asideImgElement.alt = imgAlt

        const asidePElement = asideElement.querySelector("p")
        asidePElement.querySelector("span:nth-child(1)").textContent = name
        asidePElement.querySelector("span:nth-child(2)").textContent = price

        asideElement.classList.remove("productDetailClosed")
        asideElement.classList.add("productDetailOpen")

        const asideIconElement = asideElement.querySelector("i")

        asideIconElement.onclick = () => {
            asideElement.classList.remove("productDetailOpen")
            asideElement.classList.add("productDetailClosed")
        }
    })
})
