import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  image: string;
  backgroundColor: string;
  price: number;
  discount: number;
  description: string;
}

type RootStackParamList = {
  AddToCard: { product: Product };
  // other screens can be defined here
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Personal Care',
      image: 'https://picsum.photos/200?random=1',
      backgroundColor: '#f9f9f9',
      price: 29.99,
      discount: 10,
      description: 'This is a personal care product',
    },
    {
      id: 2,
      name: "Men's Grooming",
      image: 'https://picsum.photos/200?random=2',
      backgroundColor: '#f9f9f9',
      price: 49.99,
      discount: 20,
      description: 'This is a mens grooming product',
    },
    {
      id: 3,
      name: 'Tree Product',
      image: 'https://picsum.photos/200?random=3',
      backgroundColor: '#e5ffe5',
      price: 39.99,
      discount: 15,
      description: 'This is a tree product',
    },
    {
      id: 4,
      name: 'Eco-friendly Gadget',
      image: 'https://picsum.photos/200?random=4',
      backgroundColor: '#e0f7fa',
      price: 59.99,
      discount: 5,
      description: 'This is an eco-friendly gadget',
    },

  ];

  const handleImagePress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigation.navigate('AddToCard', { product })}
            style={styles.card}
          >
            <View style={[styles.product, { backgroundColor: product.backgroundColor }]}>
              <TouchableOpacity onPress={() => handleImagePress(product)}>
                <Image source={{ uri: product.image }} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>
                ${product.price}{' '}
                {product.discount > 0 ? (
                  <Text style={styles.discount}>-{product.discount}%</Text>
                ) : null}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <FlatList
                data={[selectedProduct]}
                renderItem={({ item }) => (
                  <View>
                    <Image source={{ uri: item.image }} style={styles.modalImage} />
                    <Text style={styles.modalName}>{item.name}</Text>
                    <Text style={styles.modalPrice}>
                      ${item.price}{' '}
                      {item.discount > 0 ? (
                        <Text style={styles.modalDiscount}>-{item.discount}%</Text>
                      ) : null}
                    </Text>
                    <Text style={styles.modalDescription}>{item.description}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#f4f4f4' },
  productContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30 },
  card: { width: '45%', marginVertical: 10 },
  product: {
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: { width: '100%', height: 120, resizeMode: 'cover' },
  name: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', paddingVertical: 10, color: '#333' },
  price: { fontSize: 18, textAlign: 'center', paddingVertical: 5, color: '#333' },
  discount: { fontSize: 16, color: 'green', fontWeight: 'bold' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalImage: { width: '100%', height: 200, resizeMode: 'contain' },
  modalName: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  modalPrice: { fontSize: 16, textAlign: 'center', paddingVertical: 5 },
  modalDiscount: { fontSize: 16, color: 'green', fontWeight: 'bold' },
  modalDescription: { fontSize: 16, textAlign: 'center', paddingVertical: 10 },
  modalCloseButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});

export default HomeScreen;

