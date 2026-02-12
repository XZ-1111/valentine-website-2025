// ============================================
// Valentine's Day Interactive Page Configuration
// ============================================

const config = {
  // Recipient information
  recipientName: "Богдан",
  pageTitle: "Для [Козлика] 💝",

  // Background style: soft violet gradient
  background: "linear-gradient(135deg, #f9f0ff, #e9d4ff, #d9b3ff)",

  // Button styling: warm blue, rounded corners
  buttonStyle: {
    backgroundColor: "#add8e6",       // light, warm blue
    hoverColor: "#9ac0cd",            // slightly darker on hover
    borderRadius: "30px",
    padding: "12px 30px",
    fontSize: "1.2rem",
    border: "none",
    color: "#2c3e50",
    fontWeight: "600",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  // Animation settings for floating hearts
  animation: {
    hearts: {
      enabled: true,
      duration: 15,          // seconds
      offset: 50,           // pixel displacement
      amount: 30,           // number of hearts
      emoji: "❤️",
      colors: ["#ffb6c1", "#ff69b4", "#ffc0cb", "#ffe4e1"]
    }
  },

  // Questions and answer options
  questions: [
    {
      id: 1,
      text: "Я тебе нравлюсь?",
      answers: ["Да", "Нет"],
      secretAnswer: {
        trigger: "Да",
        message: "А я тебя люблю! ❤️"
      }
    },
    {
      id: 2,
      text: " А точно?",
      answers: ["110%", "да, конечно", "несомненно"]
    },
    {
      id: 3,
      text: "Будешь моей Валентинкой...?",
      answers: ["Да!", "Нет"]
    }
  ],

  // Final congratulation screen (shown after "Да!" on last question)
  finalMessage: {
    title: "Ура! Я самый счастливый человек... 🥰. Я тебя очень сильно люблю",
    message: "Беги за подарком 🎁",
    emojis: "🎁💖🤗💝💋❤️💕",
    backgroundColor: "rgba(255, 220, 240, 0.9)", // soft pink overlay
    textColor: "#4a1e4a"
  },

  // Background music settings
  music: {
    enabled: true,
    autoplay: true,
    url: "YOUR_CLOUDINARY_URL_HERE", // Replace with actual Cloudinary audio URL
    volume: 0.5,
    loop: true
  },

  // Additional styling options (optional)
  theme: {
    primaryColor: "#add8e6",
    secondaryColor: "#fff0f5",
    accentColor: "#ffb7c5",
    textColor: "#3b2e3b",
    headerFont: "'Great Vibes', cursive, sans-serif",
    bodyFont: "'Montserrat', sans-serif"
  }
};

// Export configuration for use in main script
export default config;
