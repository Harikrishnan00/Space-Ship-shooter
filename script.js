import { spaceShipMovement } from "./Script/space-ship.js"
import { targetAlignent,gainPoint } from "./Script/target.js"
import { bulletPentetration } from "./Script/bullet.js"
import { computeStyleProp } from "./Script/helper.js"

const world=document.querySelector('[data-world]')
// const targetAl=document.querySelectorAll('.target')
const bullet=document.querySelector('[data-bullet]')
const spaceShip=document.querySelector('[data-space-parent]')


const WORLD_WIDTH=80
const WORLD_HEIGHT=50

setWorldSizeToDeviceSize()
targetAlignent()

window.addEventListener('resize',setWorldSizeToDeviceSize)

function setWorldSizeToDeviceSize(){
    let resizePIxelSize
    if(window.innerWidth/window.innerHeight<WORLD_WIDTH/WORLD_HEIGHT){
        resizePIxelSize=window.innerWidth/WORLD_WIDTH
    }else{
        resizePIxelSize=window.innerHeight/WORLD_HEIGHT
    }
    world.style.width=`${WORLD_WIDTH * resizePIxelSize}px`
    world.style.height=`${WORLD_HEIGHT * resizePIxelSize}px`
}

let lastTime

function gameStart(time){
    let delta=time-lastTime
    window.requestAnimationFrame(gameStart)
    spaceShipMovement(delta)
    bulletPentetration(delta)
    gainPoint()
    lastTime=time
}
window.requestAnimationFrame(gameStart)







