/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  JayMart,
  JayMartInterface,
} from "../../../contracts/JayMart.sol/JayMart";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_jayAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "erc721TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc721Ids",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "erc1155TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Amounts",
        type: "uint256[]",
      },
    ],
    name: "buyJay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "erc721TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc721Ids",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "erc1155TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Amounts",
        type: "uint256[]",
      },
    ],
    name: "buyNFTs",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "getPriceBuy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "getPriceSell",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0604052662386f26fc10000600555678ac7230489e8000060065566038d7ea4c680006007556200004362093a80426200016460201b62000c911790919060201c565b6008553480156200005357600080fd5b5060405162002480380380620024808339818101604052810190620000799190620002b2565b620000996200008d6200017c60201b60201c565b6200018460201b60201c565b600180819055508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050735f4ec3df9cbd43714fe2740f5e3616155c5b8419600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000358565b600081836200017491906200031d565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200027a826200024d565b9050919050565b6200028c816200026d565b81146200029857600080fd5b50565b600081519050620002ac8162000281565b92915050565b600060208284031215620002cb57620002ca62000248565b5b6000620002db848285016200029b565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200032a82620002e4565b91506200033783620002e4565b9250828201905080821115620003525762000351620002ee565b5b92915050565b60805160a0516120ed62000393600039600081816104720152818161069c0152610baf01526000818161044b015261067501526120ed6000f3fe6080604052600436106100e15760003560e01c80638e15f4731161007f578063db8d55f111610059578063db8d55f11461027c578063f23a6e61146102aa578063f2fde38b146102e7578063fc9fc6c714610310576100e8565b80638e15f4731461020a57806395b6712814610235578063d0e30db014610272576100e8565b8063666566e8116100bb578063666566e814610180578063715018a61461019c57806384e10a90146101b35780638da5cb5b146101df576100e8565b8063150b7a02146100ea57806343a43ec8146101275780634ef26f6a14610164576100e8565b366100e857005b005b3480156100f657600080fd5b50610111600480360381019061010c9190611520565b61033e565b60405161011e91906115de565b60405180910390f35b34801561013357600080fd5b5061014e600480360381019061014991906115f9565b610352565b60405161015b9190611635565b60405180910390f35b61017e60048036038101906101799190611706565b610369565b005b61019a60048036038101906101959190611706565b610527565b005b3480156101a857600080fd5b506101b161073f565b005b3480156101bf57600080fd5b506101c8610753565b6040516101d6929190611823565b60405180910390f35b3480156101eb57600080fd5b506101f4610764565b604051610201919061185b565b60405180910390f35b34801561021657600080fd5b5061021f61078d565b60405161022c919061188f565b60405180910390f35b34801561024157600080fd5b5061025c600480360381019061025791906115f9565b61082e565b6040516102699190611635565b60405180910390f35b61027a610845565b005b34801561028857600080fd5b50610291610847565b6040516102a194939291906118aa565b60405180910390f35b3480156102b657600080fd5b506102d160048036038101906102cc91906118ef565b610867565b6040516102de91906115de565b60405180910390f35b3480156102f357600080fd5b5061030e60048036038101906103099190611986565b61087c565b005b34801561031c57600080fd5b506103256108ff565b60405161033594939291906118aa565b60405180910390f35b600063150b7a0260e01b9050949350505050565b60006005548261036291906119e2565b9050919050565b610371610ca7565b60008a8a905090506103858b8b8b8b610cf6565b610393878787878787610dcd565b8161039e9190611a24565b905080600360008282546103b29190611a24565b9250508190555060006103d060055483610efc90919063ffffffff16565b905080341015610415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040c90611ab5565b60405180910390fd5b61044673985b6b9064212091b4b325f68746b77262801bcb610441600234610f1290919063ffffffff16565b610f28565b6104707f000000000000000000000000000000000000000000000000000000000000000047610f28565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166379cc6790336104c260065486610efc90919063ffffffff16565b6040518363ffffffff1660e01b81526004016104df929190611ad5565b600060405180830381600087803b1580156104f957600080fd5b505af115801561050d573d6000803e3d6000fd5b50505050505061051b610fd9565b50505050505050505050565b61052f610ca7565b6000610545600434610f1290919063ffffffff16565b9050600061055d600434610f1290919063ffffffff16565b90506000610575600234610f1290919063ffffffff16565b905060008d8d9050905061058b8e8e8e8e610fe2565b6105998a8a8a8a8a8a6110b9565b816105a49190611a24565b905080600460008282546105b89190611a24565b92505081905550600060648210156105e4576105df60075483610efc90919063ffffffff16565b61060d565b61060c60026105fe60075485610efc90919063ffffffff16565b610f1290919063ffffffff16565b5b905080341015610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990611ab5565b60405180910390fd5b61067073985b6b9064212091b4b325f68746b77262801bcb86610f28565b61069a7f000000000000000000000000000000000000000000000000000000000000000085610f28565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f088d54784336040518363ffffffff1660e01b81526004016106f4919061185b565b6000604051808303818588803b15801561070d57600080fd5b505af1158015610721573d6000803e3d6000fd5b50505050505050505050610733610fd9565b50505050505050505050565b6107476111e8565b6107516000611266565b565b600080600354600454915091509091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611b81565b5050509150508091505090565b60006007548261083e91906119e2565b9050919050565b565b600080600080600754600554600654600854935093509350935090919293565b600063f23a6e6160e01b905095945050505050565b6108846111e8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90611c6e565b60405180910390fd5b6108fc81611266565b50565b60008060008061090d610ca7565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561097d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a19190611b81565b5093505092505060006109c26402540be40084610efc90919063ffffffff16565b90506008548211610a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ff90611cda565b60405180910390fd5b6000671bc16d674ec80000821115610a5c576000610a37671bc16d674ec8000084610f1290919063ffffffff16565b9050610a5481670de0b6b3a7640000610f1290919063ffffffff16565b915050610a7a565b610a7782671bc16d674ec80000610f1290919063ffffffff16565b90505b3373ffffffffffffffffffffffffffffffffffffffff16610a99610764565b73ffffffffffffffffffffffffffffffffffffffff161480610aef575080610acd6002600754610f1290919063ffffffff16565b108015610aee575080610aec6096600754610efc90919063ffffffff16565b115b5b610b2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2590611d46565b60405180910390fd5b80600781905550678ac7230489e80000821115610b8b576000610b62678ac7230489e8000084610f1290919063ffffffff16565b9050610b7f81670de0b6b3a7640000610f1290919063ffffffff16565b60058190555050610bad565b610ba682678ac7230489e80000610f1290919063ffffffff16565b6005819055505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f57557476005546040518263ffffffff1660e01b8152600401610c089190611635565b602060405180830381865afa158015610c25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c499190611d66565b600681905550610c656201518084610c9190919063ffffffff16565b600881905550600754600554600654600854975097509750975050505050610c8b610fd9565b90919293565b60008183610c9f9190611a24565b905092915050565b600260015403610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce390611ddf565b60405180910390fd5b6002600181905550565b60005b82829050811015610dc657848482818110610d1757610d16611dff565b5b9050602002016020810190610d2c9190611986565b73ffffffffffffffffffffffffffffffffffffffff166342842e0e3033868686818110610d5c57610d5b611dff565b5b905060200201356040518463ffffffff1660e01b8152600401610d8193929190611e2e565b600060405180830381600087803b158015610d9b57600080fd5b505af1158015610daf573d6000803e3d6000fd5b505050508080610dbe90611e65565b915050610cf9565b5050505050565b6000806000905060005b86869050811015610eed57610e0e858583818110610df857610df7611dff565b5b9050602002013583610c9190919063ffffffff16565b9150888882818110610e2357610e22611dff565b5b9050602002016020810190610e389190611986565b73ffffffffffffffffffffffffffffffffffffffff1663f242432a30338a8a86818110610e6857610e67611dff565b5b90506020020135898987818110610e8257610e81611dff565b5b905060200201356040518563ffffffff1660e01b8152600401610ea89493929190611ee4565b600060405180830381600087803b158015610ec257600080fd5b505af1158015610ed6573d6000803e3d6000fd5b505050508080610ee590611e65565b915050610dd7565b50809150509695505050505050565b60008183610f0a91906119e2565b905092915050565b60008183610f209190611f6b565b905092915050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610f4e90611fca565b60006040518083038185875af1925050503d8060008114610f8b576040519150601f19603f3d011682016040523d82523d6000602084013e610f90565b606091505b5050905080610fd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcb9061202b565b60405180910390fd5b505050565b60018081905550565b60005b828290508110156110b25784848281811061100357611002611dff565b5b90506020020160208101906110189190611986565b73ffffffffffffffffffffffffffffffffffffffff166342842e0e333086868681811061104857611047611dff565b5b905060200201356040518463ffffffff1660e01b815260040161106d93929190611e2e565b600060405180830381600087803b15801561108757600080fd5b505af115801561109b573d6000803e3d6000fd5b5050505080806110aa90611e65565b915050610fe5565b5050505050565b6000806000905060005b868690508110156111d9576110fa8585838181106110e4576110e3611dff565b5b9050602002013583610c9190919063ffffffff16565b915088888281811061110f5761110e611dff565b5b90506020020160208101906111249190611986565b73ffffffffffffffffffffffffffffffffffffffff1663f242432a33308a8a8681811061115457611153611dff565b5b9050602002013589898781811061116e5761116d611dff565b5b905060200201356040518563ffffffff1660e01b81526004016111949493929190611ee4565b600060405180830381600087803b1580156111ae57600080fd5b505af11580156111c2573d6000803e3d6000fd5b5050505080806111d190611e65565b9150506110c3565b50809150509695505050505050565b6111f061132a565b73ffffffffffffffffffffffffffffffffffffffff1661120e610764565b73ffffffffffffffffffffffffffffffffffffffff1614611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b90612097565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061137182611346565b9050919050565b61138181611366565b811461138c57600080fd5b50565b60008135905061139e81611378565b92915050565b6000819050919050565b6113b7816113a4565b81146113c257600080fd5b50565b6000813590506113d4816113ae565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61142d826113e4565b810181811067ffffffffffffffff8211171561144c5761144b6113f5565b5b80604052505050565b600061145f611332565b905061146b8282611424565b919050565b600067ffffffffffffffff82111561148b5761148a6113f5565b5b611494826113e4565b9050602081019050919050565b82818337600083830152505050565b60006114c36114be84611470565b611455565b9050828152602081018484840111156114df576114de6113df565b5b6114ea8482856114a1565b509392505050565b600082601f830112611507576115066113da565b5b81356115178482602086016114b0565b91505092915050565b6000806000806080858703121561153a5761153961133c565b5b60006115488782880161138f565b94505060206115598782880161138f565b935050604061156a878288016113c5565b925050606085013567ffffffffffffffff81111561158b5761158a611341565b5b611597878288016114f2565b91505092959194509250565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115d8816115a3565b82525050565b60006020820190506115f360008301846115cf565b92915050565b60006020828403121561160f5761160e61133c565b5b600061161d848285016113c5565b91505092915050565b61162f816113a4565b82525050565b600060208201905061164a6000830184611626565b92915050565b600080fd5b600080fd5b60008083601f8401126116705761166f6113da565b5b8235905067ffffffffffffffff81111561168d5761168c611650565b5b6020830191508360208202830111156116a9576116a8611655565b5b9250929050565b60008083601f8401126116c6576116c56113da565b5b8235905067ffffffffffffffff8111156116e3576116e2611650565b5b6020830191508360208202830111156116ff576116fe611655565b5b9250929050565b60008060008060008060008060008060a08b8d0312156117295761172861133c565b5b60008b013567ffffffffffffffff81111561174757611746611341565b5b6117538d828e0161165a565b9a509a505060208b013567ffffffffffffffff81111561177657611775611341565b5b6117828d828e016116b0565b985098505060408b013567ffffffffffffffff8111156117a5576117a4611341565b5b6117b18d828e0161165a565b965096505060608b013567ffffffffffffffff8111156117d4576117d3611341565b5b6117e08d828e016116b0565b945094505060808b013567ffffffffffffffff81111561180357611802611341565b5b61180f8d828e016116b0565b92509250509295989b9194979a5092959850565b60006040820190506118386000830185611626565b6118456020830184611626565b9392505050565b61185581611366565b82525050565b6000602082019050611870600083018461184c565b92915050565b6000819050919050565b61188981611876565b82525050565b60006020820190506118a46000830184611880565b92915050565b60006080820190506118bf6000830187611626565b6118cc6020830186611626565b6118d96040830185611626565b6118e66060830184611626565b95945050505050565b600080600080600060a0868803121561190b5761190a61133c565b5b60006119198882890161138f565b955050602061192a8882890161138f565b945050604061193b888289016113c5565b935050606061194c888289016113c5565b925050608086013567ffffffffffffffff81111561196d5761196c611341565b5b611979888289016114f2565b9150509295509295909350565b60006020828403121561199c5761199b61133c565b5b60006119aa8482850161138f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119ed826113a4565b91506119f8836113a4565b9250828202611a06816113a4565b91508282048414831517611a1d57611a1c6119b3565b5b5092915050565b6000611a2f826113a4565b9150611a3a836113a4565b9250828201905080821115611a5257611a516119b3565b5b92915050565b600082825260208201905092915050565b7f596f75206e65656420746f20706179206d6f7265204554482e00000000000000600082015250565b6000611a9f601983611a58565b9150611aaa82611a69565b602082019050919050565b60006020820190508181036000830152611ace81611a92565b9050919050565b6000604082019050611aea600083018561184c565b611af76020830184611626565b9392505050565b600069ffffffffffffffffffff82169050919050565b611b1d81611afe565b8114611b2857600080fd5b50565b600081519050611b3a81611b14565b92915050565b611b4981611876565b8114611b5457600080fd5b50565b600081519050611b6681611b40565b92915050565b600081519050611b7b816113ae565b92915050565b600080600080600060a08688031215611b9d57611b9c61133c565b5b6000611bab88828901611b2b565b9550506020611bbc88828901611b57565b9450506040611bcd88828901611b6c565b9350506060611bde88828901611b6c565b9250506080611bef88828901611b2b565b9150509295509295909350565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611c58602683611a58565b9150611c6382611bfc565b604082019050919050565b60006020820190508181036000830152611c8781611c4b565b9050919050565b7f4665652075706461746520657665727920323420687273000000000000000000600082015250565b6000611cc4601783611a58565b9150611ccf82611c8e565b602082019050919050565b60006020820190508181036000830152611cf381611cb7565b9050919050565b7f466565207377696e6720746f6f20686967680000000000000000000000000000600082015250565b6000611d30601283611a58565b9150611d3b82611cfa565b602082019050919050565b60006020820190508181036000830152611d5f81611d23565b9050919050565b600060208284031215611d7c57611d7b61133c565b5b6000611d8a84828501611b6c565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611dc9601f83611a58565b9150611dd482611d93565b602082019050919050565b60006020820190508181036000830152611df881611dbc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000606082019050611e43600083018661184c565b611e50602083018561184c565b611e5d6040830184611626565b949350505050565b6000611e70826113a4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ea257611ea16119b3565b5b600182019050919050565b600082825260208201905092915050565b50565b6000611ece600083611ead565b9150611ed982611ebe565b600082019050919050565b600060a082019050611ef9600083018761184c565b611f06602083018661184c565b611f136040830185611626565b611f206060830184611626565b8181036080830152611f3181611ec1565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f76826113a4565b9150611f81836113a4565b925082611f9157611f90611f3c565b5b828204905092915050565b600081905092915050565b6000611fb4600083611f9c565b9150611fbf82611ebe565b600082019050919050565b6000611fd582611fa7565b9150819050919050565b7f455448205472616e73666572206661696c65642e000000000000000000000000600082015250565b6000612015601483611a58565b915061202082611fdf565b602082019050919050565b6000602082019050818103600083015261204481612008565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612081602083611a58565b915061208c8261204b565b602082019050919050565b600060208201905081810360008301526120b081612074565b905091905056fea264697066735822122089d5d9f1ba63050e356afe5413cba70201801de2908e23ccbf39f1e464e9549064736f6c63430008110033";

type JayMartConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JayMartConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JayMart__factory extends ContractFactory {
  constructor(...args: JayMartConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _jayAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JayMart> {
    return super.deploy(_jayAddress, overrides || {}) as Promise<JayMart>;
  }
  override getDeployTransaction(
    _jayAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_jayAddress, overrides || {});
  }
  override attach(address: string): JayMart {
    return super.attach(address) as JayMart;
  }
  override connect(signer: Signer): JayMart__factory {
    return super.connect(signer) as JayMart__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JayMartInterface {
    return new utils.Interface(_abi) as JayMartInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JayMart {
    return new Contract(address, _abi, signerOrProvider) as JayMart;
  }
}
