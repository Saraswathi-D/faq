const questions = document.querySelectorAll(".question");
const buttons = document.querySelectorAll(".btn");
const faqItems = document.querySelectorAll(".faq-item");

questions.forEach(function(question) {
    question.addEventListener("click", function() {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");
    });
});

function showCategory(selectedCategory) {
    buttons.forEach(function(button) {
        button.classList.toggle(
            "active",
            button.getAttribute("data") === selectedCategory
        );
    });

    faqItems.forEach(function(item) {
        const isSelected = item.getAttribute("data") === selectedCategory;

        item.style.display = isSelected ? "block" : "none";

        if (!isSelected) {
            item.classList.remove("active");
        }
    });
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        showCategory(button.getAttribute("data"));
    });
});

showCategory("java");