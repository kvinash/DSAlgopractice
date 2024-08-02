// Traffic signal
// three lights
// timings should be configurable
// countdown at each signal

let lightUnit = {
      _id : uniqueId
      r : 50,
      g : 47,
      y : 3,
      road : roadId,
      N:
.     S:1
      E:
      W:
      NW:1
      SE:
      SW:
      NE:
}

let road : {
  _id : uniqueId,
  roadName : roadName,
}


crossRoadlightHub : {
  _id : uniqueId
  lightUnitArray : [lightId1, lightId2,]
}

//use case :
//1) Each crossroad has 4 roads, It has 4 light unit for each road unit
//2) if one of the unit has green light than other 3 unit should not have green light.
//n->s
//n->e
//s->n
//s->w
//
//3) if green light countdown left 3 sec, yellow light pops up
//4) after 3 sec yellow light turns into red light and reset the countdown.


