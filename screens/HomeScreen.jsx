import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [featuredCategories, setFeaturedCategories] = useState([])

  // do somenthing as soon as the screen mounts
  // when ui loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  // when component loads
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
      `
      )
      .then((data) => {
        setFeaturedCategories(data)
      })
  }, [])
  console.log(featuredCategories)
  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row pb-3 items-center mx-3 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='bg-gray-300 w-7 h-7 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>

        <UserIcon size={30} color='#00ccbb' />
      </View>

      {/* search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-2'>
        <View className='flex-row flex-1 space-x-2 p-3 bg-gray-200'>
          <MagnifyingGlassIcon size={20} color='#00ccbb' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00ccbb' />
      </View>

      {/* body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* categories */}

        <Categories />

        {/* featured rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
