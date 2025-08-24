// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const disconnectWalletBtn = document.getElementById('disconnectWalletBtn');
const walletInfo = document.getElementById('walletInfo');
const walletAddress = document.getElementById('walletAddress');
const walletModal = document.getElementById('walletModal');
const closeModal = document.getElementById('closeModal');
const walletOptions = document.querySelectorAll('.wallet-option');
const networkIndicator = document.getElementById('networkIndicator');
const networkName = document.getElementById('networkName');

// Global variables
let provider;
let signer;
let userAddress;

// Network configurations
const networks = {
    1: "Ethereum Mainnet",
    56: "Binance Smart Chain",
    137: "Polygon",
    43114: "Avalanche",
    250: "Fantom"
};

// Check if wallet is already connected
window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        // Check if already connected
        if (localStorage.getItem('bichotas_wallet_connected') === 'true') {
            const address = localStorage.getItem('bichotas_wallet_address');
            if (address) {
                await connectWallet('metamask');
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
    
    if (typeof window.ethereum !== 'undefined') {
        walletModal.style.display = 'flex';
    } else {
        alert('Please install MetaMask to connect your wallet!');
    }
});

// Disconnect wallet button click
disconnectWalletBtn.addEventListener('click', () => {
    disconnectWallet();
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
        if (walletType === 'metamask' || walletType === 'coinbase') {
            if (typeof window.ethereum === 'undefined') {
                alert('Please install MetaMask!');
                return;
            }
            
            // Request account access
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            userAddress = accounts[0];
            
            // Create provider and signer
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            
            // Get network info
            const network = await provider.getNetwork();
            const networkDisplayName = networks[network.chainId] || `Chain ID: ${network.chainId}`;
            
            // Update UI
            updateWalletUI(userAddress, networkDisplayName);
            localStorage.setItem('bichotas_wallet_connected', 'true');
            localStorage.setItem('bichotas_wallet_address', userAddress);
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    userAddress = accounts[0];
                    updateWalletUI(userAddress, networkDisplayName);
                } else {
                    disconnectWallet();
                }
            });
            
            // Listen for chain changes
            window.ethereum.on('chainChanged', async (chainId) => {
                const networkId = parseInt(chainId, 16);
                const networkDisplayName = networks[networkId] || `Chain ID: ${networkId}`;
                updateWalletUI(userAddress, networkDisplayName);
            });
        } else {
            alert(`Connecting to ${walletType} is not implemented in this demo`);
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
    }
}

// Disconnect wallet
function disconnectWallet() {
    userAddress = null;
    provider = null;
    signer = null;
    
    walletAddress.textContent = 'Not connected';
    walletInfo.classList.remove('connected');
    networkName.textContent = 'Not connected';
    networkIndicator.classList.remove('connected');
    connectWalletBtn.style.display = 'block';
    disconnectWalletBtn.style.display = 'none';
    connectWalletBtn.textContent = 'Connect Wallet';
    connectWalletBtn.disabled = false;
    
    localStorage.removeItem('bichotas_wallet_connected');
    localStorage.removeItem('bichotas_wallet_address');
    
    // Remove event listeners
    if (window.ethereum) {
        if (window.ethereum.removeListener) {
            window.ethereum.removeListener('accountsChanged', () => {});
            window.ethereum.removeListener('chainChanged', () => {});
        }
    }
}

// Update wallet UI
function updateWalletUI(address, network) {
    const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    walletAddress.textContent = shortAddress;
    walletInfo.classList.add('connected');
    connectWalletBtn.style.display = 'none';
    disconnectWalletBtn.style.display = 'block';
    
    networkName.textContent = network;
    networkIndicator.classList.add('connected');
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
    
    // Check if ethers is loaded
    if (typeof ethers === 'undefined') {
        console.error('ethers.js library not loaded');
        connectWalletBtn.disabled = true;
        connectWalletBtn.textContent = 'Library Error';
    }
});
