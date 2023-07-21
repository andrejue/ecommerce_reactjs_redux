import img1 from '../pages/images/products/mba15-midnight-select-202306.jpg';
import img2 from '../pages/images/products/mbp14-spacegray-select-202301.jpg';
import img3 from '../pages/images/products/imac-24-blue-selection-hero-202104.jpg';
import img4 from '../pages/images/products/mac-mini-hero-202301.jpg';
import img5 from '../pages/images/products/mac-studio-select-202306.jpg';
import img6 from '../pages/images/products/mac-pro-tower-hero-splitter-2023.jpg';
import img7 from '../pages/images/products/compare_ipad_10th_gen__u0knphjoh8i6_large.jpg';
import img8 from '../pages/images/products/ipad-pro-model-select-gallery-2-202212.jpg';
import img9 from '../pages/images/products/iphone-14-pro-model-unselect-gallery-2-202209.jpg';
import img10 from '../pages/images/products/iphone-14-model-unselect-gallery-2-202303.jpg';
import img11 from '../pages/images/products/iphone-se-finish-select-202207-midnight.jpg';
import img12 from '../pages/images/products/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR.jpg';
import img13 from '../pages/images/products/MKU93_VW_34FR+watch-41-alum-starlight-nc-8s_VW_34FR_WF_CO_GEO_BR.jpg';
import img14 from '../pages/images/products/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_BR.jpg';
import img15 from '../pages/images/products/airpods-compare-airpods-2-202209.jpg';
import img16 from '../pages/images/products/airpods-compare-airpods-max-202209.jpg';
import img17 from '../pages/images/products/apple-tv-4k-hero-select-202210.jpg';
import img18 from '../pages/images/products/case_silicon_apple_iphone14_yellow.jpg';
import img19 from '../pages/images/products/magsafe_charger_silver.jpg';
import img20 from '../pages/images/products/magic_keyboard_black_ipadpro.jpg';

