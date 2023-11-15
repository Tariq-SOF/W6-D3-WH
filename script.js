fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=RwmReEiR4sAzNzK3QsJRFcnMAfTyDQDV")
  .then(response => response.json())
  .then(data => {
    let containerr = document.getElementById('containerr');
    let books = data.results.books; 

    for (let i = 0; i < books.length; i++) {
      let box = document.createElement('div');
      box.id = "box";

      let title = document.createElement("h3");
      title.textContent = books[i].title;
      title.id = 'p';
      box.appendChild(title);

      let image = document.createElement("img");
      image.src = books[i].book_image;
      image.id = 'imgg';
      box.appendChild(image);

      let description = document.createElement("h3");
      description.textContent = books[i].description;
      description.id = 'p'; 
      box.appendChild(description);

      containerr.appendChild(box);
    
    }
});
  


let button = document.getElementById("buten");
button.addEventListener("click", createAccount);

function createAccount() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username.length < 5) {
        alert("اسم المستخدم يجب أن يحتوي على خمسة أحرف على الأقل");
        return;
    }

    if (email.length === 0 || !validateEmail(email)) {
        alert("البريد الإلكتروني غير صالح");
        return;
    }

    if (password.length < 8) {
        alert("يجب أن تكون كلمة المرور ثمانية أحرف على الأقل");
        return;
    }

    fetch('https://6552c0675449cfda0f2dca61.mockapi.io/books', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("تم إنشاء الحساب بنجاح!");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error(error);
        alert("حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.");
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}









