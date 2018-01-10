export default (duration) => {
    const slide_right = document.querySelector('.slider__slide_next');
    const slide_left = document.querySelector('.slider__slide_prev');
    const slide_head = document.querySelector('.slider__head');
    const height = document.querySelector('.slider__slide').clientHeight;
    const control_next =document.querySelector('.scroll__slider_next');
    const control_prev =document.querySelector('.scroll__slider_prev');
    const text = document.querySelector('.slider__title');
    const tech = document.querySelector('.slider__tech');
    const link = document.querySelector('.slider__link');
    let trigger = true;

    slide_right.appendChild(slide_right.children[0]);
    slide_left.insertBefore(slide_left.children[slide_left.children.length - 1], slide_left.children[0]);


    control_next.addEventListener('click', e => {
        e.preventDefault();
        slide_move(true)
    });

    control_prev.addEventListener('click', e => {
        e.preventDefault();
        slide_move(false)
    });


      async function slide_move(flag) {
          console.log('click');
            if(!trigger){
                return
            }
            trigger = false;
          const trans_wait = await append_ins(flag);

          if (trans_wait.complete) {
              if (flag) {

                  await change_head(slide_right,flag);
              } else {


                 await change_head(slide_left);
              }
          }
      }

      function append_ins(flag = false) {
          if (flag) {
              slide_right.style.transition = ` transform ${duration}s linear`;
              slide_right.style.transform = `translateY(-${height}px)`;
              setTimeout(() =>{
                  slide_right.appendChild(slide_right.children[0]);
                  slide_right.style="";
                  trigger = true
              },duration * 1000);

              slide_left.insertBefore(slide_left.children[1], slide_left.children[0]);
              slide_left.style.top= "-"+ height +"px";
              slide_left.style.transition = ` transform ${duration}s linear`;
              slide_left.style.transform = `translateY(${height}px)`;
              setTimeout(() => {
                  slide_left.appendChild(slide_left.children[1]);
                  slide_left.style=""
              },duration *1000)


          } else {
              slide_left.style.top= "-"+ height +"px";
              slide_left.insertBefore(slide_left.children[slide_left.children.length-1], slide_left.children[0]);
              slide_left.style.transition = ` transform ${duration}s linear`;
              slide_left.style.transform = `translateY(${height}px)`;
              setTimeout(() =>{
                  slide_left.style="";
                  trigger=true
              },duration *1000);

              slide_right.insertBefore(slide_right.children[slide_right.children.length - 1], slide_right.children[1]);
              slide_right.style.transition = ` transform ${duration}s linear`;
              slide_right.style.transform = `translateY(-${height}px)`;
              setTimeout(()=>{
                 slide_right.insertBefore(slide_right.children[1], slide_right.children[0]);
                 slide_right.style=""
              },duration *1000);
          }
          const  trans = {complete: true};
          return trans
      }

      function change_head(elem,flag) {
          let current;
            if(flag){

                current = elem.firstElementChild.firstElementChild.firstElementChild

            }
            else{
                current = elem.children[1].firstElementChild.firstElementChild;

            }
          let src = current.getAttribute("src");
          let name = current.getAttribute("data-title");
          let tecnologies =current.getAttribute("data-tech");
          let linkSource = current.getAttribute("data-link");
          slide_head.firstElementChild.firstElementChild.setAttribute("src",src );
          console.log(linkSource);
          text.innerHTML = name;
          tech.innerHTML = tecnologies;
          link.firstElementChild.setAttribute("href",linkSource )



      }
}