import { ethers } from 'hardhat';

const main = async () => {
    const waveContractFactory = await ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    // deployedメソッドは存在しない
    // const wavePortal = await waveContract.deployed();
  
    console.log('WavePortal address: ', await waveContract.getAddress());
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();