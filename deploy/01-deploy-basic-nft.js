const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();

    log("----------------------------------------------------");

    const args = []
    const basicNft = await deploy("BasicNFT", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1,
    })

    if (!developmentChains.includes(network.name)) {
        log("Verifying contract on Etherscan...")
        await verify(
            basicNft.address,
            args,
        )
        log("✅ Verified")
    }
}

module.exports.tags = ["all", "basicnft", "main"]