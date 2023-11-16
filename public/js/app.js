// app.js

let currentUser = null;

$(document).ready(function () {
    // Check if the user is already logged in
    checkLoggedInUser();
});

function checkLoggedInUser() {
    // Make an AJAX request to check if a user is already logged in
    $.get('/users/check-login', function (response) {
        if (response.username) {
            currentUser = response.username;
            showNotesSection();
            fetchAndDisplayNotes();
        }
    });
}

function showLoginForm() {
    hideAuthForms();
    $('#login-form').show();
}

function showSignupForm() {
    hideAuthForms();
    $('#signup-form').show();
}

function hideAuthForms() {
    $('#login-form').hide();
    $('#signup-form').hide();
}

function login() {
    const username = $('#login-username').val();
    const password = $('#login-password').val();

    // Make an AJAX request to your backend for login
    $.post('login', { username, password }, function (response) {
        currentUser = response.username;

        // After successful login, hide auth forms, show notes section, and fetch notes
        hideAuthForms();
        showNotesSection();
        fetchAndDisplayNotes();
    }).fail(function (error) {
        // Handle login failure, e.g., display an error message
        alert('Login failed. Please check your credentials.');
    });
}

function signup() {
    const username = $('#signup-username').val();
    const password = $('#signup-password').val();

    // Make an AJAX request to your backend for registration
    $.post('/register', { username, password })
        .done(function (response) {
            // Successful registration
            currentUser = response.username;

            // After successful signup, hide auth forms, show notes section, and fetch notes
            hideAuthForms();
            showNotesSection();
            fetchAndDisplayNotes();
        })
        .fail(function (error) {
            // Handle registration failure
            if (error.responseJSON && error.responseJSON.error === 'User already exists') {
                // User already exists, show login form
                showLoginForm();
                alert('User already exists. Please log in.');
            } else {
                // Other registration errors
                alert('Signup failed. Please try again.');
            }
        });
}

// ... (rest of the functions remain the same)
