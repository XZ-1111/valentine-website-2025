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
export default config;// Basic Information
valentineName: "Jade"                    // Your Valentine's name
pageTitle: "Will You Be My Valentine? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Do you like me?",                   // First question
        yesBtn: "Yes",                             // Yes button text
        noBtn: "No",                               // No button text
        secretAnswer: "I don't like you, I love you! ❤️"  // Hidden message
    },
    second: {
        text: "How much do you love me?",          // Second question
        startText: "This much!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Will you be my Valentine...?",      // Final question
        yesBtn: "Yes!",                            // Yes button text
        noBtn: "No"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows above 5000%
    high: "To infinity and beyond! 🚀💝",              // Shows above 1000%
    normal: "And beyond! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "Yay! I'm the luckiest person...",     // Celebration title
    message: "Now come get your gift...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
```

### 3. Adding Your Own Background Music 🎵

Want to make it extra special with your own romantic song? Follow these steps to add background music:

1. **Get a Cloudinary Account (Free):**
   - Go to [Cloudinary.com](https://cloudinary.com) and sign up for a free account

2. **Upload Your Music:**
   - Log in to your Cloudinary dashboard
   - Click on the "Upload" button in the top right
   - Select "Upload" from the dropdown menu
   - Choose your MP3 file (keep it under 10MB for better loading)
   - Wait for the upload to complete

3. **Get Your Music URL:**
   - After upload, find your music file in the Media Library
   - Click the "..." (more options) button on your music file
   - Click "Copy URL"
   - Select "Copy Original URL with options"
   - The URL should look like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/your-file-name.mp3`

4. **Add to Your Website:**
   - Open `config.js`
   - Find the `music` section
   - Replace the `musicUrl` value with your Cloudinary URL

```javascript
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your URL here
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
}
```

### 4. Make It Live! (Get your online website URL)

#### Using GitHub Pages (Free)
1. Go to your repository's "Settings"
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes
6. Your site will be live at: `https://your-username.github.io/repository-name`

#### Using Netlify (Free, Recommended, Custom URL)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for a free account
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Click "Deploy site"
6. Once deployed, click "Domain settings"
7. Choose a custom domain (e.g., `my-valentine-2025.netlify.app`)

## 💡 Tips
- Test the website before sending it to your Valentine
- Try all the buttons and interactions
- Check how it looks on mobile phones

## 🎨 Want Different Colors?
Use these tools to find beautiful colors:
- [Coolors](https://coolors.co/) - Color palette generator
- [ColorHunt](https://colorhunt.co/) - Color palettes

## 🔍 Need More Emojis?
Find more emojis at:
- [EmojiKeyboard](https://emojikeyboard.top/fr/)
- [Emojipedia](https://emojipedia.org/)

## 💖 Credits
Created with love for Valentine's Day 2026.
Feel free to use and modify for your special someone!

\- Louis Fontaine -

## ❤️ Support this project

This Valentine website template is completely **free and open-source**.

If it helped you create something special, you can support the project with a small donation:

👉 [Tip](https://buy.stripe.com/bJefZa8Le7fvgDe3ric7u00)

Thank you for keeping it alive!

## 📜 License
MIT License - Feel free to use this for your Valentine! 
