function submitForm() {
  // Отримуємо значення полів форми
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var option1 = document.getElementById("option1").checked;
  var option2 = document.getElementById("option2").checked;
  var option3 = document.getElementById("option3").checked;
  var message = document.getElementById("message").value;

  // Виводимо значення полів на консоль
  console.log("Ім'я: " + name);
  console.log("Email: " + email);
  console.log("Опція 1: " + option1);
  console.log("Опція 2: " + option2);
  console.log("Опція 3: " + option3);
  console.log("Коментар: " + message);

  // Запобігаємо відправленню форми на сервер
  return false;
}
