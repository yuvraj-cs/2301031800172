// Onboarding Slides Navigation
function nextSlide(currentSlideIndex) {
    const currentSlide = document.getElementById(`slide-${currentSlideIndex}`);
    const nextSlideIndex = currentSlideIndex + 1;
    const nextSlide = document.getElementById(`slide-${nextSlideIndex}`);
    
    if (currentSlide && nextSlide) {
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }
}

// Welcome Screen Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Username input handling
    const usernameInput = document.getElementById('username');
    const continueBtn = document.getElementById('continue-btn');
    const userGreeting = document.getElementById('user-greeting');
    
    if (usernameInput && continueBtn) {
        usernameInput.addEventListener('input', function() {
            continueBtn.disabled = !usernameInput.value.trim();
        });
        
        continueBtn.addEventListener('click', function() {
            const username = usernameInput.value.trim();
            if (username) {
                // Store username
                localStorage.setItem('galaxyExplorerUsername', username);
                
                // Update greeting
                if (userGreeting) {
                    userGreeting.textContent = username;
                }
                
                // Show next welcome screen
                const welcomeScreen1 = document.getElementById('welcome-1');
                const welcomeScreen2 = document.getElementById('welcome-2');
                
                if (welcomeScreen1 && welcomeScreen2) {
                    welcomeScreen1.classList.remove('active');
                    welcomeScreen2.classList.add('active');
                }
            }
        });
    }
    
    // Load username if exists
    if (userGreeting) {
        const savedUsername = localStorage.getItem('galaxyExplorerUsername');
        if (savedUsername) {
            userGreeting.textContent = savedUsername;
        }
    }
    
    // Volume slider
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    
    if (volumeSlider && volumeValue) {
        volumeSlider.addEventListener('input', function() {
            volumeValue.textContent = `${volumeSlider.value}%`;
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (darkModeToggle.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });
    }
    
    // Chat functionality
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatContainer = document.getElementById('chat-container');
    
    if (messageInput && sendBtn && chatContainer) {
        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                messageInput.value = '';
                
                // Simulate AI response after a short delay
                setTimeout(() => {
                    const responses = [
                        "That's a great question about space! The universe is vast and full of wonders. Would you like to learn more about specific celestial objects?",
                        "Interesting! Space exploration has revealed many fascinating discoveries. Did you know that there are more stars in the universe than grains of sand on all of Earth's beaches?",
                        "The cosmos is indeed mysterious. Scientists are constantly making new discoveries about galaxies, black holes, and other phenomena."
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    addMessage(randomResponse, 'ai');
                }, 1000);
            }
        }
        
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${timeString}</span>
                </div>
            `;
            
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
});

// Planet slides navigation
function nextPlanet(currentPlanetIndex) {
    const currentPlanet = document.getElementById(`planet-${currentPlanetIndex}`);
    let nextPlanetIndex = currentPlanetIndex + 1;
    
    // Loop back to the first planet if we're at the end
    if (nextPlanetIndex > 3) {
        nextPlanetIndex = 1;
    }
    
    const nextPlanet = document.getElementById(`planet-${nextPlanetIndex}`);
    
    if (currentPlanet && nextPlanet) {
        currentPlanet.classList.remove('active');
        nextPlanet.classList.add('active');
    }
}

// Satellite slides navigation
function nextSatellite(currentSatelliteIndex) {
    const currentSatellite = document.getElementById(`satellite-${currentSatelliteIndex}`);
    let nextSatelliteIndex = currentSatelliteIndex + 1;
    
    // Loop back to the first satellite if we're at the end
    if (nextSatelliteIndex > 3) {
        nextSatelliteIndex = 1;
    }
    
    const nextSatellite = document.getElementById(`satellite-${nextSatelliteIndex}`);
    
    if (currentSatellite && nextSatellite) {
        currentSatellite.classList.remove('active');
        nextSatellite.classList.add('active');
    }
}