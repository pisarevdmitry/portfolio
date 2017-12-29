export default () => {
    const slide_right = document.querySelector('.slider__slide_next');
    const slide_left = document.querySelector('.slider__slide_prev');
    const slide_head = document.querySelector('.slider__head');
    const height = document.querySelector('.slider__slide').clientHeight;
    const control_next =document.querySelector('.scroll__slider_next');
    const control_prev =document.querySelector('.scroll__slider_prev');
    const text = document.querySelector('.slider__title');
    const tech = document.querySelector('.slider__tech');
    const link = document.querySelector('.slider__link');



    slide_move(true);


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

          const trans_wait = await append_ins(flag);

          if (trans_wait.complete) {
              if (flag) {
                  await change_head(slide_right);
                  slide_right.style.transform = `translateY(-${height})`;
                  slide_left.style.transform = `translateY(${height})`;

              } else {

                  slide_right.style.transform = `translateY(${height})`;
                  slide_left.style.transform = `translateY(-${height})`;
                 await change_head(slide_left);
              }
          }
      }

      function append_ins(flag = false) {
          if (flag) {
              slide_right.appendChild(slide_right.children[0]);
              slide_left.insertBefore(slide_left.children[slide_left.children.length - 1], slide_left.children[0]);
              slide_right.children[0].cloneNode(true);
              slide_left.lastChild.cloneNode(true)
          } else {
              slide_left.appendChild(slide_left.children[0]);
              slide_right.insertBefore(slide_right.children[slide_right.children.length - 1], slide_right.children[0])
              slide_left.children[0].cloneNode(true);
              slide_right.lastChild.cloneNode(true)
          }
          const  trans = {complete: true};
          return trans
      }

      function change_head(elem) {
          let current = elem.lastElementChild.firstElementChild.firstElementChild;
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