const inputAdd = document.querySelector('.add-input')
const inputMin = document.querySelector('.min-input')
const progressBar = document.querySelector('.progressbar')
const progressBarValue = document.querySelector('.progressbar-value')

// Initialize target value
const target = 300  

// Set initial progress bar state
progressBar.style.width = "0%" 
progressBarValue.style.width = "0%"

// Add all the values from local storage to the page
window.addEventListener('load', () => {
    progress = Number(localStorage.getItem('Percentage')) || 0
    amount = Number(localStorage.getItem('Amount')) || 0
    progressBar.style.width = `${progress}%`
    progressBarValue.style.width = `${progress}%`
    progressBarValue.textContent = `${amount}k`
})

// Add function - adds the input value to the progress
const add = (input) => {
    const inputNum = Number(input)
    amount += inputNum
    
    // Calculate progress percentage based on total amount (300k is 100%)
    progress = (amount / target) * 100
    
    // Update progress bar UI
    progressBar.style.width = `${progress}%`
    progressBarValue.style.width = `${progress}%`
    progressBarValue.textContent = `${amount}k`
    
    // Clear input field
    inputAdd.value = ''

    // Save in local storage
    localStorage.setItem('Percentage', progress)
    localStorage.setItem('Amount', amount)
}

// Function to subtract an amount
const min = (input) => {
    // Convert input to number and subtract from amount
    const inputNum = Number(input)
    amount -= inputNum
    
    // Ensure amount doesn't go below zero
    if (amount < 0) amount = 0
    
    // Calculate progress percentage based on total amount (300k is 100%)
    progress = (amount / target) * 100
    
    // Update progress bar UI
    progressBar.style.width = `${progress}%`
    progressBarValue.style.width = `${progress}%`
    progressBarValue.textContent = `${amount}k`
    
    // Clear input field
    inputMin.value = ''

    // Save in local storage
    localStorage.setItem('Percentage', progress)
    localStorage.setItem('Amount', amount)
}

// Event listeners for input fields
inputAdd.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        add(inputAdd.value)
    }
})

inputMin.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        min(inputMin.value)
    }
})