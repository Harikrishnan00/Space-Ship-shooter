import { computeStyleProp } from "./helper.js"


const target=document.querySelector('[data-target]')
const world=document.querySelector('[data-world]')
const bullet=document.querySelector('[data-bullet]')
const spaceShip=document.querySelector('[data-space-parent]')

const MAX_TOP=150
const MAX_RIGHT=830

let rg=Math.random()

let targetAl
export function targetAlignent(){
    let randomNUm
    for(let i=0;i<Math.floor(rg*100);i++){
        var clone=target.cloneNode(true)
        randomNUm=Math.random()*100*10
        if(randomNUm>MAX_RIGHT){
            randomNUm=MAX_RIGHT-(Math.random()*150)
        }
        clone.style.left=`${randomNUm}px`
        randomNUm=Math.random()*100*5
        if(randomNUm>MAX_TOP){
            randomNUm=MAX_TOP-(Math.random()*100)
        }
        clone.style.top=`${randomNUm}px`
        targetAl=document.querySelectorAll('.target')
        world.appendChild(clone)
    }
}

let targetTop,targetLeft
let bulletTop,spaceShipLeft
export function gainPoint(){
    bulletTop=computeStyleProp(bullet,"top")
    spaceShipLeft=computeStyleProp(spaceShip,"left")
    targetAl.forEach((res,i)=>{
        targetTop=computeStyleProp(res,"top")
        targetLeft=computeStyleProp(res,"left")
        if(Math.abs((targetTop-bulletTop))<=50&&Math.abs((spaceShipLeft+30)-targetLeft)<=5){
            res.style.display="none"
        }
    })
}
