export default ( section,container,triger) => {
    let sectionHeight = section.offsetHeight;
    let layer = container.firstElementChild;

    const scrollParallax =(e) =>{
        let marginTop =window.pageYOffset;
        if(marginTop <= sectionHeight){
            layer.style.transform = `translate3d(0,-${marginTop * 0.11 }px , 0)`

        }
    };
   const moveParallax = (e) => {
        let initialX =window.innerWidth/2 - e.pageX;
        let initialY = window.innerHeight/2 -e.pageY;
        layer.style.transform = `translate3d(${initialX * 0.08}px, ${initialY *0.08}px, 0)`
    };
   if(triger ==="mouse") {
    section.addEventListener("mousemove",moveParallax);
    }
    else{
        document.addEventListener("scroll",scrollParallax);
        document.addEventListener("resize",()=>{
            sectionHeight = section.offsetHeight;
       });
   }
}
