import "./styles.scss"

window.addEventListener("scroll", () => {
  // Получаем элемент навигационной панели
  const navbar = document.querySelector(".navbar")

  // Проверяем, превышает ли текущая позиция прокрутки заданное значение
  if (window.scrollY > 50) {
    // Если да, добавляем класс, который изменит стиль навигационной панели
    navbar.classList.add("scrolled")
  } else {
    // В противном случае удаляем класс
    navbar.classList.remove("scrolled")
  }
})
