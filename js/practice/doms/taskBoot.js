var details = [
  {
    name: "Lalji",
    email: "lalji7411@gmail.com",
    phone: 0123456799,
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Ajay",
    email: "test123@gmail.com",
    phone: 0123456799,
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Neeraj",
    email: "check12666@gmail.com",
    phone: 0123456799,
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Ansh",
    email: "formalFashion@gmail.com",
    phone: 0123456799,
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
];
console.log(details[0].name);

function showTable() {

    details.map(ele,index){
        var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var img = document.createElement("img");
    var tr = document.createElement("tr");
    img.src = ele.image;
    img.width = 100;
    img.height = 100;

    var name = ele.name;
    var email = ele.email;
    var phone = ele.phone;
    var address = ele.address;

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(img);
    td.innerText = name;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = address;
    img.innertext = img;
    tablee.appendChild(tr);
    }
  var tablee = document.querySelector("#tbody");
  for (var i = 0; i < details.length; i++) {
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var img = document.createElement("img");
    var tr = document.createElement("tr");
    img.src = details[i].image;
    img.width = 100;
    img.height = 100;

    var name = details[i].name;
    var email = details[i].email;
    var phone = details[i].phone;
    var address = details[i].address;

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(img);
    td.innerText = name;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = address;
    img.innertext = img;
    tablee.appendChild(tr);
  }

  var tables = document.querySelector("#table");
  tables.style.display = "block";
  var show = document.querySelector("#show");
  var hide = document.querySelector("#hide");
  show.disabled = true;
  hide.disabled = false;
}
function hideTable() {
  var tables = document.querySelector("#table");
  tables.style.display = "none";
  var hide = document.querySelector("#hide");
  var show = document.querySelector("#show");
  hide.disabled = true;
  show.disabled = false;
}
