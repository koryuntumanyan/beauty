function f(){
    let mail = document.getElementById('mail');
    mail.addEventListener('keypress', function(event) {
        if (event.keyCode == 13){
            event.preventDefault();
            alert(`Ваша электронная почта ${mail.value} участвует в розыгрыше!`);
        }

    });
}
f();