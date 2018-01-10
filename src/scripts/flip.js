export default  (button, block) => {

    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.style.cssText = "opacity:0;cursor:default";
        block.classList.add("reverse");
    })
}





