const headerName = document.querySelector('.header-date h2 span')

//gauge
const value = 12000;
const min = 0;
const max = 20000;
const percentage = (value - min) / (max - min);
const circumference = Math.PI * 40;
const offset = circumference * (1 - percentage);
const rotation = percentage * 180 - 90; // -90 to start at the far left
const fillArc = document.querySelector('.gauge-fill');
const needle = document.querySelector('.gauge-needle');
const valueText = document.querySelector('.gauge-value');
const maxText = document.querySelector('.gauge-max');

function setHeaderName(user) {
    headerName.textContent = user.fullName.split(' ')[0]
}
setHeaderName(user)

function updateGauge(value, min, max) {
    const fillArc = document.querySelector('.gauge-fill');
    const needle = document.querySelector('.gauge-needle');
    const valueText = document.querySelector('.gauge-value');
    const maxText = document.querySelector('.gauge-max');

    const circumference = fillArc.getTotalLength();

    // Calculate progress percentage 0-1
    const percentage = (value - min) / (max - min);

    // Calculate stroke dashoffset (matches progress bar fill)
    const offset = circumference * (1 - percentage);
    fillArc.style.strokeDashoffset = offset;

    // Needle rotation range
    const needleStartAngle = 135;  // your needle start rotation angle
    const needleEndAngle = -45;    // your needle end rotation angle

    // Calculate fraction based on offset
    const progressFraction = 1 - (offset / circumference);

    // Calculate needle rotation to follow the bar perfectly
    const rotation = needleStartAngle + progressFraction * (needleEndAngle - needleStartAngle);

    needle.style.transform = `rotate(${rotation}deg)`;

    // Update texts
    valueText.textContent = `$${(value / 1000).toFixed(0)}K`;
    maxText.textContent = `$${(max / 1000).toFixed(0)}k`;
}





// Call the function with your desired values
// Example: A value of 12000, a minimum of 0, and a maximum of 20000
updateGauge(12000, 0, 50000);