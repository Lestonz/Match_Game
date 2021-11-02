pragma solidity ^0.5.0;

import "./ERC721Full.sol";

/*contract LestonzMemoryToken is ERC721Full  {

    constructor() ERC721Full("Memory Token", "MEMORY") public {
    }

    function mint(address _to, string memory _tokenURI) public returns(bool) {
       uint _tokenId = totalSupply().add(1);
       _mint(_to, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       return true;
    }
}*/

contract LestonzMemoryToken is ERC721Full {

    // Define name of token. We put "public" because people see on the outside
    //string public name = "Memory Token"; // But we not define this type because we import ERC721Full conract

    constructor() ERC721Full("Lestonz Memory Token", "MEMORY") public {
    }

    // Define Mint argument owner address like matemask, images uri like ipfs storage.
    function mint(address _to, string memory _tokenURI) public returns(bool) {

        // Comes from ERC721 totalSupply
       uint _tokenId = totalSupply().add(1);
       _mint(_to, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       return true;
    }
}
