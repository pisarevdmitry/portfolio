export default () => {
    let top = document.querySelector(".scroll__down");
    let sections=document.querySelector(".wrapper").children;
    let bottom =document.querySelector(".scroll__up");

    console.log(top);
    const scrollTop =() =>{

        sections[1].scrollIntoView({behavior:"smooth",block:"start"})
    };
    const  scrollDown = () =>{
        sections[sections.length-2].scrollIntoView({behavior:"smooth",block:"end"})
    };

    return {
        top(){
            top.addEventListener("click",scrollTop)
        },
        bottom(){
            bottom.addEventListener("click",scrollDown)
        }
    }
}