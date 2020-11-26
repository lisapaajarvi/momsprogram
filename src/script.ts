window.addEventListener("load", main)

let selectedMoms = 1.25;

function main() {
    addEventListeners();

}

function addEventListeners() {
    const button25 = document.getElementById("moms25");
    const button12 = document.getElementById("moms12");
    const button6 = document.getElementById("moms6");

    button25?.addEventListener("click", applyMoms25);
    button12?.addEventListener("click", applyMoms12);
    button6?.addEventListener("click", applyMoms6);

}

function applyMoms25(event: MouseEvent) {
selectedMoms = 1.25;
updateButtonsUI(event);
}

function applyMoms12(event: MouseEvent) {
    selectedMoms = 1.12;
    updateButtonsUI(event);
}

function applyMoms6(event: MouseEvent) {
    selectedMoms = 1.06;
    updateButtonsUI(event);
}

function updateButtonsUI(event) {
    const activeButton = event.target as HTMLButtonElement;
    activeButton.classList.add("active")
}