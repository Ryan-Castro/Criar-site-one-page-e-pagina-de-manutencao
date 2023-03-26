function $(element){
    return document.querySelector(element)
}

$("#inputMore").addEventListener('click', ()=>{
    window.scroll({top: 100, behavior: "smooth"})
})