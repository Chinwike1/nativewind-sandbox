import { useColorScheme } from 'nativewind'
import { Pressable, Platform, View } from 'react-native'
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from 'react-native-heroicons/outline'

export default function Navbar() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View
      style={{
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
          },
          android: {
            elevation: 3,
          },
        }),
      }}
      className='px-8 py-6 bg-white shadow-top dark:bg-soft-dark flex-row items-center justify-between'
    >
      <HomeIcon color={colorScheme === 'light' ? 'black' : 'white'} size={28} />
      <HeartIcon
        color={colorScheme === 'light' ? 'black' : 'white'}
        size={28}
      />
      <ShoppingCartIcon
        color={colorScheme === 'light' ? 'black' : 'white'}
        size={28}
      />
      <Pressable onPress={toggleColorScheme}>
        {colorScheme === 'light' && (
          <SunIcon
            color={colorScheme === 'light' ? 'black' : 'white'}
            size={28}
          />
        )}
        {colorScheme === 'dark' && (
          <MoonIcon
            color={colorScheme === 'light' ? 'black' : 'white'}
            size={28}
          />
        )}
      </Pressable>
    </View>
  )
}
