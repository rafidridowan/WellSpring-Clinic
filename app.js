// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// BMI Calculator
let isMetric = true;
const metricBtn = document.getElementById('metric-btn');
const imperialBtn = document.getElementById('imperial-btn');

metricBtn.addEventListener('click', () => {
    isMetric = true;
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    document.getElementById('height').placeholder = 'Enter height in cm';
    document.getElementById('weight').placeholder = 'Enter weight in kg';
});

imperialBtn.addEventListener('click', () => {
    isMetric = false;
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    document.getElementById('height').placeholder = 'Enter height in inches';
    document.getElementById('weight').placeholder = 'Enter weight in pounds';
});

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }
    
    let bmi;
    if (isMetric) {
        // Metric: kg/m²
        bmi = weight / Math.pow(height / 100, 2);
    } else {
        // Imperial: (lb * 703) / in²
        bmi = (weight * 703) / Math.pow(height, 2);
    }
    
    const result = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    
    bmiValue.textContent = `Your BMI is ${bmi.toFixed(1)}`;
    
    if (bmi < 18.5) {
        bmiCategory.textContent = 'Category: Underweight';
        result.style.backgroundColor = '#ffc107';
        result.style.color = '#000';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.textContent = 'Category: Normal';
        result.style.backgroundColor = '#28a745';
        result.style.color = '#fff';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.textContent = 'Category: Overweight';
        result.style.backgroundColor = '#ff6b6b';
        result.style.color = '#fff';
    } else {
        bmiCategory.textContent = 'Category: Obese';
        result.style.backgroundColor = '#dc3545';
        result.style.color = '#fff';
    }
    
    result.style.display = 'block';
}

// Form Submissions
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your appointment request has been received. We will contact you shortly to confirm.');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will respond as soon as possible.');
    this.reset();
});
