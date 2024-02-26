import { StatusBar } from 'expo-status-bar'
import { FlatList, View, Dimensions, SafeAreaView, Text } from 'react-native'
import { products } from './utils/products'
import Navbar from './components/navbar'
import Product from './components/product'
import { useColorScheme } from 'nativewind'

const numColumns = 2
const screen_width = Dimensions.get('window').width
const column_width = screen_width / numColumns

export default function App() {
  const { colorScheme } = useColorScheme()

  return (
    <View className='flex-[1] bg-white dark:bg-[#1C1C1E] pt-8'>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <SafeAreaView />

      {/* <Text className='text-black dark:text-white'>
        Color scheme is {colorScheme}
      </Text> */}

      <FlatList
        className='borde border-slate-30'
        data={products}
        numColumns={numColumns}
        renderItem={(product_data) => {
          return (
            <Product
              image_url={product_data.item.image_url}
              name={product_data.item.name}
              price={product_data.item.price}
              column_width={column_width}
            />
          )
        }}
        keyExtractor={(item) => {
          return item.key
        }}
      />
      <Navbar />
    </View>
  )
}
