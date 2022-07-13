function displayCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds)
  let timeString = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("time").innerText = timeString;
    let timer = setTimeout(displayCurrentTime, 333);
  }
  function addZero(component) {
    return component < 10 ? "0" + component : component;
  }
  displayCurrentTime();
