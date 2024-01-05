let counter = 0;
const promptMsg = document.getElementById("prompt_msg");
const noBtn = document.getElementById("btn_no");
const noBtnContainer = document.getElementById("btn_no_container");
const noBtnRect = noBtnContainer.getBoundingClientRect();
const wrapper = document.getElementById("wrapper");
const wrapperRect = wrapper.getBoundingClientRect();

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
  } else {
    noBtn.addEventListener("click", () => {
      counter += 1;

      switch (counter) {
        case 0:
          break;
        case 1:
          // are u sure?
          promptMsg.innerHTML = "are u sure? 🤨";
          break;
        case 2:
          // really dw meh?
          promptMsg.innerHTML = "really dw meh? 😕";
          break;
        case 3:
          // i buy u coffee
          promptMsg.innerHTML = "i buy u coffee? ☕ 😏";
          break;
        case 4:
          // i buy u milk tea
          promptMsg.innerHTML = "i buy u milk tea? 🧋 😏";
          break;
        case 5:
          // i buy u ice cream
          promptMsg.innerHTML = "i buy u ice cream? 🍦 😋";
          break;
        case 6:
          // i buy u coffee, milk tea & ice cream
          promptMsg.innerHTML =
            "i buy u coffee, milk tea & ice cream? ☕ 🧋 🍦";
          break;
        case 7:
          // click yes lah 🥺
          promptMsg.innerHTML = "go out with me laaaaa 🥺";
          break;
        case 8:
          // i very nice de 😢
          promptMsg.innerHTML = "i very nice derrrrrr 😢";
          break;
        case 9:
          // i'm not bad guy 😭
          promptMsg.innerHTML = "i'm not 怪叔叔 😭";
          break;
        case 10:
          // ❤️‍🩹
          promptMsg.innerHTML = "❤️‍🩹 ok u made me do this";
          randomizePos();
          break;
        default:
          break;
      }
    });
  }
});
