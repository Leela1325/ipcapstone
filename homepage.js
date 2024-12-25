document.addEventListener("DOMContentLoaded", () => {
    // Categories and their books
    const categories = {
        fiction: {
            description: "Fiction books ignite your imagination with captivating stories.",
            books: [
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
                { title: "Pride and Prejudice", author: "Jane Austen" },
                { title: "To Kill a Mockingbird", author: "Harper Lee" },
                { title: "1984", author: "George Orwell" },
                { title: "Moby Dick", author: "Herman Melville" }
            ]
        },
        "non-fiction": {
            description: "Non-Fiction books provide knowledge and insights from real-life experiences.",
            books: [
                { title: "Sapiens", author: "Yuval Noah Harari" },
                { title: "Educated", author: "Tara Westover" },
                { title: "Becoming", author: "Michelle Obama" },
                { title: "The Wright Brothers", author: "David McCullough" },
                { title: "Unbroken", author: "Laura Hillenbrand" }
            ]
        },
        mystery: {
            description: "Mystery books are filled with suspense and thrilling mysteries to solve.",
            books: [
                { title: "The Da Vinci Code", author: "Dan Brown" },
                { title: "Gone Girl", author: "Gillian Flynn" },
                { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
                { title: "Sherlock Holmes", author: "Arthur Conan Doyle" },
                { title: "Big Little Lies", author: "Liane Moriarty" }
            ]
        },
        "science-fiction": {
            description: "Science Fiction explores futuristic technology and space adventures.",
            books: [
                { title: "Dune", author: "Frank Herbert" },
                { title: "Ender's Game", author: "Orson Scott Card" },
                { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin" },
                { title: "Neuromancer", author: "William Gibson" },
                { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" }
            ]
        },
        biographies: {
            description: "Biographies tell the life stories of remarkable people.",
            books: [
                { title: "The Diary of a Young Girl", author: "Anne Frank" },
                { title: "Long Walk to Freedom", author: "Nelson Mandela" },
                { title: "Steve Jobs", author: "Walter Isaacson" },
                { title: "The Glass Castle", author: "Jeannette Walls" },
                { title: "Becoming", author: "Michelle Obama" }
            ]
        },
        "childrens-books": {
            description: "Children's books are fun and educational for young readers.",
            books: [
                { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
                { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
                { title: "Matilda", author: "Roald Dahl" },
                { title: "Charlotte's Web", author: "E.B. White" },
                { title: "The Very Hungry Caterpillar", author: "Eric Carle" }
            ]
        }
    };
        // Other categories omitted for brevity
    
    // Author details
    const authorDetails = {
        "F. Scott Fitzgerald": {
            bio: "Francis Scott Key Fitzgerald was an American novelist and short story writer. He is widely regarded as one of the greatest American writers of the 20th century.",
            birthdate: "September 24, 1896",
            nationality: "American",
            notableWorks: ["The Great Gatsby", "Tender Is the Night"]
        },
        "Jane Austen": {
            bio: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry.",
            birthdate: "December 16, 1775",
            nationality: "British",
            notableWorks: ["Pride and Prejudice", "Sense and Sensibility"]
        },
        "Yuval Noah Harari": {
            bio: "Yuval Noah Harari is a historian and philosopher known for his popular books on human history and future, including Sapiens and Homo Deus.",
            birthdate: "February 24, 1976",
            nationality: "Israeli",
            notableWorks: ["Sapiens", "Homo Deus"]
        },
        "J.K. Rowling": {
            bio: "J.K. Rowling is the British author best known for writing the Harry Potter series, which has sold over 500 million copies worldwide.",
            birthdate: "July 31, 1965",
            nationality: "British",
            notableWorks: ["Harry Potter", "Fantastic Beasts"]
        }
    };

    // Handle author clicks for toggling details
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("author-card")) {
            const authorName = event.target.getAttribute("data-author");
            const authorInfo = authorDetails[authorName];

            let authorCard = document.getElementById(`author-details-${authorName}`);
            if (authorCard) {
                authorCard.remove();
            } else {
                const authorDetailsHTML = `
                    <div id="author-details-${authorName}" class="author-card">
                        <h5>${authorName}</h5>
                        <p><strong>Birthdate:</strong> ${authorInfo.birthdate}</p>
                        <p><strong>Nationality:</strong> ${authorInfo.nationality}</p>
                        <p><strong>Notable Works:</strong> ${authorInfo.notableWorks.join(", ")}</p>
                        <p>${authorInfo.bio}</p>
                    </div>
                `;
                event.target.insertAdjacentHTML("afterend", authorDetailsHTML);
            }
        }
    });

    // Handle category clicks
    const categoryCards = document.querySelectorAll(".category-card");
    const categoryDetails = document.getElementById("category-details");
    let activeCategory = null;

    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");

            if (activeCategory === category) {
                categoryDetails.innerHTML = ""; // Hide details if same category is clicked again
                activeCategory = null;
                return;
            }

            activeCategory = category;
            const details = categories[category];
            if (details) {
                categoryDetails.innerHTML = `
                    <div class="category-content">
                        <h3>${category.replace("-", " ").toUpperCase()}</h3>
                        <p class="category-description">${details.description}</p>
                        <div class="books-container">
                            ${details.books
                                .map(
                                    book => `
                                        <div class="book-card">
                                            <h4>${book.title}</h4>
                                            <p><strong>Author:</strong> <span class="author" data-author="${book.author}">${book.author}</span></p>
                                        </div>`
                                )
                                .join("")}
                        </div>
                    </div>
                `;
            }
        });
    });

    // Handle subscribe button functionality
    const subscribeForm = document.getElementById("subscribe-form");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission

            const emailInput = document.getElementById("email-input");
            const subscribeButton = document.getElementById("subscribe-button");

            if (emailInput && emailInput.value.trim() !== "") {
                // Show a confirmation message
                alert("Thank you for subscribing!");

                // Disable the subscribe button
                subscribeButton.textContent = "Subscribed";
                subscribeButton.disabled = true;

                // Clear the email input field
                emailInput.value = "";
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }
   
    const cartButtons = document.querySelectorAll('.add-to-cart');  // Change this to '.add-to-cart'


    
    
    
});
