import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from "../../constants/Colors"
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'



export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {

  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])
  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.WHITE,
    }}>
      <Image source={require("../../assets/images/login.png")} 
      style={{
        width: "100%",
        height: "60%",
      }}
      />
      <View style={{
          padding: 20,
          alignItems: "center"
        }}>
        <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center"
        }}
        >Ready to make a new friend?</Text>
        <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
          textAlign: "center",
          color: Colors.GRAY
        }}
        >Let's adopt the pet which you like adn make them happy again.</Text>

        <Pressable
        onPress={onPress}
        style={{
          padding: 14,
          marginTop: 100,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          borderRadius: 40
        }}
        >
          <Text style={{
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen