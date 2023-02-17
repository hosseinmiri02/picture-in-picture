const videoEl = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    console.error(err);
  }
};

btn.addEventListener("click", async () => {
  // Disable Button
  btn.disabled = true;
  //   Start Picture in Picture
  await videoEl.requestPictureInPicture();
  //   Reset Button
  btn.disabled = false;
});

// On Load
selectMediaStream();
