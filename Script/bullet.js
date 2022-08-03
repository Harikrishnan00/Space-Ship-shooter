import { computeStyleProp } from "./helper.js"

const bullet=document.querySelector('[data-bullet]')

const SPEED=0.05

export function bulletPentetration(delta){
    let bulletTop=computeStyleProp(bullet,"bottom")
    let bulletTopValue=(bulletTop+10*SPEED*delta)
    if(bulletTopValue>650){
        bullet.style.bottom=`58px`
    }else{
        bullet.style.bottom=`${bulletTopValue}px`
    }
    
}