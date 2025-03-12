import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    fetch('https://fakestoreapi.com/orders')
      .then(response => response.json())
      .then(data => {
        setOrders(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching orders:', error)
        setLoading(false)
      })
  }, [])

  const renderOrderItem = ({ item }: { item: any }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderText}>Order ID: {item.id}</Text>
      <Text style={styles.orderText}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  orderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  orderText: {
    fontSize: 16,
  },
})

export default MyOrder;

