let button = document.getElementById("checkUser");
let inputText = document.getElementById("user");


button.onclick = async () => {
    let url = `https://api.github.com/users/${inputText.value}`

    let json = await fetch(url)
    .then( async (response) => {
        if( response.status != 200){
            return response.json()
                    .then((data) => data)
                    .catch((error) => error.message)
        }else{
            const err = await response.json();
            return err.message;
        }
    }, errorUrl => {
        return errorUrl.message
    });
}