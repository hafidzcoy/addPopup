var popup = document.querySelector(".popup");
    var dismiss = document.querySelector(".popup__close");
    var join = document.querySelector(".popup__join");

    setTimeout(function(){
        popup.classList.add("popup--show")
    }, 2000);

    dismiss.addEventListener("click", function () {
        console.log("Yahhh kok gitu");
        popup.classList.remove("popup--show");
        popup.classList.add("popup--close");
    });
    join.addEventListener("click", function () {
        console.log("wihhh");
        popup.classList.remove("popup--show");
        popup.classList.add("popup--close");
        alert("Anda tidak akan menyesal!")
    })
