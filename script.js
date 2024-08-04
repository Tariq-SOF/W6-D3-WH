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
      title.style.fontFamily = "'Times New Roman', Times, serif";
      box.appendChild(title);

      let image = document.createElement("img");
      image.src = books[i].book_image;
      image.id = 'imgg';
      box.appendChild(image);

      let description = document.createElement("h3");
      description.textContent = books[i].description;
      description.id = 'p'; 
      description.style.fontFamily = "'Times New Roman', Times, serif";
      description.style.lineHeight = "1.6";
      description.style.textAlign = "left";
      description.style.fontSize = "90%"; 
      box.appendChild(description);

      containerr.appendChild(box);
    
    }
});
  


let button = document.getElementById("buten");
button.addEventListener("click", () => {
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

    fetch("https://669b7915276e45187d3593df.mockapi.io/signt", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            email : email,
            password: password,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
        window.location.href ="indexx.html";
    });
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}












