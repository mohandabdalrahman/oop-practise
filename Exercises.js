// function StopWatch() {
//   Object.defineProperty(this, 'duration', {
//     get: function () {
//       return duration
//     },
//     set: function (value) {
//       duration = value
//     }
//   })
// }
// Object.defineProperty(this, 'startTime', {
//   get: function () {
//     return startTime
//   }
// })

// Object.defineProperty(this, 'endTime', {
//   get: function () {
//     return endTime
//   }
// })

// Object.defineProperty(this, 'running', {
//   get: function () {
//     return running
//   }
// })

// StopWatch.prototype.start = function () {
//   if (this.running) {
//     throw new Error('stopwatch is running')
//   }
//   this.running = true
//   this.startTime = new Date()
// }

// StopWatch.stop = function () {
//   if (!this.running) {
//     throw new Error('stopwatch is not running')
//   }
//   this.running = false;
//   this.endTime = new Date()
//   const seconds = (endTime.getTime() - startTime.getTime()) / 1000
//   this.duration += seconds
// }

// StopWatch.prototype.reset = function () {
//   this.duration = 0
//   this.startTime = null
//   this.endTime = null
//   this.running = false
// }



function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  }
}

function HtmlSelectElement(items = []) {
  this.items = items
  this.addItem = function (item) {
    this.items.push(item)
  }
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}


HtmlElement.prototype.focus = function () {
  console.log('focused');
}


HtmlSelectElement.prototype = new HtmlElement()