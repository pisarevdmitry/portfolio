export default (container) => {
  let blog = document.getElementById("blog");
  let articleNavList = container.firstElementChild;
  let articlesNav =Array.prototype.slice.apply( articleNavList.children) ;
  let article = document.getElementById("articles");
  let articlesList =article.children ;
    for(let i = 0; i < articlesNav.length ; i++ ) {
      articlesNav[i].setAttribute("data-name",`#article-${i+1}`)
  }
  for(let i = 0; i < articlesList.length ; i++ ) {
        articlesList[i].setAttribute("id",`#article-${i+1}`)
    }


    const toggle = () => {
        container.classList.toggle("blog__nav_opened")


    };
   const sidebarMove = () => {
       if(blog.getBoundingClientRect().top <=10 ){
           container.classList.add("blog__nav_fixed");
           console.log(window.innerWidth);
            if(window.innerWidth<768){
                articleNavList.style.top="50%"
            }
           articlesNav.map((elem) =>{
               let curentLink = elem.getAttribute("data-name");
               let ref= document.getElementById(curentLink);
               let rect = ref.getBoundingClientRect();
               if(rect.top  <=300 && (rect.top + rect.height)  > 0) {
                   articlesNav.map((elem) =>{
                       elem.classList.remove("articles-list__item_active")
                   });
                   elem.classList.add("articles-list__item_active")
               }

           })
       }
       else{
           container.classList.remove("blog__nav_fixed");
           articleNavList.style=""

       }
   };
   const slideTo = (e) =>{
        let curentLink;
        e.stopPropagation();
        if(e.target.classList.contains("articles__text") ){
            curentLink = e.target.parentNode.getAttribute("data-name")
        }
        else{
            curentLink = e.target.getAttribute("data-name");
        }
        let ref= document.getElementById(curentLink);
        ref.scrollIntoView({behavior:"smooth"});
        if(window.innerWidth<768){
            articlesNav.map((elem) =>{

                elem.classList.remove("articles-list__item_active")
            });
            e.target.classList.add("articles-list__item_active");
            container.classList.remove("blog__nav_opened")
        }
    };
    container.addEventListener("click",toggle);
    document.addEventListener("scroll",sidebarMove);

    articleNavList.addEventListener("click",slideTo)
}