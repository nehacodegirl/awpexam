let submit = function(btn){

    // username

    let username= btn.parentElement.parentElement.children[1].children[1];

    const userinput = btn.parentElement.parentElement.children[1].children[0];

    username.innerHTML = userinput.value;

    // password

    let pwd = btn.parentElement.parentElement.children[2].children[1];

    const pwdinput = btn.parentElement.parentElement.children[2].children[0];

    pwd.innerHTML = pwdinput.value;

    // Emailid

    let email = btn.parentElement.parentElement.children[3].children[1];

    const idinput = btn.parentElement.parentElement.children[3].children[0];

    email.innerHTML = idinput.value;

    // clear input 

    userinput.value="";
    pwdinput.value="";
    idinput.value="";

}