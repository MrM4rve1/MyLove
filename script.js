function openPhoto(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modalImg.src = img.src;
    modal.style.display = "block";
    setTimeout(function() {
        img.style.filter = "none"; // Убираем размытие с изображения после задержки
    }, 50);
}

function closePhoto() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
