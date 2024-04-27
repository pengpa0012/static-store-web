import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, phone1Back, phone1Front, phone2Back, phone2Front, phone3Back, phone3Front, phone4Back, phone4Front } from "../assets";

export const featContent = [
  [ 
    {icon: icon1, text:"Battery", description: "5000mAh Lithium-ion \nbattery"},
    {icon: icon2, text:"Camera", description: "Rear camera: 64MP/12MP/8MP \nFront camera: 32MP"},
    {icon: icon3, text:"Charger", description: "65W SuperCharge adapter"}
  ],
  [
    {icon: icon4, text:"CPU", description: "Qualcomm Snapdragon 888 \nOcta-core processor"},
    {icon: icon5, text:"RAM", description: "8GB"},
    {icon: icon6, text:"ROM", description: "128GB"}
  ],
  [ {icon: icon7, text:"Video", description: "4K at 60fps"},
    {icon: icon8, text:"Size", description: "6.5-inch AMOLED display \nFull HD+ resolution"},
    {icon: icon9, text:"Fingerprint", description: "In-display \nfingerprint sensor"},
  ]
]

export const productContent = [
  {
    id: 0,
    front: phone1Front,
    back: phone1Back,
    name: "Quantum X1",
    description: "Experience unparalleled performance with the Quantum X1. Powered by a Qualcomm Snapdragon 888 Octa-core processor and 8GB of LPDDR5 RAM, this phone delivers smooth multitasking and gaming. Capture stunning photos with its triple rear camera setup, and enjoy immersive visuals on its 6.5-inch AMOLED display.",
    price: 999,
    specs: ["CPU: Qualcomm Snapdragon 888 Octa-core processor","RAM: 8GB", "Storage: 128GB", "Camera: Triple rear camera setup (Main: 64MP, Ultra-wide: 12MP, Telephoto: 8MP); Front camera: 32MP", "Video: Video: 4K at 60fps", "Size: 6.5-inch AMOLED display, Full HD+ resolution (2400 x 1080 pixels)", "Additional features: In-display fingerprint sensor, 5G connectivity, IP68 water and dust resistance, 4500mAh battery with fast charging support"],
    variant: ["#d2d3d5", "#34495E","#2C3E50", "#1F2833"]
  },
  {
    id: 1,
    front: phone2Front,
    back: phone2Back,
    name: "Apple Visionary 13",
    description: "Step into the future with the Apple Visionary 13. Featuring the powerful Apple A15 Bionic Hexa-core processor and iOS 15, this phone offers seamless performance and intuitive user experience. With its Super Retina XDR display and dual rear cameras, every moment is brought to life with clarity and vibrancy.",
    price: 899,
    specs: ["CPU: Apple A15 Bionic Hexa-core processor","RAM: 6GB","Storage: 256GB","Camera: Dual rear camera setup (Main: 12MP, Ultra-wide: 12MP; Front camera: 12MP", "Video: 4K at 60fps", "Size: 6.1-inch Super Retina XDR display, 2532 x 1170 pixels resolution", "Additional features: Face ID, 5G connectivity, MagSafe wireless charging, iOS 15"],
    variant: ["#4bb1f6","#1C1C1C", "#2C3E50"]
  },
  {
    id: 2,
    front: phone3Front,
    back: phone3Back,
    name: "NovaTech 360 Pro",
    description: "Unleash your creativity with the NovaTech 360 Pro. Equipped with a MediaTek Dimensity 1200 Octa-core processor and 12GB of LPDDR4X RAM, this phone handles demanding tasks with ease. Its quad rear camera setup lets you capture stunning photos and videos in high resolution, while the Super AMOLED Plus display provides immersive visuals.",
    price: 799,
    specs: ["CPU: MediaTek Dimensity 1200 Octa-core processor","RAM: 12GB","Storage: 256GB","Camera: Quad rear camera setup (Main: 108MP, Ultra-wide: 16MP, Macro: 5MP, Depth: 2MP); Front camera: 32MP", "Video: 8K at 30fps", "Size: 6.7-inch Super AMOLED Plus display, QHD+ resolution (3200 x 1440 pixels)", "Additional features: In-display fingerprint sensor, 5G connectivity, 6000mAh battery with fast charging support, Dual stereo speakers"],
    variant: ["#7F31E5", "#1ABC9C","#16A085", "#3498DB"]
  },
  {
    id: 3,
    front: phone4Front,
    back: phone4Back,
    name: "Horizon Elite X",
    description: "Elevate your smartphone experience with the Horizon Elite X. Powered by the Huawei Kirin 9000 Octa-core processor and featuring EMUI 12, this phone offers powerful performance and intelligent features. With its penta rear camera setup and OLED display, you can capture and view content with unparalleled clarity and detail.",
    price: 1099,
    specs: ["CPU: Huawei Kirin 9000 Octa-core processor", "RAM: 8GB", "Storage: 256GB", "Camera: Penta rear camera setup (Main: 50MP, Ultra-wide: 20MP, Periscope Telephoto: 12MP, Telephoto: 8MP, TOF 3D); Front camera: 32MP", "Video: 4K at 60fps","Size: 6.8-inch OLED display, Quad HD+ resolution (3120 x 1440 pixels)", "Additional features: In-display fingerprint sensor, 5G connectivity, IP68 water and dust resistance, EMUI 12, 5000mAh battery with fast wireless charging support, Reverse wireless charging, Dual SIM support"],
    variant: ["#e6e6e6", "#9B59B6","#8E44AD", "#6C3483"]
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