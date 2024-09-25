function showAnimation(animationName) {
    document.getElementById('animationName').innerText = animationName;
    const buttonIcon = document.querySelector('.button-icon');

    // Remove previous animations
    buttonIcon.classList.remove('rotate'); // Remove any previous rotation

    // Trigger reflow to restart the animation
    void buttonIcon.offsetWidth; // This forces a reflow

    if (animationName === 'Rotate') {
        buttonIcon.classList.add('rotate'); // Add rotation class
    }

    // Additional animation logic can be added here for other animations
}