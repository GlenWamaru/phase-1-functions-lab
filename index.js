// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    if (blocks > hq) {
        return blocks - hq;
    } else if (blocks < hq) {
        return hq - blocks;
    } else {
        return 0;
    }
}
 function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }

  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  