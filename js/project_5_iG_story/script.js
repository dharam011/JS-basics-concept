var arr=[
    {dp:"https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMG1vZGVsfGVufDB8fDB8fHww"
, story:"https://plus.unsplash.com/premium_photo-1669951581968-73b5b71face3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {dp:"https://images.unsplash.com/photo-1583777256056-4174d78d27b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    , story:"https://images.unsplash.com/photo-1583777256053-1ac2b4ea398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
            
    {dp:"https://images.unsplash.com/photo-1648991841598-78f3aed8064f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     , story:"https://images.unsplash.com/photo-1688760116404-21ff7c246952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    
      }  ,
    
            {dp:"https://images.unsplash.com/photo-1630355600244-cd049efe8d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
                , story:"https://images.unsplash.com/photo-1601830418750-6e4925911fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
            },
            ,
    
    {dp:"https://images.unsplash.com/photo-1603023435989-832d6652e246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    , story:"https://images.unsplash.com/photo-1566133919355-d72f16e0d1b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5ha2VkJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
                    }           
]
 var storiyan = document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+= ` <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})
storiyan.innerHTML=clutter
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

      setTimeout(function() {
        document.querySelector("#full-screen").style.display="none"
      }, 3000);
});