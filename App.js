import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FetchAPI from "./component/fetchAPI"

export default function App() {
  const [account ,setAccount] = useState("");
  useEffect(()=>{
    fetch(`https://bafybeifk7mx5wxjhhvf5c7pylpejadobtjawkrxm3doshljhu6lzrizw4y.ipfs.infura-ipfs.io/`)
                .then((response) => response.json())
                .then(result =>setAccount(result.Type))

  })
  return (
    <View>
      <FetchAPI type={account} />
      <FetchAPI type="5555" />
    </View>
  );
}

const styles = StyleSheet.create({
  simsan: {
    backgroundColor: 'blue',
    padding: "100px",
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewText: {
    color: "green"
  }

});
