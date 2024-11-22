import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Image, Alert, StyleSheet } from 'react-native';

const products = [
  { _id: 1, name: 'Italian Spagetti', price: 375, quantity: 0, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsbDb6tIOiNEASYAh-O94UZXLmK6Ax14HfQ&s' },
  { _id: 2, name: 'Italian Margherita Pizza', price: 250, quantity: 0, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gfOatKJ-ZXx1hwUmh10rSzbOtbisDOrkig&s' },
  { _id: 3, name: 'Italian Lasagna', price: 300, quantity: 0, uri: 'https://cdn.cdkitchen.com/recipes/images/2016/07/1933-6639-mx.jpg' },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 18 }}>
          <Text style={{ fontSize: 20 }}>{item.name} - </Text>
          <Text style={{ fontSize: 20 }}>Rs {item.price}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button title="Subtract" onPress={this.props.onSubtract} />
          <Text style={{ margin: 8 }}>{item.quantity}</Text>
          <Button title="Add" onPress={this.props.onAdd} />
        </View>
      </View>
    );
  }
}

class App extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    if (products[index].quantity > 0) {
      products[index].quantity -= 1;
      this.setState({ products });
    }
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }
  //alert 
  handleCheckout = () => {
    Alert.alert(
      "Order Confirmation",
      "Order has been placed!",
      [{ text: "OK", onPress: () => console.log("Order Confirmed") }],
      { cancelable: false }
    );
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;

    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    });

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={{ borderBottomWidth: 3, borderBottomColor: 'lightblue' }}
          data={this.state.products}
          renderItem={({ item, index }) => (
            
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id.toString()}
        />
        <Text style={{ padding: 25, fontSize: 24 }}>Total Quantity: {totalQuantity}</Text>
        <Text style={{ padding: 25, fontSize: 24 }}>Tax: Rs {totalPrice * 0.05}</Text>
        <Text style={{ padding: 25, fontSize: 24 }}>Total Price: Rs {totalPrice + totalPrice * 0.05}</Text>
        <Button title="Checkout" onPress={this.handleCheckout} color="#28a745" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default App;
