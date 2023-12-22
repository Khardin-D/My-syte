document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".categories-card");

  function Scrollin() {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isCardVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isCardVisible) {
        card.classList.add("categories-card-active");
      } else {
        card.classList.remove("categories-card-active");
      }
    });
  }

  window.addEventListener("scroll", Scrollin);
  Scrollin(); // Обработка при загрузке страницы
});

// Clock
let myDay = "2023-12-25T00:00:00";
let endDate = new Date(myDay);

function updateTimer() {
  let now = new Date();
  let timeDifference = endDate - now;

  if (timeDifference > 0) {
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем значения в HTML
    document.getElementById("1").textContent = padZero(hours);
    document.getElementById("2").textContent = padZero(minutes);
    document.getElementById("3").textContent = padZero(seconds);
  } else {
    // Если время вышло, можно выполнить какие-то действия
    document.getElementById("1").textContent = "00";
    document.getElementById("2").textContent = "00";
    document.getElementById("3").textContent = "00";
  }
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);

// ?    Вызываем функцию в первый раз, чтобы сразу отобразить корректное значение

updateTimer();

let emailValues = [];

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".subscribe-title-folover span");

  // !             Перебераем масив кнопок
  buttons.forEach((buton) => {
    buton.addEventListener("click", () => {
      const emailValu = document.querySelectorAll('input[name="email"]');
      emailValu.forEach((val) => {
        //?        В а = мы изымаем содержимое из имейлов

        let a = val.value.trim();
        if (a != "") {
          emailValues.push(a);
          val.value = "";
          setLoadData();
        }
      });
    });
  });
});

// ?                Сохраняем в локальную сеть под ключем myData

function setLoadData() {
  const data = emailValues;
  localStorage.setItem("myData", JSON.stringify(data));
  // Через 2 минуты локальное хранилище очишаеться по ключу
  setInterval(() => {
    localStorage.removeItem("myData");
  }, 120000);
}

function getParseData() {
  const data2 = localStorage.getItem("myData");
  if (data2) {
    const parsedData = JSON.parse(data2);
    return parsedData;
  }
}

function showMass() {
  console.log(getParseData());
}
