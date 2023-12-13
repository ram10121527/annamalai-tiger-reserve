function redirectToPackages() {
    // Show packages content and hide main content
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('packages-content').style.display = 'block';
}

function goBack() {
    // Show main content and hide packages content
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('packages-content').style.display = 'none';
}

function selectPackage(packageNumber) {
    // Show booking details section
    document.getElementById('booking-details').style.display = 'block';

    // Clear existing package details
    document.getElementById('package-details').innerHTML = "";

    // Display package details based on the selected package
    switch (packageNumber) {
        case 1:
            displayPackageDetails("Package 1", "Tiger + Elephant Safari", "Includes a thrilling tiger safari and an exciting elephant ride.");
            break;
        case 2:
            displayPackageDetails("Package 2", "Tiger + Bear Safari", "Experience the majestic tigers along with an encounter with bears in their natural habitat.");
            break;
        case 3:
            displayPackageDetails("Package 3", "Tiger + Rhino Safari", "Embark on an adventure with tigers and witness the powerful rhinos up close.");
            break;
        default:
            // Handle unknown package
            break;
    }
}

function displayPackageDetails(packageName, safariDetails, packageDescription) {
    const detailsContainer = document.getElementById('package-details');

    const detailsHTML = `
    <h3>${packageName}</h3>
    <p><strong>Safari Details:</strong> ${safariDetails}</p>
    <p><strong>Description:</strong> ${packageDescription}</p>
  `;

    detailsContainer.innerHTML = detailsHTML;
}

function bookPackage() {
    const quantity = document.getElementById('quantity').value;
    const age = document.getElementById('age').value;

    if (age >= 5 && age < 65) {
        const totalPrice = quantity * 200;
        const confirmation = confirm(`You have booked ${quantity} ticket(s). Total amount: Rs. ${totalPrice}. Do you want to proceed?`);

        if (confirmation) {
            alert("Booking confirmed! Enjoy your safari!");
            // Additional logic for booking confirmation or redirection.
        } else {
            alert("Booking canceled.");
        }
    } else {
        alert("Sorry, you are not allowed. Participants must be above 5 and below 65 years old.");
    }
}