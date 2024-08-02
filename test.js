let calcAngle = (hr, min) => {
  
  let hrHandAngle = hr*30 + min*0.5;
  let minHandAngle = min*6;
  let minorAngle = Math.abs(minHandAngle - hrHandAngle);
  let majorAngle = 360 - minorAngle;
  if(minorAngle>majorAngle){
    let temp = majorAngle;
    majorAngle = minorAngle;
    minorAngle = temp;
  }
  return {
    minorAngle : minorAngle,
    majorAngle : majorAngle
  }
    
}

console.log(calcAngle(9, 00))