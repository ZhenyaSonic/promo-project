document.addEventListener("DOMContentLoaded", () => {

    const promoData = [
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png" },
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png" },
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png" },
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png" },
        // Эти 2 карточки должны быть видны только на планшетах
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png", isTabletOnly: true },
        { title: "Скидка 10% для пенсионеров", description: "Новая акция для наших гостей пенсионного возраста", imgSrc: "img/picture-offers.png", isTabletOnly: true },
    ];

    // Контейнер, куда будем вставлять карточки
    const promoGrid = document.getElementById("promo-grid");

    promoData.forEach((item, index) => {
        const visibilityClasses = item.isTabletOnly 
            ? 'd-none d-md-block d-lg-none' 
            : '';

        const cardHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 ${visibilityClasses}">
                <div class="promo-card-wrapper">

                    <div class="promo-card nebo">
                        <img src="${item.imgSrc}" alt="${item.title}" class="promo-card-img">
                        <div class="promo-card-body">
                            <h3 class="promo-card-title">${item.title}</h3>
                            <p class="promo-card-text">${item.description}</p>
                        </div>
                    </div>

                    <a href="#" class="promo-card-arrow">
                        <img src="img/vector-offers.svg" alt="Перейти">
                    </a>
                </div>
            </div>
        `;

        promoGrid.innerHTML += cardHTML;
    });
});