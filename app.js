// Define possible responses for different user inputs
const responses = {
    "hello": "Hey there! How's it going? 💖",
    "how are you": "I'm doing great, love! How about you? 😘",
    "i miss you": "I miss you too! Can’t wait to see you ❤️",
    "good morning": "Good morning, beautiful! 🌞",
    "good night": "Sweet dreams, my love! 😴",
    "love you": "I love you more than anything! 💕",
    "you are beautiful": "No, YOU are beautiful! 😍",
    "how much do you love me": "I love you to the moon and back! 🌙💖",
    "what's up": "Not much, just thinking of you ❤️",
    "are you busy": "Not at all, I'm just here for you! 💕",
    "i'm hungry": "What are you in the mood for? 😋",
    "how was your day": "It’s been amazing, especially now that I’m talking to you 😘",
    "let's go on a date": "That sounds perfect! Where should we go? 🌹",
    "you make me happy": "And you make me so happy too! 😊"
  };
  
  // Event listener for user input
  document.querySelector('.input-message').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      let userMessage = event.target.value.trim().toLowerCase();
      
      if (userMessage) {
        addMessage(userMessage, 'user');
        
        // Find a relevant response based on user input
        let response = getResponse(userMessage);
        setTimeout(() => {
          addMessage(response, 'partner');
        }, 1000);
  
        event.target.value = ''; // Clear the input field
      }
    }
  });
  
  // Function to add messages to the chat
  function addMessage(message, sender) {
    const messageContainer = document.querySelector('.message-container');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `
      <div class="heart-icon"></div>
      <p>${message}</p>
    `;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the latest message
  }
  
  // Function to match user input with relevant response
  function getResponse(userMessage) {
    // Check for keywords in the user message and return the corresponding response
    for (let keyword in responses) {
      if (userMessage.includes(keyword)) {
        return responses[keyword];
      }
    }
  
    // Default response if no keyword is found
    return "I'm not sure what to say, but I love you! 💖";
  }
  