document.addEventListener('DOMContentLoaded', async () => {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletAddressDisplay = document.getElementById('walletAddress');
    const getBalanceButton = document.getElementById('getBalance');
    const contractBalanceDisplay = document.getElementById('contractBalance');
    const sendPaymentButton = document.getElementById('sendPayment');
    const updateWorkerButton = document.getElementById('updateWorker');
    const updatePaymentButton = document.getElementById('updatePayment');
    const newWorkerInput = document.getElementById('newWorker');
    const newAmountInput = document.getElementById('newAmount');

    let provider, signer, contract;

    // Replace with your smart contract details
    const contractAddress = '0xYourContractAddress';
    const contractABI = [
        // Add your contract ABI here
    ];

    // Connect Wallet
    connectWalletButton.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                provider = new ethers.providers.Web3Provider(window.ethereum);
                signer = provider.getSigner();
                walletAddressDisplay.textContent = `Wallet Address: ${await signer.getAddress()}`;
                contract = new ethers.Contract(contractAddress, contractABI, signer);
            } catch (error) {
                console.error('Wallet connection failed:', error);
            }
        } else {
            alert('Please install a MetaMask wallet to use this feature.');
        }
    });

    // Get Contract Balance
    getBalanceButton.addEventListener('click', async () => {
        if (contract) {
            try {
                const balance = await provider.getBalance(contractAddress);
                contractBalanceDisplay.textContent = `Contract Balance: ${ethers.utils.formatEther(balance)} ETH`;
            } catch (error) {
                console.error('Failed to fetch contract balance:', error);
            }
        } else {
            alert('Please connect your wallet first.');
        }
    });

    // Send Payment
    sendPaymentButton.addEventListener('click', async () => {
        if (contract) {
            try {
                const transaction = await signer.sendTransaction({
                    to: contractAddress,
                    value: ethers.utils.parseEther('0.01') // Example payment amount
                });
                await transaction.wait();
                alert('Payment sent successfully!');
            } catch (error) {
                console.error('Failed to send payment:', error);
            }
        } else {
            alert('Please connect your wallet first.');
        }
    });

    // Update Worker
    updateWorkerButton.addEventListener('click', async () => {
        const newWorker = newWorkerInput.value.trim();
        if (contract && newWorker) {
            try {
                const transaction = await contract.updateWorker(newWorker); // Replace with actual contract method
                await transaction.wait();
                alert('Worker updated successfully!');
            } catch (error) {
                console.error('Failed to update worker:', error);
            }
        } else {
            alert('Please connect your wallet and enter a valid worker address.');
        }
    });

    // Update Payment Amount
    updatePaymentButton.addEventListener('click', async () => {
        const newAmount = newAmountInput.value.trim();
        if (contract && newAmount) {
            try {
                const transaction = await contract.updatePaymentAmount(ethers.utils.parseEther(newAmount)); // Replace with actual contract method
                await transaction.wait();
                alert('Payment amount updated successfully!');
            } catch (error) {
                console.error('Failed to update payment amount:', error);
            }
        } else {
            alert('Please connect your wallet and enter a valid payment amount.');
        }
    });
});
