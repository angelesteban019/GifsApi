const text = document.querySelector(".text")
const search = document.getElementById("search")
const button = document.getElementById("button")
const tend = document.getElementById("tend")

let apikey = "AIzaSyCIQ17XPZGTqOMP0divgn0qT_WJ1scT3AY";
        let url = "https://tenor.googleapis.com/v2/featured?key=" +  apikey ;
        console.log(url);

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let myArr = JSON.parse(this.responseText);
                console.log(myArr);
                let i = 0;
                console.log(myArr["results"].length);
                while(i < myArr["results"].length) {
                    let src = myArr["results"][i]["media_formats"]["mediumgif"]["url"];
                    const img = document.createElement("img")
                    img.setAttribute("src",src)
                    tend.appendChild(img)
                    i++;
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

document.addEventListener("DOMContentLoaded", function () {
let apikey = "LIVDSRZULELA";
let lmt = 10;


button.addEventListener ('click', function () {
  let term= text.value;
 let url = "https://g.tenor.com/v1/search?q=" + term + "&key=" +
apikey + "&limit=" + lmt;
console.log(url);
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this. readyState == 4 && this.status == 200) {
        let myArr = JSON.parse (this.responseText);
        console.log(myArr);
        let i = 0;
        console.log(myArr["results"].length);
        while(i < myArr["results"].length) {
            let src = myArr["results"][i]["media"][0]["nanogif"]["url"];
            const img = document.createElement("img")
            img.setAttribute("src",src)
            search.appendChild(img)
            i++;
        }
     }
 };
 xmlhttp.open("GET",url,true);
 xmlhttp.send();
});
});
 