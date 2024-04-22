import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, phone1Back, phone1Front, phone2Back, phone2Front, phone3Back, phone3Front, phone4Back, phone4Front } from "../assets";

export const featContent = [
  [ 
    {icon: icon1, text:"Battery", description: "Description"},
    {icon: icon2, text:"Camera", description: "40mp"},
    {icon: icon3, text:"Charger", description: "Type-C"}
  ],
  [
    {icon: icon4, text:"CPU", description: "Dragon"},
    {icon: icon5, text:"RAM", description: "12GB"},
    {icon: icon6, text:"ROM", description: "128GB"}
  ],
  [ {icon: icon7, text:"Video", description: "4K resolution"},
    {icon: icon8, text:"Size", description: "10x10"},
    {icon: icon9, text:"Fingerprint", description: "Enabled"},
  ]
]

export const productContent = [
  {
    id: 0,
    front: phone1Front,
    back: phone1Back,
    name: "Product 1",
    description: "Description 1",
    price: 1000
  },
  {
    id: 1,
    front: phone2Front,
    back: phone2Back,
    name: "Product 2",
    description: "Description 2",
    price: 1001
  },
  {
    id: 2,
    front: phone3Front,
    back: phone3Back,
    name: "Product 3",
    description: "Description 3",
    price: 1002
  },
  {
    id: 3,
    front: phone4Front,
    back: phone4Back,
    name: "Product 4",
    description: "Description 4",
    price: 1000
  }
]

export const phoneFeatures = [
  {
    title: "Sleek and stylish",
    description: "Designed to seamlessly merge elegance with innovation, it redefines modern aesthetics while delivering unparalleled performance. Elevate your mobile experience with a device that not only looks stunning but also effortlessly enhances your daily interactions."
  },
  {
    title: "Vibrant display",
    description: "Immerse yourself in a visual feast as vibrant hues come to life on a high-definition screen, elevating your viewing experience to new heights. Whether you're streaming your favorite content or browsing photos, get ready to be dazzled by the brilliance of every detail."
  },
  {
    title: "and long lasting power...",
    description: "With its long-lasting battery life, you can stay productive and entertained without worrying about running out of power. Experience peace of mind knowing that your device can keep up with your busy schedule, providing reliable performance whenever you need it most."
  }
] 