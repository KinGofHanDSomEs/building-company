// select
{
    const legend = cls(".legend");
    const select = cls(".select");
    const headerCity = id("header-city");
    const cities = clss(".projects");
    const projectsContainer = cls(".projects-container");

    function toggleClassOpened() {
        select.classList.toggle("opened");
        legend.lastElementChild.classList.toggle("opened");
    }

    function removeClassOpened() {
        select.classList.remove("opened");
        legend.lastElementChild.classList.remove("opened");
    }

    document.body.addEventListener("click", () => {
        removeClassOpened();
    })

    legend.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleClassOpened();
    });

    for (const option of select.childNodes) {
        option.addEventListener("click", () => {
            let selectedCity = option.textContent;
            let selectedValue = option.getAttribute("value");
            legend.firstElementChild.innerHTML = selectedCity;
            removeClassOpened();

            headerCity.textContent = selectedCity;

            cities.forEach((city) => {
                city.classList.toggle("active", city.classList.contains(selectedValue));
            });
        });
    }
}

// images
{

    clss(".images-container").forEach((container) => {
        const images = container.querySelectorAll("img");
        const progresses = container.querySelectorAll(".progress-bar .progress");
        const totalImages = images.length;

        function removeAllActiveProgress() {
            progresses.forEach((progress) => {
                progress.classList.remove('active');
            })
        }

        container.addEventListener("mousemove", (event) => {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const width = rect.width;

            const zoneWidth = width / totalImages;
            const currentZone = Math.floor(x / zoneWidth);

            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentZone);
            })
            progresses.forEach((progress, index) => {
                progress.classList.toggle('active', index === currentZone);
            })
        })

        container.addEventListener("mouseleave", () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === 0);
            })
            progresses.forEach((progress, index) => {
                progress.classList.toggle('active', index === 0);
            })
        })
    })
}