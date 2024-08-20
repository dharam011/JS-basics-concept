var relation = document.querySelector("h3")
var remove= document.querySelector("#remove")
var add= document.querySelector("#add")
var flag=0
remove.addEventListener("click", function(){
  if(flag==1){
  relation.innerHTML="Jaa ma chuda  "
  relation.style.color="red"
  add.innerHTML="Add friend"
  remove.style.color="grey"
  flag=0
  }
})
add.addEventListener("click", function(){
  if(flag==0){
  relation.innerHTML="Are bhai h apna "
  add.innerHTML="message"
  relation.style.color="green"
  remove.style.color="black"
  flag=1
  }
})