var area = document.querySelector("input");
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var order = document.querySelector(".order");
btn.addEventListener("click", () => {
    if (area.value.trim() === '') {
        alert("Enter your value please");
        return false;
    } else {
        var list = document.createElement('ul');
        list.innerHTML = `<li>${area.value}&nbsp; &nbsp;<button onclick="rmv(event)">Remove</button></li>`;
        order.appendChild(list);
        area.value = "";
        area.focus();
    }
});
function rmv(e) {
    e.target.parentElement.remove();
}
btn2.onclick = function(){
       order.remove();
}