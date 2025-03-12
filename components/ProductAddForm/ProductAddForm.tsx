import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import ImagePicker, { ImageLibraryOptions, PhotoQuality } from 'react-native-image-picker';

const ProductAddForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState< | null>(null);
  const [productDescription, setProductDescription] = useState('');

  const handleAddProduct = () => {
    if (productName && productPrice && productImage && productDescription) {
      Alert.alert('Product Added', `Product: ${productName}, Price: $${productPrice}, Image: ${(productImage as any)?.uri || ''}, Description: ${productDescription}`);
      setProductName('');
      setProductPrice('');
      setProductImage(null);
      setProductDescription('');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const handleChooseImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    const imagePickerOptions: ImageLibraryOptions = {
      ...options,
      mediaType: 'photo',
      quality: options.quality as PhotoQuality,
    };

    ImagePicker.launchImageLibrary(imagePickerOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets[0]) {
        setProductImage(response.assets[0] as any);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={productDescription}
        onChangeText={setProductDescription}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Choose Image" onPress={handleChooseImage} />
      {productImage && <Image source={{ uri: (productImage as any).uri }} style={styles.image} />}
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ProductAddForm;

