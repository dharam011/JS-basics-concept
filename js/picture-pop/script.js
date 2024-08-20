
 
        // Throttling Function
        const throttleFunction = (func, delay) => {
 
            
            
            let prev = 0;
            return (...args) => {
                
                let now = new Date().getTime();
 
                
                if (now - prev > delay) {
                    prev = now;
 
                   
                    return func(...args);
                }
            }
        }
        document.querySelector("#center ").addEventListener("mousemove",
            throttleFunction((dets) => {
                var div =document.createElement("div");
               

                div.classList.add("img-div");
                div.style.left=dets.clientX+"px";
                div.style.top=dets.clientY+"px";

                var img= document.createElement("img");
                    img.setAttribute("src","https://images.unsplash.com/photo-1723754165609-fa2d26338ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8");
                    div.appendChild(img)
             
                  
                document.body.appendChild(div);
               
                gsap.to(img,{
                    y: "0",
                    ease:Power1,
                    duration:0.4,
                   
                }
                );
                gsap.to(img,{
                    y: "100%",
                    delay:.5,
                    ease:Power2,
                    duration:0.6,
                   
                }
                );
                setTimeout(function(){
                    div.remove();
                },1500)

            }, 400));
