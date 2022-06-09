// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    return Math.abs(`${pickUpBlock}` - 42)
}

function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock) * 264;
}

function distanceTravelledInFeet(pickUpBlock, destinationBlock){
    return Math.abs(destinationBlock - pickUpBlock) * 264;
}

function calculatesFarePrice(pickUpBlock, destinationBlock){
    const rideInFeet = distanceTravelledInFeet(pickUpBlock, destinationBlock);
    if(rideInFeet <= 400 ){
        return 0;
    }else if(rideInFeet > 400 && rideInFeet <= 2000){
        return (rideInFeet - 400) * 0.02;
    }else if(rideInFeet >  2000 && rideInFeet <= 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}