const movie = [
  {
    id: 1,
    title: "Armageddon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 9,
  },
  {
    id: 2,
    title: "La La Land",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.5,
  },
  {
    id: 3,
    title: "It",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 6.0,
  },
  {
    id: 4,
    title: "Fargo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.3,
  },
  {
    id: 5,
    title: "RRR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.0,
  },
  {
    id: 6,
    title: "Django",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.6,
  },
  {
    id: 7,
    title: "Hateful Eight",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.2,
  },
  {
    id: 8,
    title: "Jumanji",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 7.2,
  },
  {
    id: 9,
    title: "Black Swan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.5,
  },
  {
    id: 10,
    title: "Green Book",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mollis eros, et semper nulla. Nunc ante massa, efficitur vel ex pharetra, volutpat ornare nisi. Praesent in sagittis ex. Cras faucibus arcu ac convallis lobortis. Morbi semper dapibus lectus, at aliquet nisl cursus egestas. Curabitur ac nibh nec sapien laoreet rutrum. Integer a tincidunt diam. In at sapien sed ipsum sollicitudin ornare at sit amet elit. Etiam suscipit mauris sed ultricies tincidunt. Donec libero massa, egestas porttitor ultricies et, lobortis et odio. Fusce euismod mattis enim sit amet scelerisque. Suspendisse vulputate eu sapien faucibus laoreet. Suspendisse mollis ex sagittis feugiat pretium. Quisque ut dolor euismod, rutrum sapien in, imperdiet nibh. Curabitur suscipit lorem at lacus vestibulum gravida. Aenean pellentesque rhoncus mauris a sagittis.",
    rating: 8.7,
  },
];

export default movie;
