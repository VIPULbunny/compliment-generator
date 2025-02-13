let userName = "";

function nextPage() {
    const nameInput = document.getElementById('name').value;
    const genderInput = document.getElementById('gender').value;
    if (!nameInput) {
        alert("Please enter your name!");
        return;
    }
    userName = nameInput;
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    document.getElementById('compliment').innerText = `Hello, ${userName}! Ready for some compliments? 💕`;
}

function getMoodCompliment() {
    const mood = document.getElementById('mood').value;
    let compliment = "";
    switch (mood) {
        case "cute":
            compliment = `${userName}, you're cuter than a basket of kittens wearing tiny hats! 🐱🎩`;
            break;
        case "angry":
            compliment = `Even when you're angry, ${userName}, you're as adorable as a grumpy panda! 🐼💢`;
            break;
        case "happy":
            compliment = `Your happiness is more infectious than a TikTok dance trend, ${userName}! 💃🕺`;
            break;
        case "romantic":
            compliment = `If love were code, ${userName}, you'd be a perfectly optimized algorithm of affection! 💖🖥️`;
            break;
        default:
            compliment = `You're awesome, ${userName}!`;
    }
    document.getElementById('compliment').innerText = compliment;
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
        heart.innerHTML = '❤';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 500);
}

createHearts();
