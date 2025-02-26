import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  discount: number;
}

const AddToCard = () => {
  const navigation = useNavigation<NavigationProp<{ Checkout: { product: Product; quantity: number; total: string } }>>();
  const route = useRoute();
  const { product } = route.params as { product: Product };
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const calculateTotal = () => {
    const total = (product.price * quantity) - (product.price * quantity * product.discount) / 100;
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <MaterialIcons name="remove" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <MaterialIcons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.total}>${calculateTotal()}</Text>
        <Text style={styles.discountLabel}>Discount:</Text>
        <Text style={styles.discount}>{product.discount}%</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() =>
          navigation.navigate('Checkout', { product, quantity, total: calculateTotal() })
        }
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  productDetails: { alignItems: 'center', marginBottom: 20 },
  image: { width: 150, height: 150, borderRadius: 10 },
  productName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  productDescription: { fontSize: 16, marginTop: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
  quantity: { fontSize: 18, marginHorizontal: 15 },
  totalContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 },
  totalLabel: { fontSize: 18 },
  total: { fontSize: 18, fontWeight: 'bold' },
  discountLabel: { fontSize: 18 },
  discount: { fontSize: 18, color: 'green' },
  checkoutButton: { backgroundColor: '#FF5722', padding: 15, borderRadius: 5, alignItems: 'center' },
  checkoutText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default AddToCard;

