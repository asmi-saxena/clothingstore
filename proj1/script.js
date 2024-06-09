const app = Vue.createApp({
    data() {
    return {
        searchQuery: '',
        clothes: [
          // Replace with your actual clothes data (id, name, image, price)
        { id: 1, name: 'T-Shirt', image: 'images/T-shirt.jpeg', price: '$20.00' },
        { id: 2, name: 'Jeans', image: 'images/jeans.jpeg', price: '$40.00' },
        { id: 3, name: 'Sweatshirt', image: 'images/sweatshirt.jpeg', price: '$35.00' },
        { id: 4, name: 'Shirt', image: 'images/shirt.jpeg', price: '$25.00' },
        { id: 5, name: 'Kurta', image: 'images/kurta.jpeg', price: '$15.00' },
        { id: 6, name: 'Pant', image: 'images/pant.jpeg', price: '$45.00' },
        { id: 7, name: 'Skirt', image: 'images/skirt.jpeg', price: '$20.00' },
    
        ],
    };
    },
    computed: {
        filteredItems() {
            return this.searchQuery.length >= 3
            ? this.clothes.filter((item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            : [];
        },
    },
});

app.mount('#app');
