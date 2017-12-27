export default () => {
    let container =document.getElementById("preloader");
    let text = document.getElementById("text");
    let inner =document.getElementById("inner");
    let dash =0;
    let persent =0;
    text.innerHTML = 1;
    inner.style.strokeDasharray = "1.57 282.6";
    if(sessionStorage.getItem("my-preloader")) {
        container.style.display = "none"
    }
    else{
        sessionStorage.setItem("my-preloader",true);
        const timer = setInterval(() =>{
            text.innerHTML = ++persent;
            inner.style.strokeDasharray = `${dash += 1.57} 282.6`;
            if(persent ===100) clearInterval(timer)
        },70);

        setTimeout(()=>{
            container.style.display = "none"
        },7700)
    }

}