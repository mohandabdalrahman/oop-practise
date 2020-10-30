// factory function to create object
function createCircle(redis) {
  return {
    redis,
    draw: function () {
      console.log('draw');
    }
  }
}
const circle = createCircle(1)

//  contstructor function
function Circle(reduis) {
  this.redis = reduis
  // make it private
  let location = { x: 1 }
  Object.defineProperty(this, 'getLocation', {
    get: function () {
      return location
    },
    set: function (value) {
      location = value
    }
  })
}

Circle.prototype.draw = function () {
  console.log('draw');
}

const another = new Circle(2)
if ('redis' in another) {
  console.log('circle has this property');
}

let person = { name: 'mohand' }
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
})

// Note:Every object in js has constructor property that reference to function which create it
// prototype: is just regular object in memory

