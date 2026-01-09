// Products data for Mutation Dermacare
// Structure ready for e-commerce extension (price field included but not displayed)

export const products = [
  {
    id: 'calendula-cream',
    name: 'Calendula Moisturising Cream',
    subtitle: 'Multipurpose Healing Cream',
    category: 'skin-care',
    image: '/assets/products/all-products.jpg',
    description: 'A premium multipurpose healing cream formulated with pure Calendula extract. This gentle yet effective cream provides deep moisturization and supports natural skin healing.',
    benefits: [
      'Dry skin relief',
      'Soothes itching',
      'Diaper rash treatment',
      'Urticaria care',
      'Vitiligo support',
      'Psoriasis management',
      'Eczema relief',
      'Ichthyosis vulgaris care'
    ],
    ageGroup: 'Neonate to geriatric',
    keyIngredients: ['Calendula Extract', 'Natural Emollients', 'Herbal Actives'],
    featured: true,
    price: null // Price to be added when e-commerce is enabled
  },
  {
    id: 'baby-lotion',
    name: 'Baby Skin Care Lotion',
    subtitle: 'Gentle Care for Delicate Skin',
    category: 'baby-care',
    image: '/assets/products/all-products.jpg',
    description: 'Specially formulated for the most delicate skin. This ultra-gentle lotion provides lasting hydration while being completely safe for newborns and infants.',
    benefits: [
      'All dry skin conditions',
      'Diaper rash prevention',
      'Daily moisturization',
      'Gentle on sensitive skin'
    ],
    ageGroup: 'Newborn to toddler',
    keyIngredients: ['Natural Moisturizers', 'Gentle Herbal Extracts', 'Vitamin E'],
    featured: true,
    price: null
  },
  {
    id: 'anti-hairfall-shampoo',
    name: 'Anti-Hairfall Shampoo',
    subtitle: 'Strengthen & Regrow',
    category: 'hair-care',
    image: '/assets/products/anti-hairfall-shampoo.jpg',
    description: 'A powerful herbal formula designed to control hair fall and stimulate new hair growth. Strengthens hair from root to tip with natural ingredients.',
    benefits: [
      'Controls hair fall',
      'Promotes new hair growth',
      'Strengthens hair roots',
      'Nourishes scalp'
    ],
    ageGroup: 'Adults',
    keyIngredients: ['Bhringraj', 'Amla', 'Natural Proteins'],
    featured: true,
    price: null
  },
  {
    id: 'antifungal-powder',
    name: 'Anti-Fungal Dusting Powder',
    subtitle: 'Complete Fungal Protection',
    category: 'antifungal-care',
    image: '/assets/products/antifungal-powder.jpg',
    description: 'An effective herbal dusting powder that combats fungal infections naturally. Provides relief from itching, absorbs excess moisture, and prevents recurring infections.',
    benefits: [
      'All types of fungal infections',
      'Eliminates foul smell from sweating',
      'Relieves itching in skin folds',
      'Prevents rashes from sanitary napkins'
    ],
    ageGroup: 'All ages',
    keyIngredients: ['Neem Extract', 'Antifungal Herbs', 'Natural Absorbents'],
    featured: true,
    price: null
  },
  {
    id: 'fairness-face-wash',
    name: 'Fairness Face Wash',
    subtitle: 'Multipurpose Glow Enhancer',
    category: 'skin-care',
    image: '/assets/products/all-products.jpg',
    description: 'A gentle yet effective face wash designed to address multiple skin concerns. Helps reduce pigmentation, controls acne, and reveals a naturally radiant complexion.',
    benefits: [
      'Treats melasma',
      'Reduces post-inflammatory hyperpigmentation',
      'Controls acne',
      'Evens out skin tone'
    ],
    ageGroup: 'Teens to adults',
    keyIngredients: ['Natural Brighteners', 'Gentle Cleansers', 'Herbal Actives'],
    featured: true,
    price: null
  },
  {
    id: 'fairness-face-gel',
    name: 'Fairness Face Gel',
    subtitle: 'Lightweight Radiance Booster',
    category: 'skin-care',
    image: '/assets/products/all-products.jpg',
    description: 'A lightweight, non-greasy gel that absorbs quickly to deliver skin-brightening benefits. Perfect for daily use to maintain a healthy, glowing complexion.',
    benefits: [
      'Oil-free formula',
      'Quick absorption',
      'Daily radiance boost',
      'Suitable for all skin types'
    ],
    ageGroup: 'Teens to adults',
    keyIngredients: ['Aloe Vera', 'Vitamin C', 'Natural Brighteners'],
    featured: false,
    price: null
  },
  {
    id: 'anti-dandruff-shampoo',
    name: 'Anti-Dandruff Shampoo',
    subtitle: 'Herbal Neem Formula',
    category: 'hair-care',
    image: '/assets/products/anti-dandruff-shampoo.jpg',
    description: 'Free from harmful chemicals, this herbal neem shampoo effectively eliminates dandruff while nourishing your scalp. Provides complete dandruff solution with gentle care.',
    benefits: [
      'Eliminates dandruff',
      'Soothes itchy scalp',
      'Nourishes hair roots',
      'Chemical-free formula'
    ],
    ageGroup: 'All ages',
    keyIngredients: ['Neem Extract', 'Herbal Actives', 'Natural Cleansers'],
    featured: false,
    price: null
  }
];

export const categories = [
  {
    id: 'all',
    name: 'All Products',
    icon: '✨'
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    icon: '🌿'
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    icon: '💆'
  },
  {
    id: 'baby-care',
    name: 'Baby Care',
    icon: '👶'
  },
  {
    id: 'antifungal-care',
    name: 'Antifungal Care',
    icon: '🛡️'
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};
