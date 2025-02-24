const roles = [
    "Python Developer", 
    "Tkinter Expert", 
    "MySQL/DBMS Enthusiast", 
    "Web Developer", 
    "Django Developer", 
    "Data Analyst"
];

let currentRoleIndex = 0;
let currentCharacterIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {

    roleElement.textContent = "";

    const currentRole = roles[currentRoleIndex];
    currentCharacterIndex = 0;

    function typing() {
        if (currentCharacterIndex < currentRole.length) {
            roleElement.textContent += currentRole[currentCharacterIndex];
            currentCharacterIndex++;
            setTimeout(typing, 100); 
        } else {
            setTimeout(deleteRole, 1000); 
        }
    }

    typing();
}

function deleteRole() {
    const currentRole = roles[currentRoleIndex];
    let currentText = currentRole;

    function deleting() {
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            roleElement.textContent = currentText;
            setTimeout(deleting, 50); 
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeRole(); 
        }
    }

    deleting();
}


typeRole();



