:root {
    --neon-pink: #ff00ff;
    --electric-blue: #00ffff;
    --gold: #ffd700;
    --dark-bg: #121212;
    --card-bg: rgba(30, 30, 40, 0.8);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, var(--dark-bg) 0%, #0a0a1a 100%);
    color: white;
    overflow-x: hidden;
    background-attachment: fixed;
}

h1, h2, h3 {
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: sticky;
    top: 0;
    background: rgba(10, 10, 20, 0.9);
    z-index: 100;
    border-bottom: 1px solid rgba(255, 0, 255, 0.3);
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo i {
    color: var(--neon-pink);
    font-size: 2rem;
}

.logo h1 {
    font-size: 1.5rem;
    background: linear-gradient(to right, var(--neon-pink), var(--electric-blue));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

nav a {
    color: var(--electric-blue);
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-size: 0.9rem;
}

nav a:hover {
    color: var(--neon-pink);
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.wallet-section {
    display: flex;
    align-items: center;
    gap: 15px;
}

.wallet-info {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(30, 30, 40, 0.8);
    padding: 8px 15px;
    border-radius: 30px;
    border: 1px solid var(--electric-blue);
}

.wallet-info.connected {
    border-color: var(--neon-pink);
}

.wallet-info i {
    color: var(--gold);
}

.wallet-address {
    font-family: monospace;
    font-size: 0.9rem;
}

.connect-wallet-btn {
    background: linear-gradient(45deg, var(--neon-pink), var(--electric-blue));
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
}

.connect-wallet-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
}

.connect-wallet-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Hero Section */
.hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 30%, var(--neon-pink) 0%, transparent 20%),
        radial-gradient(circle at 80% 70%, var(--electric-blue) 0%, transparent 20%);
    opacity: 0.3;
    z-index: -1;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
    animation: glow 2s infinite alternate;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    max-width: 800px;
    color: var(--electric-blue);
}

.cta-button {
    background: linear-gradient(45deg, var(--neon-pink), var(--electric-blue));
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
    margin: 20px 0;
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
}

.cta-button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
}

/* Section Styling */
section {
    padding: 80px 0;
    position: relative;
}

section h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
    color: var(--gold);
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

/* About Section */
.about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
}

.about-text {
    flex: 1;
    min-width: 300px;
    font-size: 1.2rem;
    line-height: 1.8;
}

.about-text p {
    margin-bottom: 20px;
}

.bichota-image {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
}

.bichota-image img {
    max-width: 100%;
    border-radius: 20px;
    border: 5px solid var(--neon-pink);
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

/* Tokenomics */
.tokenomics-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.token-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    width: 250px;
    text-align: center;
    border: 2px solid var(--electric-blue);
    transition: transform 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.token-card:hover {
    transform: translateY(-10px);
    border-color: var(--neon-pink);
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
}

.token-card i {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--gold);
}

.token-card h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: var(--electric-blue);
}

/* Roadmap */
.roadmap-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.roadmap-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, var(--neon-pink), var(--electric-blue));
}

.roadmap-item {
    position: relative;
    margin-bottom: 50px;
    width: 100%;
}

.roadmap-item:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
}

.roadmap-item:nth-child(even) {
    padding-left: calc(50% + 30px);
}

.roadmap-content {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    border: 2px solid var(--gold);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

.roadmap-content h3 {
    color: var(--neon-pink);
    margin-bottom: 10px;
}

.roadmap-point {
    position: absolute;
    top: 30px;
    width: 20px;
    height: 20px;
    background: var(--gold);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--gold);
}

.roadmap-item:nth-child(odd) .roadmap-point {
    right: calc(50% - 10px);
}

.roadmap-item:nth-child(even) .roadmap-point {
    left: calc(50% - 10px);
}

/* Community */
.community-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 40px;
}

.social-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--card-bg);
    padding: 30px;
    border-radius: 15px;
    width: 200px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    border: 2px solid var(--electric-blue);
}

.social-button:hover {
    transform: translateY(-10px);
    border-color: var(--neon-pink);
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
}

.social-button i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--electric-blue);
}

.social-button:hover i {
    color: var(--neon-pink);
}

.social-button h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

/* Meme Gallery */
.meme-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.meme-item {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 250px;
    background: var(--card-bg);
    border: 2px solid var(--neon-pink);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
}

.meme-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.meme-item:hover img {
    transform: scale(1.1);
}

/* Footer */
footer {
    background: rgba(0, 0, 0, 0.7);
    padding: 40px 0;
    text-align: center;
    border-top: 2px solid var(--neon-pink);
}

.contract-info {
    margin-bottom: 30px;
}

.contract-address {
    background: var(--card-bg);
    padding: 15px;
    border-radius: 10px;
    display: inline-block;
    font-family: monospace;
    border: 1px solid var(--electric-blue);
    cursor: pointer;
    transition: all 0.3s ease;
}

.contract-address:hover {
    background: rgba(0, 255, 255, 0.2);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--card-bg);
    border-radius: 50%;
    color: var(--electric-blue);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    border: 2px solid var(--electric-blue);
}

.social-links a:hover {
    background: var(--neon-pink);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 0 15px var(--neon-pink);
}

.disclaimer {
    font-size: 0.9rem;
    color: #aaa;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Animations */
@keyframes glow {
    from {
        text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
    }
    to {
        text-shadow: 0 0 20px var(--neon-pink), 0 0 30px var(--neon-pink), 0 0 40px var(--neon-pink);
    }
}

.floating {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}

/* Wallet Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: var(--card-bg);
    border: 2px solid var(--neon-pink);
    border-radius: 15px;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

.modal-content h2 {
    margin-bottom: 20px;
    color: var(--electric-blue);
}

.wallet-options {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

.wallet-option {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(20, 20, 30, 0.8);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--electric-blue);
}

.wallet-option:hover {
    background: rgba(30, 30, 50, 0.8);
    border-color: var(--neon-pink);
}

.wallet-option img {
    width: 40px;
    height: 40px;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Network Indicator */
.network-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.3);
}

.network-indicator.connected {
    background: rgba(0, 255, 0, 0.2);
}

.network-indicator i {
    color: #00ff00;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.2rem;
    }
    
    .hero p {
        font-size: 1.1rem;
    }
    
    section h2 {
        font-size: 1.8rem;
    }
    
    nav ul {
        display: none;
    }
    
    .roadmap-container::before {
        left: 30px;
    }
    
    .roadmap-item:nth-child(odd),
    .roadmap-item:nth-child(even) {
        padding: 0;
        text-align: left;
        padding-left: 70px;
    }
    
    .roadmap-item:nth-child(odd) .roadmap-point,
    .roadmap-item:nth-child(even) .roadmap-point {
        left: 20px;
    }
    
    .wallet-section {
        flex-direction: column;
        gap: 10px;
    }
}
