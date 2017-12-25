export default ( section,container) => {
   const moveParallax = (e) => {
        let initialX =window.innerWidth/2 - e.pageX;
        let initialY = window.innerHeight/2 -e.pageY;
        let layer = container.firstElementChild;
        layer.style.transform = `translate3d(${initialX * 0.08}px, ${initialY *0.08}px, 0)`
    };
    section.addEventListener("mousemove",moveParallax);
}
