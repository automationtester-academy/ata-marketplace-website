// mockData.js
const mockData = [
    {
      title: 'Chemise pour homme',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '10.99£',
      imageUrl: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Robe',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '12.99£',
      imageUrl: 'https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'T-shirt sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '20.99£',
      imageUrl: 'https://images.pexels.com/photos/2698844/pexels-photo-2698844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Robe sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '15.49£',
      imageUrl: 'https://images.pexels.com/photos/6634909/pexels-photo-6634909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Chemise pour homme',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '10.99£',
      imageUrl: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Robe',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '12.99£',
      imageUrl: 'https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'T-shirt sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '20.99£',
      imageUrl: 'https://images.pexels.com/photos/2698844/pexels-photo-2698844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Robe sans manches',
      description: 'Oversized Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,Drop Shoulder Collar,Long Sleeve Sweaters,Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.',
      price: '15.49£',
      imageUrl: 'https://images.pexels.com/photos/6634909/pexels-photo-6634909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  

export const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

  