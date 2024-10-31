import { View, Text } from 'react-native'
import React from 'react'
import Head from 'expo-router/head'

const AboutUs = () => {
  return (
    <View>
        <Head>
          <title>About Us1</title>
          <meta name="description" content="this is about us " />
        </Head> 
        <Text>About Us</Text>
    </View>
  )
}

export default AboutUs