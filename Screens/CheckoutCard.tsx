import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Payment from './Payment';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  discount: number;
}

const Checkout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product, quantity, total } = route.params as { product: Product; quantity: number; total: string };

  const handleConfirmCheckout = () => {
    Alert.alert(
      'Order Confirmed',
      `Thank you for your purchase! Your total is $${total}.`,
      [{ text: 'OK', onPress: () => navigation.navigate('Home' as never) }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      <View style={styles.productDetails}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price.toFixed(2)}</Text>
        <Text style={styles.productQuantity}>Quantity: {quantity}</Text>
        <Text style={styles.productDiscount}>Discount: {product.discount}%</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.total}>${total}</Text>
      </View>
      <Payment />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmCheckout}>
        <Text style={styles.confirmButtonText}>Confirm Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 3, padding: 20, backgroundColor: '#f5f5f5',marginBottom:20, },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  productDetails: { alignItems: 'center', marginBottom: 20 },
  image: { width: 150, height: 150, borderRadius: 10 },
  productName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  productDescription: { fontSize: 16, marginTop: 10 },
  productPrice: { fontSize: 16, marginTop: 5 },
  productQuantity: { fontSize: 16, marginTop: 5 },
  productDiscount: { fontSize: 16, marginTop: 5, color: 'green' },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  total: { fontSize: 18, fontWeight: 'bold' },
  confirmButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center', marginVertical: 10,marginBottom:20, },
  confirmButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16, },
  cancelButton: { backgroundColor: '#FF5722', padding: 15, borderRadius: 5, alignItems: 'center' },
  cancelButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16,marginBottom:20, },
});

export default Checkout;
