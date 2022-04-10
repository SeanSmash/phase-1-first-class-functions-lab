const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fareMultiplier => {
    return fareMultiplier = (x, fare) => {
        return x**2;
    }
}

const fareDoubler = fare => fare*2;

const fareTripler = fare => fare*3;

const selectDifferentDrivers = (drivers, selection) => {
    return selection(drivers);
}