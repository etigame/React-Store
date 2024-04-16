// Better Data Constructor - object of objects - find item is quicker in that way
let cartItemsDB = {
  '01': {
    barcode: '01',
    name: 'Apple',
    color: 'Red',
    emoji: '🍎',
    price: 1.99,
    category: 'fruits',
    image:
      'https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png',
    amount: 6,
  },
  '14': {
    barcode: '14',
    name: 'Raspberry',
    color: 'Red',
    category: 'fruits',
    emoji: '🍇',
    price: 3.49,
    image:
      'https://static.vecteezy.com/system/resources/previews/022/825/587/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png',
    amount: 4,
  },
  '52': {
    barcode: '52',
    category: 'vegetables',
    name: 'Broccoli',
    color: 'Green',
    emoji: '🥦',
    price: 2.29,
    image:
      'https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png',
    amount: 8,
  },
  '53': {
    barcode: '53',
    category: 'vegetables',
    name: 'Bell Pepper',
    color: 'Red',
    emoji: '🫑',
    price: 1.99,
    image:
      'https://purepng.com/public/uploads/large/purepng.com-bell-peppervegetables-chilli-bell-pepper-pepper-capsicum-sweet-pepper-chili-941524726191g7h58.png',
    amount: 2,
  },
  '59': {
    barcode: '59',
    category: 'vegetables',
    name: 'Onion',
    color: 'Brown',
    emoji: '🧅',
    price: 0.99,
    image:
      'https://freepngimg.com/thumb/onion/145973-brown-onion-png-image-high-quality.png',
    amount: 6,
  },
  '63': {
    barcode: '63',
    category: 'vegetables',
    name: 'Radish',
    color: 'Red',
    emoji: '🫒',
    price: 1.39,
    image:
      'https://static.vecteezy.com/system/resources/previews/029/721/408/original/radish-transparent-background-png.png',
    amount: 2,
  },
}

// Old data constructor
// let cartItemsDB = [{
//     barcode: "01",
//     name: "Apple",
//     color: "Red",
//     emoji: "🍎",
//     price: 1.99,
//     category: "fruits",
//     image: "https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png",
//     amount: 6
// },
// {
//     barcode: "04",
//     name: "Grapes",
//     color: "Purple",
//     emoji: "🍇",
//     price: 3.99,
//     category: "fruits",
//     image: "https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png",
//     amount: 3
// },
// {
//     barcode: "10",
//     name: "Peach",
//     color: "Orange",
//     category: "fruits",
//     emoji: "🍑",
//     price: 2.29,
//     image: "https://pngfre.com/wp-content/uploads/peach-png-image-from-pngfre-33-1024x815.png",
//     amount: 6
// },
// {
//     barcode: "14",
//     name: "Raspberry",
//     color: "Red",
//     category: "fruits",
//     emoji: "🍇",
//     price: 3.49,
//     image: "https://static.vecteezy.com/system/resources/previews/022/825/587/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png",
//     amount: 4
// },
// {
//     barcode: "52",
//     category: "vegetables",
//     name: 'Broccoli',
//     color: 'Green',
//     emoji: '🥦',
//     price: 2.29,
//     image: 'https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png',
//     amount: 8
// },
// {
//     barcode: "53",
//     category: "vegetables",
//     name: 'Bell Pepper',
//     color: 'Red',
//     emoji: '🫑',
//     price: 1.99,
//     image: 'https://purepng.com/public/uploads/large/purepng.com-bell-peppervegetables-chilli-bell-pepper-pepper-capsicum-sweet-pepper-chili-941524726191g7h58.png',
//     amount: 2
// },
// {
//     barcode: "59",
//     category: "vegetables",
//     name: 'Onion',
//     color: 'Brown',
//     emoji: '🧅',
//     price: 0.99,
//     image: 'https://freepngimg.com/thumb/onion/145973-brown-onion-png-image-high-quality.png',
//     amount: 6
// },
// {
//     barcode: "63",
//     category: "vegetables",
//     name: 'Radish',
//     color: 'Red',
//     emoji: '🫒',
//     price: 1.39,
//     image: 'https://static.vecteezy.com/system/resources/previews/029/721/408/original/radish-transparent-background-png.png',
//     amount: 2
// },
// {
//     barcode: "101",
//     category: "dairy",
//     name: 'Milk',
//     emoji: '🥛',
//     price: 2.99,
//     image: 'https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png',
//     amount: 3
// },
// {
//     barcode: "104",
//     category: "dairy",
//     name: 'Yogurt',
//     emoji: '🍦',
//     price: 1.79,
//     image: 'https://www.karouncheese.com/images/products/1045_tn800_12064.png',
//     amount: 8
// },
// {
//     barcode: "108",
//     category: "dairy",
//     name: 'Cottage Cheese',
//     emoji: '🧀',
//     price: 3.49,
//     image: 'https://pngimg.com/d/cottage_cheese_PNG1.png',
//     amount: 1
// },
// {
//     barcode: "154",
//     category: "alcohol",
//     name: 'Beer',
//     emoji: '🍺',
//     price: 5.99,
//     image: 'https://pngimg.com/d/bottle_PNG2096.png',
//     amount: 6
// },
// ];

export default cartItemsDB
