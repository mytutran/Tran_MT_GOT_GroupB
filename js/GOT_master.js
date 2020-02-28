(() => {
  //variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      pauseButton = lightBox.querySelectorAll(".pause-button"),
      rewindButton = lightBox.querySelectorAll(".rewind-button"),
      playButton = lightBox.querySelectorAll(".play-button"),
      closeButton = lightBox.querySelector(".close-button");

  //functions go in the middle -> what do we want our app to do?
  function showLightBox() {
    //show the lightbox on a click
    lightBox.classList.add("show-lightbox");

    //play the lightbox video when it opens
    houseVideo.play();
  }

  function hideLightBox () {
    lightBox.classList.remove("show-lightbox");

    //stop and rewind the lightbox video when it closes
    houseVideo.pause();
    houseVideo.currentTime = 0;
  }

  function rewindVideo () {
    houseVideo.currentTime = 0;
  }

  function pauseVideo () {
    houseVideo.pause();
  }

  function playVideo () {
    houseVideo.play();
  }


  // event handling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  // add some event handling for the lightbox close button
  closeButton.addEventListener("click", hideLightBox);
  pauseButton.forEach(button => button.addEventListener("click", pauseVideo));
  rewindButton.forEach(button => button.addEventListener("click", rewindVideo));
  playButton.forEach(button => button.addEventListener("click", playVideo));
})();
