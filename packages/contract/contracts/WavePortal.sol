// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract WavePortal {

    // 状態変数
    // WavePortalコントラクトのストレージに永続化される
    uint256 private _totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        _totalWaves++;
        // msg.senderは呼び出し元のアドレス
        console.log("%s has waved!", msg.sender);
    }

    // view関数は、読み取り専用の関数であり、呼び出した後に関数の中で定義された状態変数が変更されないようにします
    // pure関数は、関数の中で定義された状態変数を読み込んだり変更したりせず、関数に渡されたパラメータや関数に存在するローカル変数のみを使用して値を返します
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", _totalWaves);
        return _totalWaves;
    }
}
