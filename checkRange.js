function isInRange(num, min, max) {
    return num >= min && num <= max;
  }
  
  const num = 60;
  const min = 50;
  const max = 100;
  
  const inRange = isInRange(num, min, max);
  console.log(inRange); 
  