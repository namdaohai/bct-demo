// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletInfo = document.getElementById('walletInfo');
const walletAddress = document.getElementById('walletAddress');
const walletModal = document.getElementById('walletModal');
const closeModal = document.getElementById('closeModal');
const walletOptions = document.querySelectorAll('.wallet-option');

// Check if wallet is already connected
window.addEventListener('load', () => {
    if (window.ethereum) {
        // Check if already connected
        if (localStorage.getItem('bichotas_wallet_connected') === 'true') {
            const address = localStorage.getItem('bichotas_wallet_address');
            if (address) {
                updateWalletUI(address);
            }
        }
    } else {
        connectWalletBtn.textContent = 'Install MetaMask';
        connectWalletBtn.disabled = true;
    }
});

// Connect wallet button click
connectWalletBtn.addEventListener('click', () => {
    if (connectWalletBtn.textContent === 'Install MetaMask') {
        window.open('https://metamask.io/', '_blank');
        return;
    }
    
    if (window.ethereum) {
        walletModal.style.display = 'flex';
    } else {
        alert('Please install MetaMask to connect your wallet!');
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    walletModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === walletModal) {
        walletModal.style.display = 'none';
    }
});

// Wallet selection
walletOptions.forEach(option => {
    option.addEventListener('click', async () => {
        const walletType = option.dataset.wallet;
        await connectWallet(walletType);
        walletModal.style.display = 'none';
    });
});

// Connect to wallet
async function connectWallet(walletType) {
    try {
        if (walletType === 'metamask') {
            if (!window.ethereum) {
                alert('Please install MetaMask!');
                return;
            }
            
            // Request account access
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            const account = accounts[0];
            updateWalletUI(account);
            localStorage.setItem('bichotas_wallet_connected', 'true');
            localStorage.setItem('bichotas_wallet_address', account);
        } else {
            alert(`Connecting to ${walletType} is not implemented in this demo`);
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
    }
}

// Update wallet UI
function updateWalletUI(address) {
    const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    walletAddress.textContent = shortAddress;
    walletInfo.classList.add('connected');
    connectWalletBtn.textContent = 'Connected';
    connectWalletBtn.disabled = true;
}

// Copy contract address to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Contract address copied to clipboard!');
    });
}

// Add floating animation to hero elements
document.addEventListener('DOMContentLoaded', function() {
    const heroElements = document.querySelectorAll('.hero > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add hover effect to token cards
    const tokenCards = document.querySelectorAll('.token-card');
    tokenCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});