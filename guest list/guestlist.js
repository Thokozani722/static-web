// Define the guestNames array to store guest names
let guestNames = [];

// Function to display the guest list in the console
function displayGuestList() {
    const listElement = document.getElementById('guestList');
    listElement.innerHTML = ''; // Clear the list
    guestNames.forEach((name, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index}: ${name}`;
        listElement.appendChild(listItem);
    });
}

// Function to add a new guest to the list
function addGuest(event) {
    event.preventDefault(); // Prevent form submission
    const newGuestInput = document.getElementById('newGuestName');
    const newGuest = newGuestInput.value;
    newGuestInput.value = ''; // Clear the input field

    if (guestNames.length < 10) {
        guestNames.push(newGuest);
        alert(`${newGuest} has been added to the guest list.`);
    } else {
        guestNames.push(newGuest); // Temporarily add the eleventh guest
        const eleventhGuest = guestNames.pop(); // Remove and save the eleventh guest
        const replaceIndex = prompt("Enter the index (0-9) of the guest to replace:");
        if (replaceIndex >= 0 && replaceIndex < 10) {
            guestNames.splice(replaceIndex, 1, eleventhGuest);
            alert(`Guest at index ${replaceIndex} has been replaced with ${eleventhGuest}.`);
        } else {
            alert("Invalid index. No changes made to the guest list.");
        }
    }
    displayGuestList();
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const addGuestForm = document.getElementById('addGuestForm');
    addGuestForm.addEventListener('submit', addGuest);
});

