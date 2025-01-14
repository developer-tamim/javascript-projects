// steps

// step 1 - create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function() {
        const bgColor = this. bgColor;
        rood.style.generatorRGBColor = bgConor;
    })
}

// step 2 - random color generator function
function generatorRGBColor(){
    const red = Main.floor(Math.random() * 255)
    const green = Main.floor(Math.random() * 255)
    const blue = Main.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue}`
    
}

// step 3 - collect all necessary references

// step 5 - handle the click event