const products = [
   {
      id:1,
      name: 'MacBook Air',
      img: img1,
      op1: {
         name:'MacBook Air 13 polegadas (chip M1)',
         img: img1,
         description: 'CPU de 8 núcleos, GPU de 7 núcleos, memória unificada de 8GB e SSD de 256GB',
         price: 11599.00
      },

      op2: {
         name: 'MacBook Air 15 polegadas (chip M2)',
         img: img1,
         description: 'CPU de 8 núcleos, GPU de 10 núcleos, memória unificada de 8GB e SSD de 512GB',
         price: 15499.00
      },
   },

   {
      id:2,
      name: 'MacBook Pro',
      img: img2,
      op1: {
         name:'MacBook Pro de 13 pol.',
         img: img2,
         description: 'CPU de 8 núcleos, GPU de 10 núcleos, até 24GB de memória unificada e até 2TB de SSD',
         price: 15299.00
      },
      op2: {
         name: 'MacBook Pro de 16 pol.',
         img: img2,
         description: 'CPU de até 12 núcleos, GPU de até 38 núcleos, até 96GB de memória unificada e até 8TB de SSD',
         price: 29999.00
      },
   },

   {
      id:3,
      name: 'iMac',
      img: img3,
      op1: {
         name:'iMac de 24 pol - 8 GB unificada',
         img: img3,
         description: 'Tela de 24 pol, chip M1 e SSD de 256 GB',
         price: 14799.00
      },
      op2: {
         name: 'iMac de 24 pol - 16 GB unificada',
         img: img3,
         description: 'Tela de 24 pol, chip M1 e SSD de 512 GB',
         price: 18799.00
      },
   },

   {
      id:4,
      name: 'Mac mini',
      img: img4,
      op1: {
         name:'Mac mini - chip M2 e 8 GB',
         img: img4,
         description: 'Duas portas Thunderbolt 4, SSD de 256 GB',
         price: 7499.00
      },
      op2: {
         name: 'Mac mini - chip M2 e 16 GB',
         img: img4,
         description: 'Quatro portas Thunderbolt 4, SSD de 512 GB',
         price: 15799.00
      },
   },

   {
      id:5,
      name: 'Mac Studio',
      img: img5,
      op1: {
         name:'Mac Studio CPU de 12 núcleos e GPU de 30 núcleos',
         img: img5,
         description: 'Memória unificada de 32 GB e SSD de 512 GB',
         price: 22999.00
      },
      op2: {
         name: 'Mac Studio CPU de 24 núcleos e GPU de 60 núcleos',
         img: img5,
         description: 'Memória unificada de 64 GB e SSD de 1 TB',
         price: 45999.00
      },
   },

   {
      id:6,
      name: 'Mac Pro',
      img: img6,
      op1: {
         name:'Mac Pro - CPU 24 núcleos e GPU de 60 núcleos',
         img: img6,
         description: 'Chip M2 Ultra com 64 GB de memória unificada',
         price: 74999.00
      },
      op2: {
         name:'Mac Pro - CPU 24 núcleos e GPU de 76 núcleos',
         img: img6,
         description: 'Chip M2 Ultra com 128 GB de memória unificada',
         price: 92999.00
      },
   },

   {
      id:7,
      name: 'iPad',
      img: img7,
      op1: {
         name:'iPad de 10ª geração',
         img: img7,
         description: 'Tela de 10,9 polegadas, chip A14 Bionic',
         price: 5299.00
      },
      op2: {
         name: 'iPad de 9ª geração',
         img: img7,
         description: 'Tela de 10,2 polegadas, chip A13 Bionic',
         price: 3899.00
      },
   },

   {
      id:8,
      name: 'iPad Pro',
      img: img8,
      op1: {
         name:'iPad Pro com tela de 11 polegadas',
         img: img8,
         description: 'Tela Liquid Retina',
         price: 9799.00
      },
      op2: {
         name: 'iPad Pro com tela de 12,9 polegadas',
         img: img8,
         description: 'Tela Liquid Retina XDR',
         price: 13299.00
      },
   },

   {
      id:9,
      name: 'iPhone 14 Pro',
      img: img9,
      op1: {
         name:'iPhone 14 Pro',
         img: img9,
         description: 'Tela de 6,1 polegadas',
         price: 9499.00
      },
      op2: {
         name: 'iPhone 14 Pro Max',
         img: img9,
         description: 'Tela de 6,7 polegadas',
         price: 10499.00
      },
   },

   {
      id:10,
      name: 'iPhone 14',
      img: img10,
      op1: {
         name:'iPhone 14',
         img: img10,
         description: 'Tela de 6,1 polegadas',
         price: 7599.00
      },
      op2: {
         name: 'iPhone 14 Plus',
         img: img10,
         description: 'Tela de 6,7 polegadas',
         price: 8599.00
      },
   },

   {
      id:11,
      name: 'iPhone SE',
      img: img11,
      op1: {
         name:'iPhone SE com 64 GB',
         img: img11,
         description: 'Camera avançada, Grande-angular de 12 MP',
         price: 4299.00
      },
      op2: {
         name: 'iPhone SE com 256 GB',
         img: img11,
         description: 'Camera avançada, Grande-angular de 12 MP',
         price: 5799.00
      },

   },

   {
      id:12,
      name: 'Apple Watch Ultra',
      img: img12,
      op1: {
         name:'Apple Watch Ultra - Pulseira P',
         img: img12,
         description: 'Para pulsos de 130 a 160 mm',
         price: 10299.00
      },
      op2: {
         name: 'Apple Watch Ultra - Pulseira G',
         img: img12,
         description: 'Para pulsos de 165 a 210 mm',
         price: 10299.00
      },
   },

   {
      id:13,
      name: 'Apple Watch Series 8',
      img: img13,
      op1: {
         name:'Apple Watch Series 8 meia-noite de aço inox',
         img: img13,
         description: 'Pulseira esportiva',
         price: 9599.00
      },
      op2: {
         name: 'Apple Watch Series 8 prateado de aço inox',
         img: img13,
         description: 'Pulseira esportiva',
         price: 8999.00
      },
   },

   {
      id:14,
      name: 'Apple Watch SE',
      img: img14,
      op1: {
         name:'Apple Watch SE - Caixa meia-noite de alumínio',
         img: img14,
         description: 'Pulseira esportiva',
         price: 3399.00
      },
      op2: {
         name: 'Apple Watch SE - Caixa estelar de alumínio',
         img: img14,
         description: 'Pulseira esportiva',
         price: 3399.00
      },
   },

   {
      id:15,
      name: 'Apple AirPods',
      img: img15,
      op1: {
         name:'AirPods',
         img: img15,
         description: '(2ª geração)',
         price: 1399.00
      },
      op2: {
         name: 'AirPods PRO',
         img: img15,
         description: '(2ª geração)',
         price: 1899.00
      },
   },

   {
      id:16,
      name: 'Apple AirPods Max',
      img: img16,
      op1: {
         name:'AirPods Max - Cinza-espacial',
         img: img16,
         description: 'Ganhei seis meses de Apple Music com seus AirPods Max',
         price: 6590.00
      },
      op2: {
         name: 'AirPods Max - Rosa',
         img: img16,
         description: 'Ganhei seis meses de Apple Music com seus AirPods Max',
         price: 6590.00
      },
   },

   {
      id:17,
      name: 'Apple TV 4K',
      img: img17,
      op1: {
         name:'Apple TV 4K - Wi-Fi',
         img: img17,
         description: 'com 64 GB de armazenamento',
         price: 1499.00
      },
      op2: {
         name: 'Apple TV 4K - Wi-Fi + Ethernet',
         img: img17,
         description: 'com 128 GB de armazenamento',
         price: 1699.00
      },
   },

   {
      id:18,
      name: 'Capa de silicone com MagSafe - iPhone 14',
      img: img18,
      op1: {
         name:'Capa de silicone com MagSafe - Amarelo-canário',
         img: img18,
         description: 'Exterior de silicone com camada de microfibra interna',
         price: 575.00
      },
      op2: {
         name:'Capa de silicone com MagSafe - Oliva',
         img: img18,
         description: 'Exterior de silicone com camada de microfibra interna',
         price: 575.00
      },
   },

   {
      id:19,
      name: 'Carregador MagSafe',
      img: img19,
      op1: {
         name:'Carregador MagSafe - Cabo de 1m',
         img: img19,
         description: 'Apenas para iPhone 12 e posteriores',
         price: 484.00
      },
      op2: {
         name:'Carregador MagSafe - Cabo de 89m',
         img: img19,
         description: 'Em qualquer parte da sua casa',
         price: 7200.00
      },
   },

   {
      id:20,
      name: 'Magic Keyboard - iPad Pro de 12,9 pol',
      img: img20,
      op1: {
         name:'Magic Keyboard - Inglês (EUA)',
         img: img20,
         description: 'Também funciona como capa frontal do seu iPad Pro',
         price: 4223.00
      },
      op2: {
         name:'Magic Keyboard - Russo (RUS)',
         img: img20,
         description: 'Também funciona como drone de espionagem',
         price: 4223.00
      },
   }
]

export default products;
