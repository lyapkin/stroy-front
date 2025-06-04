const data = [
  {
    id: 1,
    name: "Участок сварки",
    images: [
      "/images/home/gallery/1.jpg",
      "/images/home/gallery/2.jpg",
      "/images/home/gallery/3.jpg",
      "/images/home/gallery/7.jpg",
      "/images/home/gallery/8.jpg",
      "/images/home/gallery/9.jpg",
    ],
  },
  {
    id: 2,
    name: "Участок покраски",
    images: [
      "/images/home/gallery/1.jpg",
      "/images/home/gallery/2.jpg",
      "/images/home/gallery/3.jpg",
      "/images/home/gallery/4.jpg",
      "/images/home/gallery/5.jpg",
      "/images/home/gallery/6.jpg",
    ],
  },
  {
    id: 3,
    name: "Участок производства",
    images: [
      "/images/home/gallery/4.jpg",
      "/images/home/gallery/5.jpg",
      "/images/home/gallery/6.jpg",
      "/images/home/gallery/7.jpg",
      "/images/home/gallery/8.jpg",
      "/images/home/gallery/9.jpg",
    ],
  },
  // {
  //   id: 4,
  //   name: "Цех резки",
  //   images: [
  //     "/images/home/gallery/1.jpg",
  //     "/images/home/gallery/2.jpg",
  //     "/images/home/gallery/3.jpg",
  //     "/images/home/gallery/7.jpg",
  //     "/images/home/gallery/8.jpg",
  //     "/images/home/gallery/9.jpg",
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Цех опалубки",
  //   images: [
  //     "/images/home/gallery/1.jpg",
  //     "/images/home/gallery/2.jpg",
  //     "/images/home/gallery/3.jpg",
  //     "/images/home/gallery/4.jpg",
  //     "/images/home/gallery/5.jpg",
  //     "/images/home/gallery/6.jpg",
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Цех опалубки",
  //   images: [
  //     "/images/home/gallery/4.jpg",
  //     "/images/home/gallery/5.jpg",
  //     "/images/home/gallery/6.jpg",
  //     "/images/home/gallery/7.jpg",
  //     "/images/home/gallery/8.jpg",
  //     "/images/home/gallery/9.jpg",
  //   ],
  // },
  // {
  //   id: 7,
  //   name: "Цех опалубки",
  //   images: [
  //     "/images/home/gallery/1.jpg",
  //     "/images/home/gallery/2.jpg",
  //     "/images/home/gallery/3.jpg",
  //     "/images/home/gallery/7.jpg",
  //     "/images/home/gallery/8.jpg",
  //     "/images/home/gallery/9.jpg",
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Цех опалубки",
  //   images: [
  //     "/images/home/gallery/1.jpg",
  //     "/images/home/gallery/2.jpg",
  //     "/images/home/gallery/3.jpg",
  //     "/images/home/gallery/4.jpg",
  //     "/images/home/gallery/5.jpg",
  //     "/images/home/gallery/6.jpg",
  //   ],
  // },
];

export const getFilterApi = async (): Promise<
  { id: number; name: string }[]
> => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
  }));
};

export const getGalleryApi = (id: number | null) => {
  if (!id) {
    return data.reduce((arr, item) => {
      return [...arr, ...item.images];
    }, [] as string[]);
  }
  return data.find((item) => item.id === id)?.images || [];
};
