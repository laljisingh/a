let genders = [];

var details = [
  {
    name: "Lalji",
    email: "lalji7411@gmail.com",
    phone: 0123456799,
    gender: "female",
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Ajay",
    email: "test123@gmail.com",
    phone: 0123456799,
    gender: "male",
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Neeraj",
    email: "check12666@gmail.com",
    phone: 0123456799,
    gender: "female",
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
  {
    name: "Ansh",
    email: "formalFashion@gmail.com",
    phone: 0123456799,
    gender: "male",
    address: "Prayagraj",
    image: "https://explore.zoom.us/docs/image/switch2annual.gif",
  },
];

function showTable() {
  var tablee = document.querySelector("#tbody");

  for (var i = 0; i < details.length; i++) {
    var td = document.createElement("td");

    // console.log(td);
    var td2 = document.createElement("td");

    var td3 = document.createElement("td");

    var td4 = document.createElement("td");

    var td5 = document.createElement("td");
    td5.id = "g" + i;
    td5.innerHTML = details[i].gender;

    var img = document.createElement("img");

    var tr = document.createElement("tr");
    tr.id = "tr" + (i + 1);
    var id = tr.id;

    img.src = details[i].image;
    img.width = 100;
    img.height = 100;

    var name = details[i].name;
    var email = details[i].email;
    var phone = details[i].phone;
    var gender = details[i].gender;
    var address = details[i].address;

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td5);
    tr.appendChild(td4);
    tr.appendChild(img);

    td.innerText = name;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = address;
    td5.innerText = gender;
    img.innertext = img;
    tablee.appendChild(tr);

    genders.push(id);
  }

  var tables = document.querySelector("#table");
  tables.style.display = "block";
  var show = document.querySelector("#show");
  var hide = document.querySelector("#hide");
  show.disabled = true;
  hide.disabled = false;
}

function filter(val0) {
  console.log(genders);
  for (let l = 0; l < genders.length; l++) {
    const element = genders[l];
    console.log(element);
    element.getElementsById("#g0");
    console.log(element);
  }

  if (val0 == "male") {
    document.getElementById("tr1").style.display = "none";
    document.getElementById("tr3").style.display = "none";

    document.getElementById("tr2").style.display = "block";
    document.getElementById("tr4").style.display = "block";
  }
  if (val0 == "female") {
    document.getElementById("tr2").style.display = "none";
    document.getElementById("tr4").style.display = "none";
    document.getElementById("tr1").style.display = "block";
    document.getElementById("tr3").style.display = "block";
  }
  if (val0 == "all") {
    document.getElementById("tr1").style.display = "block";
    document.getElementById("tr2").style.display = "block";
    document.getElementById("tr3").style.display = "block";
    document.getElementById("tr4").style.display = "block";
  }
}

function hideTable() {
  var tables = document.querySelector("#table");

  tables.style.display = "none";

  var tr4 = document.getElementById("tr4");
  // console.log(tr4);
  var tr1 = document.getElementById("tr1");
  var tr2 = document.getElementById("tr2");
  var tr3 = document.getElementById("tr3");

  var hide = document.querySelector("#hide");
  var show = document.querySelector("#show");
  hide.disabled = true;
  show.disabled = false;

  tr1.remove();
  tr2.remove();
  tr3.remove();
  tr4.remove();
}
