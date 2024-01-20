export function getCSSPropertyValue(element, property){
  let value = getComputedStyle(element).getPropertyValue(property);

  return value;
}