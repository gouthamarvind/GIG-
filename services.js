// 1. Create the style element and define the CSS
const style = document.createElement('style');
style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #25a55f;
        display: flex;
        height: 100vh;
    }

    .left-section {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #25a55f;
    }

    .left-section img {
        width: 500px;
        height: 500px;
        object-fit: cover;
    }

    .right-section {
        width: 40%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
        padding: 20px;
    }

    .service-button {
        background-color: white;
        color: #25a55f;
        border: 2px solid #25a55f;
        padding: 40px;
        font-size: 23px;
        font-weight: bold;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        width: 180px;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .service-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);

// 2. Create the main structure
const leftSection = document.createElement('div');
leftSection.className = 'left-section';

const rightSection = document.createElement('div');
rightSection.className = 'right-section';

document.body.appendChild(leftSection);
document.body.appendChild(rightSection);

// 3. Add the logo image to the left section
const logoImage = document.createElement('img');
logoImage.src = 'file:///C:/Users/LENOVO/Desktop/207135203.png';
logoImage.alt = 'Logo';
leftSection.appendChild(logoImage);

// 4. Define the services array
const services = [
    "Home Service",
    "Delivery and Errands",
    "Beauty and Wellness"
];

// 5. Generate buttons dynamically in the right section
services.forEach(service => {
    const button = document.createElement('button');
    button.className = 'service-button';
    button.textContent = service;
    button.onclick = () => alert(`${service} selected!`);
    rightSection.appendChild(button);
});