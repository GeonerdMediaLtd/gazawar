const bars = document.querySelectorAll(".bar");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      bars.forEach(bar=>{
        bar.style.height = bar.dataset.value + "%";
      });
    }
  });
},{threshold:0.6});

observer.observe(document.querySelector(".timeline"));


// Parallax
window.addEventListener("scroll",()=>{
  const y = window.scrollY;
  document.querySelector(".back").style.transform = `translateY(${y*0.15}px)`;
  document.querySelector(".mid").style.transform = `translateY(${y*0.3}px)`;
  document.querySelector(".front").style.transform = `translateY(${y*0.45}px)`;
});
