const url = 
      "https://api.thecatapi.com/v1/images/search"
let btn = document.querySelector(".randomButton")

btn.addEventListener("click", handleClick)

function handleClick(){
fetch (url).then ((res)=>{
  return res.json()
}).then((data)=>{
  let imgTag = document.querySelector(".randomCatImg")
imgTag.src = data[0].url
})
}