// Services data for Mutation Dermacare

export const services = [
    {
        id: 'skin-consultation',
        name: 'Skin Care Consultation',
        icon: '🌸',
        description: 'Comprehensive skin analysis and personalized treatment plans for all skin types and conditions. Our expert dermatologists evaluate your skin health and recommend the most effective herbal solutions.',
        features: [
            'Complete skin analysis',
            'Personalized treatment plan',
            'Dietary recommendations',
            'Follow-up support'
        ]
    },
    {
        id: 'hair-consultation',
        name: 'Hair Care Consultation',
        icon: '💇',
        description: 'Expert evaluation of hair and scalp conditions with customized herbal treatment protocols. Address hair fall, dandruff, early graying, and other hair concerns naturally.',
        features: [
            'Scalp health assessment',
            'Hair quality analysis',
            'Herbal treatment plan',
            'Lifestyle guidance'
        ]
    },
    {
        id: 'herbal-treatments',
        name: 'Herbal Dermatology Treatments',
        icon: '🌿',
        description: 'Specialized herbal treatments for chronic and recurrent skin conditions. We use 100% natural, steroid-free formulations backed by 15+ years of clinical experience.',
        features: [
            'Psoriasis management',
            'Eczema treatment',
            'Vitiligo care',
            'Chronic skin conditions'
        ]
    },
    {
        id: 'pediatric-care',
        name: 'Pediatric Skin Care',
        icon: '👶',
        description: 'Gentle, safe treatments specially designed for infants, babies, and children. From diaper rashes to childhood eczema, we provide caring solutions for young ones.',
        features: [
            'Baby-safe formulations',
            'Diaper rash treatment',
            'Childhood eczema care',
            'Sensitive skin solutions'
        ]
    },
    {
        id: 'chronic-management',
        name: 'Chronic Disease Management',
        icon: '🏥',
        description: 'Long-term management programs for persistent skin conditions. Our approach combines herbal treatments with dietary modifications for lasting results.',
        features: [
            'Long-term care plans',
            'Regular monitoring',
            'Diet-based healing',
            'Symptom management'
        ]
    },
    {
        id: 'preventive-care',
        name: 'Preventive & Maintenance Care',
        icon: '✨',
        description: 'Proactive skin and hair care programs to maintain healthy skin and prevent future problems. Regular consultations and customized maintenance routines.',
        features: [
            'Skin health maintenance',
            'Preventive protocols',
            'Seasonal care plans',
            'Ongoing support'
        ]
    }
];

export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};
