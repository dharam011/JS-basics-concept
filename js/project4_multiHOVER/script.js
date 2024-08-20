var elem= document.querySelectorAll(".elem")

elem.forEach(function(val){
 
    val.addEventListener("mouseenter", function(){
        val.addEventListener("mousemove", function(dets){
      
            val.childNodes[3].style.left= dets.x+"px"
            val.childNodes[3].style.opacity =1
    
    
         }) ;
        //val.childNodes[3].style.opacity =1
  setTimeout(function(){
    val.childNodes[3].style.opacity=0
  },1000)

     }) ;
     val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity =0


     }) ;
     /*val.addEventListener("mousemove", function(dets){
      
        val.childNodes[3].style.left= dets.x+"px"
     


     }) ;*/
 
  
})