import style from './styles.scss';


function displayMenu() {
    document.getElementById("menu").style.display = "block";
}

function hideMenu() {
    document.getElementById("menu").style.display = "none";
}

document.getElementById("burger").addEventListener("click", displayMenu);
document.getElementById("hide").addEventListener("click", hideMenu); 