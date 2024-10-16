
function dateF(id) {
    const date = new Date()
    const formateDate = date.toLocaleString('default', { month: 'long', year: 'numeric' })
    document.getElementById(id).innerText = 'Month Of ' + formateDate
}

dateF('date')





// progress bar color random
const data = [
    { label: "Knitting", segments: [50, 25, 25] },
    { label: "Dying", segments: [40, 35, 25] },
    { label: "Finishing", segments: [60, 30, 10] },
    { label: "AOP", segments: [55, 35, 10] },
    { label: "Quality", segments: [45, 40, 15] },
    { label: "Ready for Delivery", segments: [65, 25, 10] }
];

const colors = ['#2AAACB', '#4CAF50', '#FFB400', '#FF5722', '#FFC107', '#E91E63'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createProgressBar(label, segments) {
    const container = document.createElement('div');
    container.classList.add('progress-container');

    const labelElement = document.createElement('div');
    labelElement.classList.add('progress-label');
    labelElement.textContent = label;

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    segments.forEach((width) => {
        const segment = document.createElement('div');
        segment.classList.add('progress-segment');
        segment.style.width = `${width}%`;
        segment.style.backgroundColor = getRandomColor();
        progressBar.appendChild(segment);
    });

    container.appendChild(labelElement);
    container.appendChild(progressBar);
    // document.getElementById('progress-bars-container').appendChild(container);
}

data.forEach(item => {
    createProgressBar(item.label, item.segments);
});



// colups-btn
const colupsBtn = document.getElementById('colups-btn')
const sidebar = document.querySelector('.sidebar')

colupsBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    document.querySelector('.body').classList.toggle('active')
})