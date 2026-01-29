const debounced = debounce(console.log, 3000);
document.body.addEventListener("click", () => debounced(currentTime));

function debounce(callback, delay, immediate = false) {
  let timeoutId;
  return function debounced(...args) {
    function doLater() {
      timeoutId = null;
      if (!immediate) callback(...args); // Trailing call
    } // Accept args, pass to callback

    if (immediate && !timeoutId) {
      callback(...args); // Leading call only if no pending
      timeoutId = setTimeout(doLater, delay);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(doLater, delay);
    }
  };
}
  
module.exports = debounce;
