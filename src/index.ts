import * as holidays from 'swedish-holidays'

// Define roles and their corresponding decimals to populate frontend
const roles: { [key: string]: number } = {
    "Developer": 0.9,
    "Product Manager": 0.7,
    "Operations Manager": 0.2,
    // Add other roles here
  };

  // List of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function calculateTotal(role: string, daysOff: number, year?: number, month?: number): number {
    const decimal = roles[role];

    const currentDate = new Date();
    year = year || currentDate.getFullYear();
    month = month !== undefined ? month : currentDate.getMonth(); // Use current month if not provided
    const workdays = getWeekdaysInMonth(year, month) - daysOff;

    return (workdays * 8) * decimal;
  }

// Function to calculate the number of weekdays in a month (month is zero-based index)
function getWeekdaysInMonth(year: number, month: number): number {

    const startDate = new Date(year, month);
    const endDate = new Date(year, month + 1, 0);
    let weekdays = 0;

    while (startDate <= endDate) {
        const dayOfWeek = startDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays.isHoliday(startDate)) { // Exclude Sunday and Saturday and holidays
            weekdays++;
        }
        startDate.setDate(startDate.getDate() + 1);
    }

    return weekdays;
}

console.log(calculateTotal("Developer", 0, 2024,5))




document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('roleSelect') as HTMLSelectElement;
    const daysOffInput = document.getElementById('daysOffInput') as HTMLInputElement;
    const monthSelect = document.getElementById('monthSelect') as HTMLSelectElement;
    const yearInput = document.getElementById('yearInput') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const resultElement = document.getElementById('result') as HTMLDivElement;

    // Populate the select element with options from the 'roles' object
    for (const role in roles) {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        selectElement.appendChild(option);
    }

    // Populate the month select element with month names
    monthNames.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Set default values for month and year
    const currentDate = new Date();
    monthSelect.value = currentDate.getMonth().toString();
    yearInput.value = currentDate.getFullYear().toString();

    // Add event listener to the submit button
    submitButton.addEventListener('click', () => {
        const selectedRole = selectElement.value;
        const daysOff = parseInt(daysOffInput.value, 10);
        const month = parseInt(monthSelect.value, 10);
        const year = parseInt(yearInput.value, 10);

        const total = calculateTotal(selectedRole, daysOff, year, month);
        resultElement.textContent = `Total: ${total} hours`;
    });
});