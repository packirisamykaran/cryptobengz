import { ethers } from 'ethers';
import abi from './contractABI.json'

const contractAddress = '0x3A511e1B26627441D6FD9dbCbbe4873fE025e4Ad';

const contract = new ethers.Contract(contractAddress, abi)