
function toggleMenu(){
    //entradas
    const slide1_on = document.getElementById("slide1");
    const slide2_on = document.getElementById("slide2");
    const slide3_on = document.getElementById("slide3");
    const slide4_on = document.getElementById("slide4");
    
    //criação de classes
    if (document.getElementById("slide1").checked) {
        slide1_on.classList.add("ativo1");
        slide2_on.classList.remove("ativo2");
        slide3_on.classList.remove("ativo3");
        slide4_on.classList.remove("ativo4");
    }
    if (document.getElementById("slide2").checked) {
        slide1_on.classList.remove("ativo1");
        slide2_on.classList.add("ativo2");
        slide3_on.classList.remove("ativo3");
        slide4_on.classList.remove("ativo4");
    }
    if (document.getElementById("slide3").checked) {
        slide1_on.classList.remove("ativo1");
        slide2_on.classList.remove("ativo2");
        slide3_on.classList.add("ativo3");
        slide4_on.classList.remove("ativo4");
    }
    if (document.getElementById("slide4").checked) {
        slide1_on.classList.remove("ativo1");
        slide2_on.classList.remove("ativo2");
        slide3_on.classList.remove("ativo3");
        slide4_on.classList.add("ativo4");
    }
};