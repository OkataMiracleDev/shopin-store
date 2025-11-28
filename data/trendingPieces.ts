export const TRENDING_PIECES_COUNT = 8;

export const trendingPiecesBase = [
  {
    id: 101,
    name: "Bottega Round Bag",
    price: "NGN 10000",
    link: "#",
    image: "/shop/bags/bag-2.jpg",
    slug: "bottega-round-bag-2",
  },
  {
    id: 102,
    name: "Classic Tote",
    price: "NGN 12000",
    link: "#",
    image: "/shop/bags/bag-3.jpg",
    slug: "classic-tote-3",
  },
  {
    id: 103,
    name: "Vintage Handbag",
    price: "NGN 9000",
    link: "#",
    image: "/shop/bags/bag-4.jpg",
    slug: "vintage-handbag-4",
  },
  {
    id: 104,
    name: "Statement Bag",
    price: "NGN 11000",
    link: "#",
    image: "/shop/bags/bag-1.jpg",
    slug: "classic-tote-1",
  },
  {
    id: 105,
    name: "Summer Croptop",
    price: "NGN 5500",
    link: "#",
    image: "/shop/croptops/croptop-1.jpg",
    slug: "summer-croptop-1",
  },
  {
    id: 106,
    name: "Casual Croptop",
    price: "NGN 5200",
    link: "#",
    image: "/shop/croptops/croptop-2.jpg",
    slug: "casual-croptop-2",
  },
  {
    id: 107,
    name: "Elegant Croptop",
    price: "NGN 6000",
    link: "#",
    image: "/shop/croptops/croptop-3.jpg",
    slug: "elegant-croptop-3",
  },
  {
    id: 108,
    name: "Urban Sneakers",
    price: "NGN 8000",
    link: "#",
    image: "/shop/footwear/footwear-1.jpg",
    slug: "urban-sneakers-1",
  },
  {
    id: 109,
    name: "Classic Trainers",
    price: "NGN 7800",
    link: "#",
    image: "/shop/footwear/footwear-2.jpg",
    slug: "classic-trainers-2",
  },
];

export const getTrendingPieces = (count = TRENDING_PIECES_COUNT) => {
  const shuffled = [...trendingPiecesBase].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
