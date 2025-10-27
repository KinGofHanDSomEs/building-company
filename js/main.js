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