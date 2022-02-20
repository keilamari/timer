let seconds = process.argv.slice(2);



const alert = function(time) {
  setTimeout(() => {console.log(time, 'seconds', '\x07')}, time * 1000)
}

const timer = (function(seconds, action){
  for(let alarm of seconds) {
    if (!isNaN(alarm)) {
      if (alarm > 0) {
        action(alarm);
      }
    }
  }
})

timer(seconds, alert);

