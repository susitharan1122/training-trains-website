// 1. Navigation Page Visibility Logic
function showFormPage() {
    document.getElementById('main-website').style.display = 'none';
    document.getElementById('application-form-page').style.display = 'block';
    window.scrollTo(0, 0);
}

function showMainPage() {
    document.getElementById('application-form-page').style.display = 'none';
    document.getElementById('main-website').style.display = 'block';
    window.scrollTo(0, 0);
}

// 2. Theme Switcher Logic (Dark / Light Mode)
// Page load aagum podhu saved theme Check pannanum
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// DOM load aanadhum button icon-a update pannanum
window.addEventListener('DOMContentLoaded', () => {
    updateThemeButton();
});

// Theme Toggle Function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme !== 'dark') {
        newTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton();
}

// Button Icon & Text Update Logic
function updateThemeButton() {
    const btn = document.getElementById('themeToggleBtn');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (btn) {
        btn.innerHTML = isDark ? '☀️ <span>Light</span>' : '🌙 <span>Dark</span>';
    }
}

// 3. Form Submission Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Fetch values from form
    const fullName = document.getElementById('fullName')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const course = document.getElementById('course')?.value || '';

    if (!fullName || !email || !phone) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Success response
    alert(`Thank you ${fullName}! Your application for ${course || 'the internship'} has been submitted successfully.`);
    
    // Reset form and go back to main page
    event.target.reset();
    showMainPage();
    return false;
}
