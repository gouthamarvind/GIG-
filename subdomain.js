document.addEventListener('DOMContentLoaded', function () {
    // Create the header section
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Gig Connects';
    const p = document.createElement('p');
    p.textContent = 'Your one-stop solution for all home services, delivery, and wellness needs!';
    header.appendChild(h1);
    header.appendChild(p);
    document.body.appendChild(header);

    // Create Home Services section
    const homeServicesSection = document.createElement('section');
    homeServicesSection.id = 'home-services';
    const homeServicesHeading = document.createElement('h2');
    homeServicesHeading.textContent = 'Home Services';
    homeServicesSection.appendChild(homeServicesHeading);

    const services = [
        { id: 'electrical', name: 'Electrical', description: 'Prices range from 22-32 matic or 700rs to 1000rs /hr.' },
        { id: 'carpentry', name: 'Carpentry', description: 'prices range from 48-96 matic or 2,000-4,0000 /hr ' },
        { id: 'plumbing', name: 'Plumbing', description: 'Prices range from 6-10 matic or 250rs-400rs /hr ' }
    ];

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.id = service.id;
        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        homeServicesSection.appendChild(serviceCard);
    });

    // Create Delivery and Errands section
    const deliveryErrandsSection = document.createElement('section');
    deliveryErrandsSection.id = 'delivery-errands';
    const deliveryErrandsHeading = document.createElement('h2');
    deliveryErrandsHeading.textContent = 'Delivery and Errands';
    deliveryErrandsSection.appendChild(deliveryErrandsHeading);

    const deliveryService = {
        id: 'pick-up-delivery',
        name: 'Pick Up & Delivery',
        description: 'Prices range from 30rs/km and min weight 10kg.'
    };

    const deliveryCard = document.createElement('div');
    deliveryCard.classList.add('service-card');
    deliveryCard.id = deliveryService.id;
    const deliveryName = document.createElement('h3');
    deliveryName.textContent = deliveryService.name;
    const deliveryDescription = document.createElement('p');
    deliveryDescription.textContent = deliveryService.description;
    deliveryCard.appendChild(deliveryName);
    deliveryCard.appendChild(deliveryDescription);
    deliveryErrandsSection.appendChild(deliveryCard);

    // Create Beauty and Wellness section
    const beautyWellnessSection = document.createElement('section');
    beautyWellnessSection.id = 'beauty-wellness';
    const beautyWellnessHeading = document.createElement('h2');
    beautyWellnessHeading.textContent = 'Beauty and Wellness';
    beautyWellnessSection.appendChild(beautyWellnessHeading);

    const beautyServices = [
        { id: 'saloon-men', name: 'Saloon for Men', description: '150rs' },
        { id: 'saloon-women', name: 'Saloon for Women', description: '350rs'},
        { id: 'saloon-kids', name: 'Saloon for Kids', description: '100rs' }
    ];

    beautyServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.id = service.id;
        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        beautyWellnessSection.appendChild(serviceCard);
    });

    // Append all sections to the body
    const container = document.createElement('div');
    container.classList.add('service-container');
    container.appendChild(homeServicesSection);
    container.appendChild(deliveryErrandsSection);
    container.appendChild(beautyWellnessSection);
    document.body.appendChild(container);

    // Create footer section
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent = '© 2024 Gig Connects | All rights reserved';
    footer.appendChild(footerText);
    document.body.appendChild(footer);

    // Add CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            text-align: center;
            background-color: #25a55f;
            padding: 50px 20px;
            color: white;
        }

        h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }

        p {
            font-size: 18px;
        }

        .service-container {
            display: flex;
            justify-content: space-around;
            margin-top: 40px;
            padding: 0 20px;
        }

        section {
            flex: 1;
            margin: 0 20px;
        }

        h2 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 30px;
            color: #25a55f;
        }

        .service-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 15px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #25a55f;
        }

        .service-card p {
            font-size: 16px;
            color: #555;
        }

        .service-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #25a55f;
            color: white;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});
