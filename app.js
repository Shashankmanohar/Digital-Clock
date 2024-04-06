const clocks = document.querySelectorAll('.clock');

const getTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
    
};

const updateClocks = () => {
    clocks.forEach((clock) => {
        clock.innerHTML = getTime();
    });
};

setInterval(updateClocks, 1000);
