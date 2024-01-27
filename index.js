var data = {
    chatinit: {
        title: ["Hello <span class='emoji'> &#128075;</span>", "I am Mr. Chatbot", "How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>", "News", "Shopping <span class='emoji'> &#128090;</span>", "Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title: ["Please select category"],
        options: ['Hollywood', 'Bollywood', 'Web Series', 'Others'],
        url: {

        }
    },

    news: {
        title: ["Today's Top 5 Headlines"],
        options: ["The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.", "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.", "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA."],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    shopping: {
        title: ["Thanks for your response", "Welcome to shopping zone <span class='emoji'> &#128090;</span>", "Please select one of the below options to proceed further"],
        options: ['Electronics', 'Beauty products', 'Mobiles', 'Men Fashion', 'Women fashion'],
        url: {

        }
    },
    electronics: {
        title: ["Thanks for your response", "Here are some electronic items for you", "Click on it to know more"],
        options: ['Televisions', 'Cameras', 'Gaming Consoles', 'Headphones', 'Speakers'],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#", "#"]
        }
    },
    beauty: {
        title: ["Thanks for your response", "Here are some beauty products for you", "Click on it to know more"],
        options: ['Make-up & Nails', 'Skin Care', 'Fragrance', 'Hair care'],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#"]
        }
    },
    mobiles: {
        title: ["Thanks for your response", "These are some results based on your input", "Click on it to know more"],
        options: ['Mobile Phones', 'Cases & Covers', 'Power Banks', 'Tablets'],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#"]
        }
    },
    men: {
        title: ["Thanks for your response", "These are some results based on your input", "Click on it to know more"],
        options: ['Clothing', 'Shirts', 'T-shirts', 'Innerwear', 'Jeans'],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#", "#"]
        }
    },
    women: {
        title: ["Thanks for your response", "These are some results based on your input", "Click on it to know more"],
        options: ['Clothing', 'Western Wear', 'Ethnic Wear', 'Top Brands'],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#"]
        }
    },
    music: {
        title: ["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1", "song 2", "song 3", "song 4", "song 5"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    hollywood: {
        title: ["Thanks for your response", "Here are some genre based movies"],
        options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#", "#"]
        }
    },
    bollywood: {
        title: ["Thanks for your response", "Here are some genre based movies"],
        options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#", "#"]
        }
    },
    web: {
        title: ["Thanks for your response", "Here are some genre based web series"],
        options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["#", "#", "#", "#", "#"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube", "Netflix", "Amazon Prime", "Hot Star"],
        url: {
            more: "https://www.youtube.com/",
            link: ["#", "#", "#", "#", "#"]
        }
    },
}



document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
    console.log(this.innerText);
    if (this.innerText == 'START CHAT') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'CLOSE CHAT';
        initChat();
    }
    else {
        location.reload();
    }
}


const chatInput = document.querySelector(".chat-input textarea")
const sendBtn = document.querySelector(".chat-input span")
const chatBox = document.querySelector("#chat-box")

const createChat = (msg, className) => {
    const chat = document.createElement('li')
    chat.classList.add('chat', className)
    let chatContent = className === 'outgoing' ?
        `<p>${msg}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${msg}</p>`;

    chat.innerHTML = chatContent;
    return chat;

}

let userMsg;

const botResponse = (userMsg) => {
    const lowerCaseMsg = userMsg.toLowerCase();

    if (lowerCaseMsg.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerCaseMsg.includes('day today')) {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return 'Today is ' + currentDate.toLocaleDateString('en-US', options);
    } else if (lowerCaseMsg.includes('movies')) {
        return formatOptions(data.movies.title, data.movies.options);
    } else if (lowerCaseMsg.includes('news')) {
        return formatOptions(data.news.title, data.news.options);
    } else if (lowerCaseMsg.includes('shopping')) {
        return formatOptions(data.shopping.title, data.shopping.options);
    } else if (lowerCaseMsg.includes('music')) {
        return formatOptions(data.music.title, data.music.options);
    } else {
        // Default response for unrecognized queries
        return "I'm a simple chatbot. You said: " + userMsg;
    }
};

// Helper function to format options
const formatOptions = (title, options) => {
    const formattedTitle = title.map((line) => line + '<br>').join('');
    const formattedOptions = options.map((option, index) => `${index + 1}. ${option}`).join('<br>');

    return `${formattedTitle}<br>${formattedOptions}`;
};


const handleChat = () => {
    userMsg = chatInput.value.trim()
    if (!userMsg) return;

    //add user msg here
    chatBox.appendChild(createChat(userMsg, "outgoing"))

    setTimeout(() => {
        const botReply = botResponse(userMsg);
        chatBox.appendChild(createChat(botReply, 'incoming'));
    }, 200);

}

sendBtn.addEventListener("click", handleChat)



