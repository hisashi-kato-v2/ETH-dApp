import { ethers } from 'hardhat';

const main = async () => {
    const [owner, randomPerson, randomPerson2] = await ethers.getSigners();
    const waveContractFactory = await ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    // deployedメソッドは存在しない
    // const wavePortal = await waveContract.deployed();
  
    console.log('WavePortal address: ', await waveContract.getAddress());

    console.log('Contract deployed to:', await waveContract.getAddress());
    console.log('Contract deployed by:', owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();
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