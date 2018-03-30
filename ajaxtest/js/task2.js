var inputText = document.getElementById("inputText");
var track = document.getElementById("get");
var validate = document.getElementById("post");
var text = document.getElementById("get-text");
var resp = document.getElementById("response");
var anim = document.getElementById("animation");

track.onclick = function() {
    anim.style.display = "block";
    var ip = inputText.value;
    var url = `https://ipapi.co/${ip}/json/`;
    http.get(url).then(val => {
        anim.style.display = "none";
        resp.style.display = "block";
        validate.style.display = "block";
        text.innerText = val;
    });
}

validate.onclick = function() {
    anim.style.display = "block";
    http.post('https://shrouded-garden-94580.herokuapp.com/');
}