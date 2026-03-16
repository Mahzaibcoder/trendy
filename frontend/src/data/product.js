import bagpack from "../assets/images/bagpack.jpeg";
import bags from "../assets/images/bags.jpeg";
import handbag from "../assets/images/handbag.jpeg";
import glasses from "../assets/images/glasses.jpeg";
import glasses2 from "../assets/images/glasses2.jpeg";
import shirt from "../assets/images/t shrt.jpeg";
import shirt2 from "../assets/images/shirt2.jpeg";
import girlshirt from "../assets/images/girlshirt.jpeg";
import shoe from "../assets/images/shoes.jpeg";
import shoe2 from "../assets/images/shoe2.jpeg";
import shoe3 from "../assets/images/shoe3.jpeg";

export const products = [

  {
    _id: "1",
    name: "Casual T-Shirt",
    description: "Comfortable cotton casual t-shirt for everyday wear.",
    regularPrice: 25,
    discountPrice: 18,
    offer: true,
    trending: true,
    imageUrls: [shirt, shirt2]
  },

  {
    _id: "2",
    name: "Women Shirt",
    description: "Stylish women shirt perfect for casual outings.",
    regularPrice: 30,
    offer: false,
    trending: false,
    imageUrls: [girlshirt]
  },

  {
    _id: "3",
    name: "Sport Shoes",
    description: "Lightweight running shoes designed for comfort.",
    regularPrice: 60,
    discountPrice: 48,
    offer: true,
    trending: true,
    imageUrls: [shoe, shoe2, shoe3]
  },

  {
    _id: "4",
    name: "Stylish Backpack",
    description: "Durable backpack ideal for travel and daily use.",
    regularPrice: 45,
    offer: false,
    trending: false,
    imageUrls: [bagpack]
  },

  {
    _id: "5",
    name: "Leather Handbag",
    description: "Elegant leather handbag for women.",
    regularPrice: 55,
    discountPrice: 40,
    offer: true,
    trending: false,
    imageUrls: [handbag]
  },

  {
    _id: "6",
    name: "Fashion Bag",
    description: "Modern fashion bag suitable for daily use.",
    regularPrice: 38,
    offer: false,
    trending: false,
    imageUrls: [bags]
  },

  {
    _id: "7",
    name: "Classic Glasses",
    description: "Stylish glasses for a trendy look.",
    regularPrice: 20,
    discountPrice: 15,
    offer: true,
    trending: false,
    imageUrls: [glasses, glasses2]
  }

];