const bt = document.getElementById("bt");
const h2 = document.getElementById("h2");
const min = document.getElementById("min");
const max = document.getElementById("max");
let rand = 0;

bt.onclick = function() {
    rand = Math.floor(Math.random() * (Number(max.value) - Number(min.value) + 1)) + Number(min.value);
    h2.textContent = rand;
}
