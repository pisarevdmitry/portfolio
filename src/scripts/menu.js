
export default (button,menu) =>{
    let flag = true;
    let menuList =  menu.getElementsByTagName("li");
    let current = menu.getElementsByClassName("navigation__link_current");
    const open = () =>{
        new Promise((resolve) =>{
            button.firstElementChild.classList.add("hamburger-menu-bars_closed");
            menu.classList.add("navigation_fixed");
            menu.style.opacity = 1;
            document.body.classList.add("fixed");
            resolve()
        }).then(
            setTimeout(()=>{
                for (let i = 0; i < menuList.length; i++) {
                    setTimeout(() => {
                        menuList[i].style.left=0
                    }, i * 140)
                }
            },900))
    };

    const close= () =>{
        new Promise((resolve) => {
            document.body.classList.remove("fixed");
                for (let i = 0; i < menuList.length; i++) {
                    setTimeout(() => {
                        menuList[i].style.left = "-100%"
                    }, i * 110)
                }
                resolve()
            }
        ).then(()=>{
            menu.style.opacity = 0;
            button.firstElementChild.classList.remove("hamburger-menu-bars_closed");
            setTimeout(() =>{
                menu.classList.remove("navigation_fixed");
                menu.style=""
            },900)
        })
    };
    button.addEventListener("click",() =>{
        if(flag){
            open()
        }
        else {
            close()
        }
        flag = flag ? false : true
    });
    current[0].addEventListener("click",(e) =>{
        e.preventDefault();
        close()
        flag = flag ? false : true
    })
}
