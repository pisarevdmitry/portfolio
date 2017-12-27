export default (container) => {
    console.log(screen.width);
    const toggle = () => {
        container.classList.toggle("blog__nav_opened")
    };
    container.addEventListener("click",toggle)
}