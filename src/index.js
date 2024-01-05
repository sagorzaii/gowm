let counter = 0;
const promptMsg = document.getElementById("prompt_msg");
const yesBtn = document.getElementById("btn_yes");
const noBtn = document.getElementById("btn_no");
const noBtnContainer = document.getElementById("btn_no_container");
const noBtnRect = noBtnContainer.getBoundingClientRect();
const wrapper = document.getElementById("wrapper");
const wrapperRect = wrapper.getBoundingClientRect();
const sadSong = document.getElementById("sad_song");
const happySong = document.getElementById("happy_song");
const defaultSong = document.getElementById("default_song");
const danceBean = document.getElementById("danceBean");
const shockedBean = document.getElementById("shockedBean");
const sadBean = document.getElementById("sadBean");
const coffeeBean = document.getElementById("coffeeBean");
const teaBean = document.getElementById("teaBean");
const tastyBean = document.getElementById("tastyBean");
const flirtBean = document.getElementById("flirtBean");
const sadBean2 = document.getElementById("sadBean2");
const cryBean = document.getElementById("cryBean");
const laughBean = document.getElementById("laughBean");

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + 1;
};

const randomizePos = () => {
  const randomX = getRandomNumber(noBtnRect.width, wrapperRect.width);
  const randomY = getRandomNumber(noBtnRect.height, wrapperRect.height);
  noBtnContainer.style.transform = `translate(${randomX}px, ${randomY}px)`;
};

noBtnContainer.addEventListener("mouseover", () => {
  if (counter >= 10) {
    randomizePos();
    counter += 1;
  }
  if (counter === 15) {
    cryBean.style.display = "none";
    laughBean.style.display = "block";
    promptMsg.innerHTML = "give up, u can't say NO now HA!";
  }
  if (counter === 20) {
    promptMsg.innerHTML = "won't give up do u? just say YES!";
  }
  if (counter === 25) {
    promptMsg.innerHTML = "u r wasting ur time, say YES.";
  }
  if (counter === 30) {
    promptMsg.innerHTML =
      "wow a persistent person are u? still, wasting time...";
  }
});

noBtn.addEventListener("click", () => {
  counter += 1;
  console.log(counter);
  switch (counter) {
    case 1:
      // are u sure?
      promptMsg.innerHTML = "jinjja??? 🤨";
      shockedBean.style.display = "block";
      break;
    case 2:
      // really dw meh?
      promptMsg.innerHTML = "really dw meh? 😕";
      shockedBean.style.display = "none";
      sadBean.style.display = "block";
      break;
    case 3:
      // i buy u coffee
      promptMsg.innerHTML = "i buy u coffee ☕? 😏";
      sadBean.style.display = "none";
      coffeeBean.style.display = "block";
      break;
    case 4:
      // i buy u milk tea
      promptMsg.innerHTML = "i buy u milk tea 🧋? 😏";
      coffeeBean.style.display = "none";
      teaBean.style.display = "block";
      break;
    case 5:
      // i buy u ice cream
      promptMsg.innerHTML = "i buy u ice cream 🍦? 😋";
      teaBean.style.display = "none";
      tastyBean.style.display = "block";
      break;
    case 6:
      // i buy u coffee, milk tea & ice cream
      promptMsg.innerHTML = "i buy u coffee ☕, milk tea 🧋 & ice cream 🍦?";
      tastyBean.style.display = "none";
      flirtBean.style.display = "block";
      break;
    case 7:
      // click yes lah 🥺
      promptMsg.innerHTML = "go out with me laaaaa 🥺";
      flirtBean.style.display = "none";
      sadBean2.style.display = "block";
      break;
    case 8:
      // i very nice de 😢
      promptMsg.innerHTML = "i'm very nice derrrrrr 😢";
      break;
    case 9:
      // i'm not bad guy 😭
      promptMsg.innerHTML = "i'm not bad guy 😭";
      break;
    case 10:
      // ❤️‍🩹
      promptMsg.innerHTML = "❤️‍🩹 ok u made me do this";
      sadBean2.style.display = "none";
      cryBean.style.display = "block";
      randomizePos();
      break;
    default:
      break;
  }
});

yesBtn.addEventListener("click", () => {
  if (counter === 6) {
    promptMsg.innerHTML = "HAHAHA u greedy girl! But yaayyyy! 🥳";
  } else {
    promptMsg.innerHTML = "YAAAAYYYYYYYYYYYYYYYYYYYYY! 🥳";
  }
  noBtnContainer.style.display = "none";
  yesBtn.style.display = "none";
  danceBean.style.display = "block";
  happySong.play();
  defaultSong.pause();
});

document.body.addEventListener("mousemove", () => {
  defaultSong.play();
});
