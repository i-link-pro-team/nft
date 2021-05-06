Start the compiler
```
npx hardhat compile
```

Clear working directories of old data
```
npx hardhat clean
```

Launch a specific contract for execution, address contract
```
npx hardhat run scripts/umka-script.js --network rinkeby
```

Verify the contract on etherscan , specify the address of the contract received in the previous step
```
npx hardhat verify --contract contracts/Umka.sol:Umka --network rinkeby 0xb8D27a25139d0255477dbd4B46Ee717753a44bfD
```

Start the documentation generator
```
yarn run hardhat docgen
```

Example contract
```
https://rinkeby.etherscan.io/address/0xb8D27a25139d0255477dbd4B46Ee717753a44bfD
use awardItem(address, tokenURI)
```