(() => {
  //variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      volumeSettings = lightBox.querySelectorAll(".volume-settings"),
      rewindButton = lightBox.querySelectorAll(".rewind-button"),
      playButton = lightBox.querySelectorAll(".play-button"),
      closeButton = lightBox.querySelector(".close-button"),
      currentHouseName = document.querySelector("h1"),
      houseDetails = document.querySelector(".house-info"),
      imageContainer = document.querySelector("#houseImages");

  // order is important here
  const houseData = [
    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],
    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],
    ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],
    ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.

    House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.
    `],
    ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `]
  ];


  function showLightBox(multi, name, source, current, details) {
      //show the lightbox on a click
      lightBox.classList.add("show-lightbox");
      //play the lightbox video when it opens
      let targetSource = `videos/House-${newSource}.mp4`;
      houseVideo.src = targetSource;
      houseVideo.addEventListener("ended", function () {
          hideLightBox();
        })
      houseVideo.load();
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

  function playVideo () {
    if(houseVideo.paused)
            {
                houseVideo.play();
            }
            else
            {
               houseVideo.pause();
            }
  }

  function animateBanners (multiplier, houseName, newSource, currentName, currentDetails, callback) {
    currentHouseName.textContent = currentName;
    houseDetails.textContent = currentDetails;
    let offsetWidth = 600;
    let newPosition = offsetWidth * multiplier;
    imageContainer.style.right = `${newPosition}px`;
  }

  //Volume Settings
  var setVolume = function() { houseVideo.volume = this.value / 100; };
  volumeSettings.forEach(drag => drag.addEventListener("change", setVolume));
  volumeSettings.forEach (drag => drag.addEventListener("input", setVolume));


  // event handling for our sigilButtons
  // animate the banners on a click
  sigilButtons.forEach(button => button.addEventListener("click", function(){
    animateBanners(
      button.dataset.offset,
      houseName = button.className.split(" ")[1],
      newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1),
      `House ${houseData[button.dataset.offset][0]}`,
      `${houseData[button.dataset.offset][1]}`,
      //for animation to finish performing
      setTimeout(showLightBox, 1500)
  );
  }));



  // add some event handling for the lightbox close button
  closeButton.addEventListener("click", hideLightBox);
  rewindButton.forEach(button => button.addEventListener("click", rewindVideo));
  playButton.forEach(button => button.addEventListener("click", playVideo));
})();
