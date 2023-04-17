//모든 article 요소를 변수  items에 저장

const items=document.querySelectorAll("article");
const aside=document.querySelector("aside");
const close=aside.querySelector("span");

//article 요소의 개수만큼 반복

for (let el of items){
    //현재 반복하는 article 요소에 mouseenter 이벤트 발생
            el.addEventListener("mouseenter",e=>{
                //자식 요소인 video재생
                e.currentTarget.querySelector("video").play();
            });

            el.addEventListener("mouseleave",e=>{
                //자식 요소인 video 일시 정지
                e.currentTarget.querySelector("video").pause();
            });

            el.addEventListener("click",e=>{
                let tit=e.currentTarget.querySelector("h2").innerText;
                let txt=e.currentTarget.querySelector("p").innerText;
                let vidSrc=e.currentTarget.querySelector("video").getAttribute("src");

                aside.querySelector("h1").innerText=tit;
                aside.querySelector("p").innerText=txt;
                aside.querySelector("video").setAttribute("src",vidSrc)


                aside.querySelector("video").play();
                aside.classList.add("on")
            });

            for(let el of items){
                close.addEventListener("click",()=>{
                    aside.classList.remove("on");
                    aside.querySelector("video").pause();

                });
            }


}