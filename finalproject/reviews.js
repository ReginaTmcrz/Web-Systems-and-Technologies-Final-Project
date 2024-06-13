

let reviews = [
    { name: 'Bianca Reine', review: 'Masarap yung manok, like so yummy oh' },
    { name: 'Jenifer Pandacan', review: '5 stars to sakin teh! ansarap' },
    { name: 'Bianca Rosales', review: 'Sobrang sarap huhu' },
];


function displayReviews() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = ''; 
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<p><strong>${review.name}:</strong> "${review.review}"</p>`;
        reviewContainer.appendChild(reviewElement);
    });
}


function addReview(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    reviews.push({ name, review });


    displayReviews();


    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
}


window.onload = function() {
    displayReviews();

    document.getElementById('reviewForm').addEventListener('submit', addReview);
};
