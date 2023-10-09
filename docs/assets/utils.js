function HideShowElement(eltId) {
    var x = document.getElementById(eltId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// https://jennieablog.github.io/2020/06/20/coding-a-theme-switch.html

function changeTheme() {
    const theme_switch = document.getElementById("theme-switch");
    if (theme_switch.checked) {
        DarkReader.enable();
    }
    else {
        DarkReader.disable();
    }
}

function changeTheme() {
    const theme_switch = document.getElementById("theme-switch");
    if (theme_switch.checked) {
        DarkReader.enable();
        // Add the ff. line to write to memory.
        localStorage.setItem("my-theme", "dark");
    }
    else {
        DarkReader.disable();
        // Add the ff. line to write to memory.
        localStorage.setItem("my-theme", null);
    }
}

// Check local storage every reload to know which theme to use.
if (localStorage.getItem("my-theme") === "dark") {
    // Use dark theme.
    DarkReader.enable();
}
else {
    // Use default theme.
    DarkReader.disable();
}