// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ResumeNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256[]) private _ownedResumes;

    constructor() ERC721("ResumeNFT", "RESUME") {}

    function mintResume(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _ownedResumes[msg.sender].push(newItemId);
        return newItemId;
    }

    function getResumesByOwner(address owner) external view returns (uint256[] memory) {
        return _ownedResumes[owner];
    }
}
