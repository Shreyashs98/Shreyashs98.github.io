document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display user details
    getUserDetails();
});

function getUserDetails() {
    // Device Information
    const deviceTypeSpan = document.getElementById("deviceType");
    const deviceModelSpan = document.getElementById("deviceModel");
    const screenResolutionSpan = document.getElementById("screenResolution");
    const locationSpan = document.getElementById("location");
    const batterySpan = document.getElementById("battery");
    const osSpan = document.getElementById("os");

    deviceTypeSpan.textContent = getDeviceType();
    deviceModelSpan.textContent = getDeviceModel();
    screenResolutionSpan.textContent = getScreenResolution();

    // Browser Information
    const browserNameSpan = document.getElementById("browserName");
    const browserVersionSpan = document.getElementById("browserVersion");
    const userAgentSpan = document.getElementById("userAgent");

    browserNameSpan.textContent = getBrowserName();
    browserVersionSpan.textContent = getBrowserVersion();
    userAgentSpan.textContent = navigator.userAgent;

    // System Language
    const languageSpan = document.getElementById("language");
    languageSpan.textContent = navigator.language;

    // Get Battery Percentage
    navigator.getBattery().then(battery => {
        batterySpan.textContent = `${Math.round(battery.level * 100)}%`;
    });
    // Get Geolocation
    navigator.geolocation.getCurrentPosition(position => {
    locationSpan.textContent = `${position.coords.latitude}, ${position.coords.longitude}`;
    });

    // Listen for keyboard events to get the last typed letter
    const lastTypedLetterSpan = document.getElementById("lastTypedLetter");
    document.addEventListener("keydown", function(event) {
        lastTypedLetterSpan.textContent = event.key;
    });
}

// Function to get device type
function getDeviceType() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}

// Function to get device model (if available)
function getDeviceModel() {
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        return "Apple Device";
    } else if (/Android/.test(navigator.userAgent)) {
        const match = navigator.userAgent.match(/Build\/([^\s]+)/);
        return match ? match[1] : "Android Device";
    } else {
        return "Unknown";
    }
}

// Get Operating System
osSpan.textContent = navigator.platform;

// Function to get screen resolution
function getScreenResolution() {
    return `${screen.width}x${screen.height}`;
}

// Function to get browser name
function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (userAgent.includes("Edg")) {
        return "Microsoft Edge";
    } else if (userAgent.includes("Chrome")) {
        return "Google Chrome";
    } else if (userAgent.includes("Safari")) {
        return "Safari";
    } else {
        return "Unknown Browser";
    }
}

// Function to get browser version
function getBrowserVersion() {
    const userAgent = navigator.userAgent;
    const regex = /(?:Firefox|Edg|Chrome|Safari)[\/ ]([\d.]+)/;
    const match = userAgent.match(regex);
    return match ? match[1] : "Unknown";
}
