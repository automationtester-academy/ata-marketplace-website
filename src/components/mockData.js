// mockData.js
const mockData = [
    {
      title: 'Chemise pour homme',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '10.99£',
      imageUrl: './images/sweatshirt-picture.jpg',
    },
    {
      title: 'Robe',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '12.99£',
      imageUrl: './images/sleevless-picture.jpg',
    },
    {
      title: 'T-shirt sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '20.99£',
      imageUrl: './images/dress-picture.jpg',
    },
    {
      title: 'Robe sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '15.49£',
      imageUrl: './images/women-dress.jpg',
    },
  ];
  

export const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

  