const displayTime = (time) => {
  var minutes = Math.floor(time / 60000);
  var seconds = ((time % 60000) / 1000).toFixed(0);
  return minutes + " min " + seconds + " sec";
};

export { displayTime };
