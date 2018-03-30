var http = {
    get: function(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    },
    post: function(url) {
        const xhr = new XMLHttpRequest();
        var get = document.getElementById("get-text");
        var post = document.getElementById("post-text");
        var anim = document.getElementById("animation");
        var text = get.innerText;
        xhr.open("POST", url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                anim.style.display = "none";
                post.innerHTML = xhr.responseText;
            }
        }
        xhr.send(text);
    }
}