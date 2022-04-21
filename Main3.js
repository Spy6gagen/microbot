const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&rlz=1C5CHFA_enNZ948NZ948&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjC7fvNio31AhU_k4kEHe-MC5wQ_AUoAXoECAIQAw&cshid=1640920882216161&biw=1517&bih=734&dpr=0.9&safe=active&ssui=on"
}