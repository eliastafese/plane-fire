
    <!-- JavaScript Logic -->

        const form = document.getElementById('skill-form');
        const input = document.getElementById('skill-value');
        const progressFill = document.getElementById('progress-fill');
        const percentageText = document.getElementById('skill-percentage');

        // Function to update the bar and trigger CSS transition
        function updateSkillBar(value) {
            // Keep value bounded between 0 and 100
            const cleanValue = Math.min(Math.max(value, 0), 100);
            
            // Apply width style to trigger CSS transition animation
            progressFill.style.width = `${cleanValue}%`;
            percentageText.textContent = `${cleanValue}%`;
        }

        // Event listener for form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop page from refreshing
            const newValue = parseInt(input.value, 10);
            updateSkillBar(newValue);
        });

        // Initialize with default value on page load
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                updateSkillBar(input.value);
            }, 200); // Small delay to visualize initial load animation
        });
