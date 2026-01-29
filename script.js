const debounced = debounce(console.log, 3000);
document.body.addEventListener("click", () => debounced(currentTime));

function debounce(callback, delay, immediate = false) {
  let timeoutId;
  let currentTime = 0;
  return function debounced(currentTime) {
    if (timeoutId) clearTimeout(timeoutId);
    if (immediate) callback(delay);
    timeoutId = setTimeout(function () {
      callback(delay);
    }, delay);
  };
}
  
module.exports = debounce;
