let store = { drivers:[], trips:[], passengers:[]}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filte(trip => trip.driverId === this.id)
  }
  passengers(){
    return this.trip().map(trip => trip.passenger)
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }
  trips(){
    return store.trips.filte(function (trip){
      return trip.driverId === this.id
    })
  }
  drovers(){
    return this.trip().map(function (trip) {
      return trip.driver
    })
  }
}


let tripId = 0

class Trip {
  constructor(name) {
    this.id = ++tripId;
    this.name = name;
    store.trips.push(this);
  }

}
