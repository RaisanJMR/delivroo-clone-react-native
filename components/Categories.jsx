import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* cat card */}
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 1' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 2' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 4' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 5' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 6' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 7' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 8' />
      <CategoryCard imgUrl='https://bit.ly/3Cnx4vq' title='testing 9' />
    </ScrollView>
  )
}
