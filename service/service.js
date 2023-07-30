import TokenContract from '../abi/TokenContract.json'
import VotingContract from '../abi/VotingContract.json'

export const tokenContractInstance = (web3) => {
    return new web3.eth.Contract(
        TokenContract.abi, // abi of SC voting token
        "0xbdAACD64F0E8011172BEe77eD98c3774801C0CFb" // address of Voting token
    )
}

export const votingContractInstance = web3 => {
    return new web3.eth.Contract(
        VotingContract.abi, // abi of SC governance contract
    //    "0x3c66F21096E319e57380A41A64D974cCA565387a"  // always false;
        "0x67e01E2A734f0200f2240B200C7e4031A938FEDF" //;
    )
}