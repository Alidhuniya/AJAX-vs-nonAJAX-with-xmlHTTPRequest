// Home
const loadHome = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./home.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link1").addEventListener("click", loadHome);

// About
const loadAbout = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./about.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link2").addEventListener("click", loadAbout);

// Contact

// Home
const loadContact = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./contact.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link3").addEventListener("click", loadContact);
