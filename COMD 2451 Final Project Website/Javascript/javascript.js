function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}

// Array of image paths
    var images = [
        'assets/Lauren-ref-thumbnail.jpg',
        'images/pic2.jpg',
        'images/pic3.jpg',
        'images/pic4.jpg'
    ];

    // Function to get a random image source
    function getRandomImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Set the source of the image element
    document.getElementById('randomImage').src = getRandomImage();