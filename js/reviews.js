{
    function setReviewsHeight() {
        values.forEach((value) => {
            if (value.classList.contains("active")) {
                reviews.style.height = value.offsetHeight + "px";
            }
        })
    }

    const select = id("choose-service-select");
    const options = id("choose-service-options");

    const reviews = cls(".reviews");
    const values = clss(".value");

    const markValueDiv = cls(".change-mark div");

    const writeReviewBtn = id("write-review-btn");
    const modalWriteReview = cls(".modal-write-review");
    const writeReviewSubmit = id("write-review-submit");
    const closeBtn = id("close-btn");

    const nameInput = id("name");
    const lastNameInput = id("lastname");
    const serviceInput = id("service");
    const markInput = id("mark");
    const messageInput = id("message");


    select.addEventListener("click", (e) => {
        e.stopPropagation();

        select.lastElementChild.classList.toggle("active");
        options.classList.toggle("active");
    })

    document.body.addEventListener("click", (e) => {
        select.lastElementChild.classList.remove("active");
        options.classList.remove("active");
    })

    setReviewsHeight();

    Array.from(options.children).forEach((option) => {
        option.addEventListener("click", (e) => {
            select.firstElementChild.textContent = option.textContent;
            values.forEach((value) => {
                value.classList.toggle("active", value.classList.contains("value" + option.getAttribute("value")));
                setReviewsHeight();
            })
        })
    })

    writeReviewBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        modalWriteReview.style.display = "flex";
    });

    writeReviewSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        modalWriteReview.style.display = "none";

        let serviceValue = serviceInput.value;
        values.forEach((value) => {
            if (value.classList.contains("value" + serviceValue)) {
                const currentDate = new Date();
                value.innerHTML += `<div class="review">
                    <div class="caption">
                        <div class="information">
                            <h3>${nameInput.value} ${lastNameInput.value[0]}.</h3>
                            <p>${currentDate.toLocaleDateString("ru-RU")}</p>
                        </div>
                        <div class="mark">
                            <img src="../images/reviews/star.svg" alt="star">
                            <p>${markInput.value}</p>
                        </div>
                    </div>
                    <p class="message">${messageInput.value}</p>
                </div>`

                select.firstElementChild.textContent = serviceInput.options[serviceInput.selectedIndex].text;

                values.forEach((value) => {
                    value.classList.toggle("active", value.classList.contains("value" + serviceValue));
                    setReviewsHeight();
                })
            }
        })
    })

    markInput.addEventListener("change", () => {
        markValueDiv.textContent = markInput.value;
    });

    closeBtn.addEventListener("click", () => {
        modalWriteReview.style.display = "none";
    })
}

