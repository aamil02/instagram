var story = document.querySelector("#story-1")
var over = document.querySelector("#overlay")
var over1 = document.querySelector("#over")

flag = 0
story.addEventListener("click",function(){
    if(flag==0){
        over.style.display = ("initial")
        over1.style.display = ("initial")
        flag = 1
    }else{
        over.style.display = ("none")
        over1.style.display = ("none")
        flag = 0
    }
    setTimeout(function(){
        over.style.display = ("none")
        over1.style.display = ("none")
    },3000)

    speed = 1
    setInterval(function(){
        document.querySelector("#grow").style.width = `${speed++}%`
    },25)
    
})

var post = document.querySelector("#post")
var heart = document.querySelector("#heart img")
var like = document.querySelector("#likes h3")
var like1 = document.querySelector("#post i:nth-child(1)")

var hello = 0
post.addEventListener("click",function(){
    if(hello === 0){
        heart.style.display = "initial"
        like.innerHTML = "111,787 likes"
        like1.style.color = "red"
        hello = 1
    }else{
        heart.style.display = "none"
        like.innerHTML = "111,786 likes"
        like1.style.color = "black"
        hello = 0
    }
    setInterval(function(){
        heart.style.display = "none"
    },500)
})