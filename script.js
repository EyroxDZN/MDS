const bouton = document.getElementById('button');
bouton.addEventListener("click" , () => {
    const audio = new Audio('nuclear-bomb-warning.mp3');
    audio.play();
    alert("Alert: Vous avez cliqué sur le bouton !");
});