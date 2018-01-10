export default () => {
    let container = document.getElementById("preloader");
    let text = document.getElementById("text");
    let inner = document.getElementById("inner");
    let images = document.querySelectorAll("img");
    let videos = document.querySelectorAll("video");
    let resources = Array.prototype.concat.call(...images, ...videos);
    let count = 0;

    if (sessionStorage.getItem("my-preloader")) {
        container.style.display = "none"
    }
    const stop = (percents) => {
        if (percents === 100) {
            setTimeout(() => {
                sessionStorage.setItem("my-preloader", true);
                container.style.display = "none"
            }, 1000)
        }
    };
    const show = (number) => {
        let percents = Math.round((number / resources.length) * 100);
        text.innerHTML = percents;
        inner.style.strokeDasharray = `${percents * 1.57} 282.6`;
        stop(percents)
        };

    for (let i = 0; i <= images.length - 1; i++) {
        console.log(images[i], "loading");
        images[i].addEventListener("load", () => {
            count++;
            show(count)

        })
    }
    for (let i = 0; i <= videos.length - 1; i++) {
        videos[i].addEventListener("canplay", () => {
            count++;
            show(count)

        })
    }

}