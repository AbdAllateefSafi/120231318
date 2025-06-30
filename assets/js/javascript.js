
// Get the button:
let mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTop").style.display = "block";
  } else {
    document.getElementById("scrollTop").style.display = "none";
  }
} 

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Dark Mood
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
  let isDark = document.body.classList.toggle('dark-mode');
  document.getElementById("services").style.backgroundColor = "#f8f2ed";
  document.getElementById("services").style.color = "black";
  document.getElementsByClassName("item")[0].style.backgroundColor = "white";
  document.getElementsByClassName("item")[0].style.color = "black";
  document.getElementsByClassName("item")[1].style.backgroundColor = "white";
  document.getElementsByClassName("item")[1].style.color = "black";
  document.getElementsByClassName("item")[2].style.backgroundColor = "white";
  document.getElementsByClassName("item")[2].style.color = "black";
  document.getElementsByClassName("item")[3].style.backgroundColor = "white";
  document.getElementsByClassName("item")[3].style.color = "black";
  document.getElementsByClassName("item")[4].style.backgroundColor = "white";
  document.getElementsByClassName("item")[4].style.color = "black";
  document.getElementsByClassName("item")[5].style.backgroundColor = "white";
  document.getElementsByClassName("item")[5].style.color = "black";

  document.getElementById("blog").style.backgroundColor = "#f8f2ed";
  document.getElementById("blog").style.color = "black";
  document.getElementsByClassName("itemBlog")[0].style.backgroundColor = "white";
  document.getElementsByClassName("itemBlog")[0].style.color = "black";
  document.getElementsByClassName("itemBlog")[1].style.backgroundColor = "white";
  document.getElementsByClassName("itemBlog")[1].style.color = "black";
  document.getElementsByClassName("itemBlog")[2].style.backgroundColor = "white";
  document.getElementsByClassName("itemBlog")[2].style.color = "black";
  document.getElementsByClassName("itemBlog")[3].style.backgroundColor = "white";
  document.getElementsByClassName("itemBlog")[3].style.color = "black";

  document.getElementsByClassName("homeLink")[0].style.color = "black";
  document.getElementsByClassName("homeLink")[1].style.color = "black";
  document.getElementsByClassName("homeLink")[2].style.color = "black";
  document.getElementsByClassName("homeLink")[3].style.color = "black";
  document.getElementsByClassName("homeLink")[4].style.color = "black";
  document.getElementsByClassName("homeLink")[5].style.color = "black";
  document.getElementsByClassName("homeLink")[6].style.color = "black";

  if (isDark) {
    document.getElementById("services").style.backgroundColor = "#111111";
    document.getElementById("services").style.color = "#ffffff";
    document.getElementsByClassName("item")[0].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[0].style.color = "white";
    document.getElementsByClassName("item")[1].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[1].style.color = "white";
    document.getElementsByClassName("item")[2].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[2].style.color = "white";
    document.getElementsByClassName("item")[3].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[3].style.color = "white";
    document.getElementsByClassName("item")[4].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[4].style.color = "white";
    document.getElementsByClassName("item")[5].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("item")[5].style.color = "white";

    document.getElementById("blog").style.backgroundColor = "#111111";
    document.getElementById("blog").style.color = "#ffffff";
    document.getElementsByClassName("itemBlog")[0].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("itemBlog")[0].style.color = "#ffffff";
    document.getElementsByClassName("itemBlog")[1].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("itemBlog")[1].style.color = "#ffffff";
    document.getElementsByClassName("itemBlog")[2].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("itemBlog")[2].style.color = "#ffffff";
    document.getElementsByClassName("itemBlog")[3].style.backgroundColor = "#0c0c0c";
    document.getElementsByClassName("itemBlog")[3].style.color = "#ffffff";
    document.getElementsByClassName("homeLink")[0].style.color = "white";
    document.getElementsByClassName("homeLink")[1].style.color = "white";
    document.getElementsByClassName("homeLink")[2].style.color = "white";
    document.getElementsByClassName("homeLink")[3].style.color = "white";
    document.getElementsByClassName("homeLink")[4].style.color = "white";
    document.getElementsByClassName("homeLink")[5].style.color = "white";
    document.getElementsByClassName("homeLink")[6].style.color = "white";
  }
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// On page load
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebar');
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (sidebar && openMenu && closeMenu) {
    openMenu.addEventListener('click', () => {
      sidebar.classList.add('active');
      sidebar.classList.add('w100');
    });

    closeMenu.addEventListener('click', () => {
      sidebar.classList.remove('active');
      sidebar.classList.remove('w100');

    });
  }
});

