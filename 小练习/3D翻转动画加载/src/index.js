window.onload = () => {
    bkc = [...document.querySelectorAll('.circle')]
    setInterval(() => {
        for (const item of bkc) {
            item.style.backgroundColor = `rgb(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)})`;
        }
    }, 3000);
}
