const card = document.querySelector('.card')

card.onmousemove = e => {
    e = e || window.event;

    let clientWidth = card.clientWidth;
    let clientHeight = card.clientHeight;
    if (e.offsetX > 250)
        card.style.transform = `rotateX(${clientWidth / 400 - e.offsetX / 30}deg) rotateY(${(clientHeight / 400 - e.offsetY / 30)}deg) `
    else
        card.style.transform = `rotateX(${clientWidth / 400 - e.offsetX / 30 + 10}deg) rotateY(${(clientHeight / 400 - e.offsetY / 30)}deg) `

    console.log(`${card.style.transform} `)

}