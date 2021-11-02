const LestonzMemoryToken = artifacts.require("LestonzMemoryToken");

module.exports = function(deployer) {
  deployer.deploy(LestonzMemoryToken);
};
