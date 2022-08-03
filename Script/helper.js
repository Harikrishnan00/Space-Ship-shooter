
export function computeStyleProp(element,property){
   return parseFloat(window.getComputedStyle(element).getPropertyValue(property))
}