function $(element){
    return document.querySelector(element)
}

$("#inputMore").addEventListener('click', ()=>{
    window.scroll({top: 100, behavior: "smooth"})
})
let conterBg = 1

function updateHome(){

    setTimeout(()=>{
        $("#containerCarousel").style.marginLeft = "-100vw"
        setTimeout(()=>{
            $("#containerCarousel").style.transition = "0s"
            $("#divBg1").style.backgroundImage = `url("./assets/img/card${conterBg + 1}.jpeg")` 
            $("#containerCarousel").style.marginLeft = "0px"
            if(conterBg<5){
                $("#divBg2").style.backgroundImage = `url("./assets/img/card${conterBg + 2}.jpeg")` 
            }else {
                $("#divBg2").style.backgroundImage = `url("./assets/img/card1.jpeg")` 
            }
            setTimeout(()=>{
                $("#containerCarousel").style.transition = "2s"
                if(conterBg>4){
                    conterBg = 0
                } else {
                    conterBg++
                }
                updateHome()
            },100)
        },2000)

    },2500)
}

updateHome()