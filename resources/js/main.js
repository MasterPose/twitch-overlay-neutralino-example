function nearest169Ratio(width, height) {
    const currentRatio = width / height;
    const targetRatio = 16 / 9;

    if (currentRatio === targetRatio) return { width, height };

    // Calculate the new width and height
    if (currentRatio > targetRatio) {
        // Case 1: current ratio is wider than 16:9, adjust height
        const newHeight = Math.round(width / targetRatio);
        return { width, height: newHeight };
    }

    // Case 2: current ratio is taller than 16:9, adjust width
    const newWidth = Math.round(height * targetRatio);
    return { width: newWidth, height };
}

async function resizeTo169() {
    return Neutralino.window.getSize().then((size) => {
        const { width, height } = nearest169Ratio(size.width, size.height);
        Neutralino.window.setSize({ width, height });
    });
}



const TRAY = {
    SHOW: {
        name: "Open",
        action: () => {
            if (NL_OS == 'Linux') return Neutralino.window.maximize();

            Neutralino.window.show()
        }
    },
    QUIT: {
        name: "Quit",
        action: () => Neutralino.app.exit()
    }
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", (e) => {
    const action = TRAY[e.detail.id]?.action;

    if (action) action();
});

Neutralino.events.on("windowClose", () => {
    if (NL_OS == 'Linux') return Neutralino.app.exit();

    Neutralino.window.hide();
});

let doit;
window.addEventListener('resize', () => {
    clearTimeout(doit);
    doit = setTimeout(() => {
        resizeTo169()
    }, 500);
});


if (NL_OS != "Darwin") {
    Neutralino.os.setTray({
        icon: "/resources/icons/trayIcon.png",
        menuItems: Object.keys(TRAY).map((id) => ({
            id,
            text: TRAY[id].name
        }))
    });
}

resizeTo169();

if (NL_OS == 'Linux') {
    Neutralino.window.minimize();
} else {
    Neutralino.window.hide();
}