// handle onclick image

const list_image = document.getElementsByClassName("list_image");
console.log(list_image[0])
var img = list_image[0]
var style = img.currentStyle || window.getComputedStyle(img, false);
var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
console.log(bi)

for (let i = 0; i < list_image.length; i++) {
    list_image[i].addEventListener("click", () => {
        console.log(list_image[i])
        window.location.href = `show_data.html?key=${list_image[i].getAttribute("value")}`
    })
}