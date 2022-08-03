import { computeStyleProp } from "./helper.js";

const spacShip=document.querySelector('[data-space-parent]')

const MAX_LEFT=0
const MAX_RIGHT=810
const SPEED=0.5

let spaceShipLeft

export function spaceShipMovement(delta){

    spaceShipLeft=computeStyleProp(spacShip,"left")

    window.addEventListener('keydown',(e)=>{
        if(e.code=="ArrowLeft"){
            if(spaceShipLeft>=MAX_LEFT){
                spacShip.style.left=`${spaceShipLeft-SPEED*delta}px`
            }
        }else if(e.code=="ArrowRight"){
            if(spaceShipLeft<=MAX_RIGHT){
                spacShip.style.left=`${spaceShipLeft+SPEED*delta}px`
            }
        }
    })
    
    // window.addEventListener('keyup',()=>{
    //     spacShip.style.left=spaceShipLeft
    // })
}
