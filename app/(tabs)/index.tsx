import {StyleSheet, Text, View, Button} from 'react-native';
import "@ethersproject/shims";
import {ethers} from "ethers";

const contractAddress = '0xb3a3000f547e5478dea7cfff17c46419295d3c48';
// Docs - https://docs.ethers.org/v6/
const RPC_URL = 'https://ethereum-sepolia.rpc.subquery.network/public';
const provider = new ethers.JsonRpcProvider(RPC_URL);
const signerWallet = new ethers.Wallet('PRIVATE_KEY');
const signer = signerWallet.connect(provider);

const abi = [
  "function incrementCounter()",
  "function decrementCounter()",
  "function getCount() public view returns (int)"
]

const contract = new ethers.Contract(contractAddress, abi, signer);

export default function HomeScreen() {
  // Implement calling getCount() and incrementCounter() here

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Address: #
        </Text>
        <Text style={styles.text}>
          Counter: #
        </Text>
        <View style={styles.button}>
          <Button title='Increase counter' color='#000'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    padding: 48,
    maxWidth: 400
  },
  button: {
    marginTop: 32
  }
});
