/**
 * Class declaration for Couch
 */

class Couch {
  constructor(
  name,
  seats,
  color,
  pillows,
  cushions,
  extraPillows
  ) 
{
  this.name = name;
  this.seats = seats;
  this.color = color;
  this.pillows = pillows;
  this.cushions = cushions;
  this.extraPillows = extraPillows
}
addExtraPillows(pillowsAdded) {
    this.extraPillows = pillowsAdded;
  }
}

export default Couch
