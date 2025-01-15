// steps

// Step 1 - Create onload handler
window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    // Step 5 - Handle the click event
    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    });
}

// Step 2 - Random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}


// step 3 - collect all necessary references

// step 5 - handle the click event