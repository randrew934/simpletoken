const Migrations = artifacts.require("./SimpleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
