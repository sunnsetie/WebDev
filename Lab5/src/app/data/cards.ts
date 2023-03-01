export interface ICard { image: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
  id: number;
  title: string;
  category: string;
  link: string
}

export const cards: ICard[] = [
  {
    id: 1,
    title: 'Apple iPhone 13 128GB Midnight',
    price: 409980,
    description: 'Strong of the world of everything.' +
      ' Incredibly bright display in a rugged design.' +
      ' Cinema Effect mode that makes your video real cinema.' +
      ' Super fast chip.' +
      ' And a tireless battery. ',
    category: 'Technique',
    image: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210915083739538085/210927160026151619.png@webp',
    rating: {
      rate: 4.8,
      count: 1967
    },
    link: 'https://ispace.kz/iphone/iphone-13/iphone-13-128-gb-temnaya-noch-mlnw3rka'
  },
  {
    id: 2,
    title: '18kt gold Masterpiece sapphire necklace',
    price: 28002402,
    description: 'Inspired by Georgian and Victorian pieces, Pragnells necklace is punctuated with a striking cushion-cut sapphire pendant totalling 14.00ct.' +
      'The soft angles of the vibrant stone make it glitter all the more.',
    category: 'Etc',
    image: 'https://cdn-images.farfetch-contents.com/18/08/89/14/18088914_38455316_1000.jpg',
    rating: {
      rate: 4.7,
      count: 109
    },
    link: 'https://www.farfetch.com/kz/shopping/women/pragnell-masterpiece-item-18088914.aspx?size=17&storeid=13333&utm_source=google&utm_medium=cpc&utm_keywordid=&utm_shoppingproductid=18088914-17&pid=google_search&af_channel=Search&c=19615332193&af_c_id=19615332193&af_siteid=&af_keywords=pla-293946777986&af_adset_id=154063330228&af_ad_id=646125462909&af_sub1=&af_sub5=18088914-17&is_retargeting=true&shopping=yes&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIiRFP9hvyqLO3ujZCH32VrcWyI4aAnz97hZHqN7NOCg098WsNQtYehoCb3sQAvD_BwE'
  },
  {
    id: 3,
    title: 'Acer Nitro 5 AN515-57',
    price: 489990,
    description: 'Everything you need to win' +
      'Evaluate the powerful performance of this device thanks to the 11th generation Intel Core i5 processor, the GEFORCE RTX graphic processor 30 and the display with FHD resolution.' +
      'Saturation and clarity of the image' +
      'FHD display with an update frequency 144 Hz.' +
      'Super-powerful sound' +
      'Thanks to the two speakers of 2 W and a high -quality sound, you can completely immerse yourself in the game and win the victory. The DTS: X Ultra technology provides an unsurpassed sound quality in three -dimensional space so that you will hear exactly from which side the enemy is approaching. ',
    category: 'Technique',
    image: 'https://shop.kz/upload/obzor/144232/pic158465_04.jpg',
    rating: {
      rate: 4.8,
      count: 245
    },
    link: 'https://shop.kz/offer/noutbuk-acer-nitro-5-an515-57-nh-qeler-00c/?gclid=CjwKCAiAjPyfBhBMEiwAB2CCIlLdH8OYu6waPg9hDHZ1xrrUMABAX61YQ4moH9nke7v7NYT6-u4cGhoCNMQQAvD_BwE'
  },
  {
    id: 4,
    title: 'Razer Blade 17',
    price: 1999990,
    description: '' +
      'Modern power for professionals\n' +
      'Effective cooling with evaporating camera\n' +
      'Future technologies\n' +
      'Kinematographic high -class sound',
    category: 'Technique',
    image: 'https://kz.e-katalog.com/jpg_zoom1/1734022.jpg',
    rating: {
      rate: 5,
      count: 29
    },
    link: 'https://shop.kz/offer/noutbuk-razer-blade-17-rz09-0423qef3-r3e1/?gclid=CjwKCAiAjPyfBhBMEiwAB2CCInRlBfuCBLdcV-Viqy5zDkcpUAnrF-y4x1fUqep2qnYNKlO8g4krRxoCWT0QAvD_BwE'
  },

  {
    id: 5,
    title: ' Laptop Acer Nitro 5 AN515-57 NH.QEKER.004 black ',
    price: 389800,
    description: '' +
      'Screen diagonal: 15.6 inches\n' +
      'Processor: Intel Core i5 11400H\n' +
      'Video card: NVIDIA GeForce GTX 1650\n' +
      'RAM size: 16 GB\n' +
      'Hard Drive Type: SSD\n' +
      'Total storage capacity: 512 GB',
    category: 'Technique',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    rating: {
      rate: 5.0,
      count: 333
    },
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item'
  },
  {
    id: 6,
    title: ' Apple iPhone 14 Pro Max 256Gb Purple Smartphone ',
    price: 685770,
    description: '' +
      'NFC technology: Yes\n' +
      'Color: Purple\n' +
      '    Screen type: OLED, Super Retina XDR display with the possibility of continuous operation\n' +
      '    Diagonal: 6.7 inches\n' +
      '    RAM size: 6 GB\n' +
      '    Processor: 6-core Apple A16 Bionic\n' +
      '    Internal memory capacity: 256 GB\n' +
      '    Battery Capacity: 3095 match',
    category: 'Technique',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: {
      rate: 5.0,
      count: 353
    },
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
  },
  {
    id: 7,
    title: 'Battery SVC AV9-12/S',
    price: 10020,
    description: ' The batteries of this series are maintenance-free, do not require refilling of water,' +
      ' are designed to operate in cyclic mode (withstand up to 600 cycles).' +
      ' The low level of self-discharge ensures a service life of 2 to 4 years in standby (buffer) mode.' +
      ' The sealed design allows the battery to be used in any position. ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hed/47641112215582/svc-av9-12-s-103102030-1.jpg',
    rating: {
      rate: 3.8,
      count: 89
    },
    link: 'https://kaspi.kz/shop/p/svc-av9-12-s-103102030/?c=750000000#!/item'
  },
  {
    id: 8,
    title: ' Sibshnur jute rope d 06 mm, 20 m, load 150 KGF ',
    price: 2500,
    description: ' The jute rope Ø 6mm is made of jute, a natural vegetable fiber, by torsion. ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/he7/50132432814110/sibsnur-4870144181141-20-m-dzut-104513082-1.jpg',
    rating: {
      rate: 4.5,
      count: 103
    },
    link: 'https://kaspi.kz/shop/p/sibshnur-dzhutovaja-d-06-mm-20-m-nagruzka-150-kgs-104513082/?c=750000000#!/item'
  },
  {
    id: 9,
    title: ' Lump soap household Spring Classic Household 72% 140 g ',
    price: 339,
    description: ' Soap household solid 72%. The storage temperature is not lower than minus 5 C.' +
      ' Restores its properties after defrosting. Natural household soap is made from high-quality raw materials.' +
      ' It has a high washing capacity, lush foam, less soaking in water. ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h62/hc5/47333471649822/vesna-klassiceskoe-hozajstvennoe-72-140-g-102953686-1.jpg',
    rating: {
      rate: 4.2,
      count: 83
    },
    link: 'https://kaspi.kz/shop/p/kuskovoe-mylo-hozjaistvennoe-vesna-klassicheskoe-hozjaistvennoe-72-140-g-102953686/?c=750000000#!/item'
  },
  {
    id: 10,
    title: ' Stool ZETA IMP-TV-056116, 45x35x35 cm, brown ',
    price: 4890,
    description: ' The stool is specially made without paint coating.' +
      ' To paint it to match the desired interior color. High seat rigidity. ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h40/48030433935390/zeta-taburet-imp-tv-056116-derevo-100345101-1-Container.jpg',
    rating: {
      rate: 3.2,
      count: 105
    },
    link: 'https://kaspi.kz/shop/p/taburet-zeta-imp-tv-056116-45x35x35-sm-korichnevyi-100345101/?c=750000000#!/item'
  },
  {
    id: 11,
    title: ' Rondell Santoku Cascara RD-687, blade: steel ',
    price: 4990,
    description: ' Reasonable minimalism and traditionally high quality is the motto of the Cascara collection,' +
      ' which includes five of the most necessary knives: cutting, universal, santoku,' +
      ' for peeling vegetables and cooking. Made of high-quality steel, they hold the' +
      ' sharpening perfectly and do their job flawlessly ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/he4/31585355038750/rondell-cascara-rd-687-16100042-1-Container.jpg',
    rating: {
      rate: 4.7,
      count: 55
    },
    link: 'https://kaspi.kz/shop/p/rondell-santoku-cascara-rd-687-lezvie-stal--16100042/?c=750000000#!/item'
  },

  {
    id: 12,
    title: ' Action Figure Seventh Heaven Anime Naruto 5492 7 cm ',
    price: 2500,
    description: '' +
      'type: Cartoon characters\n' +
      'theme: Anime\n' +
      'height, cm: 7\n' +
      'Main material: plastic ',
    category: 'Etc',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/ha1/49357282312222/figurka-sedmoe-nebo-5492-7-sm-104106402-1.jpg',
    rating: {
      rate: 5.0,
      count: 333
    },
    link: 'https://kaspi.kz/shop/p/figurka-sed-moe-nebo-anime-naruto-5492-7-sm-104106402/?c=750000000#!/item'
  },
  {
    id: 13,
    title: ' Skirt DD BRAND 1200 black 44 ',
    price: 8000,
    description: 'For pregnant women: No\n' +
      '    Skirt Length: Mini\n' +
      '    Composition: Polyester\n' +
      '    Closure: Zipper',
    category: 'Clothing',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/hc1/69017498714142/dd-brend-121200-chernyi-46-108903340-1.jpg',
    rating: {
      rate: 4.0,
      count: 153
    },
    link: 'https://kaspi.kz/shop/p/dd-brend-121200-chernyi-46-108903340/?c=750000000#!/item'
  },
  {
    id: 14,
    title: ' Lazzat Sabit Skirt 01 38 ',
    price: 8500,
    description: 'For pregnant women: No\n' +
      '    Skirt Length: Mini\n' +
      '    Composition: Polyester\n' +
      '    Closure: Zipper',
    category: 'Clothing',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/hc6/62077831643166/lazzat-sabit-01-104239446-1.jpg',
    rating: {
      rate: 4.0,
      count: 153
    },
    link: 'https://kaspi.kz/shop/p/lazzat-sabit-01-38-103527687/?c=750000000#!/item'
  },
  {
    id: 15,
    title: ' Coat Easy 88110 grey 50 ',
    price: 33900,
    description: 'Season: year-round\n' +
      '    Composition: wool\n' +
      '    Insulation: none',
    category: 'Clothing',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/hf3/62290514018334/easy-grey-coat-casta-88110-180-xl-seryj-xl-seryj-106368002-1.jpg',
    rating: {
      rate: 5.0,
      count: 0
    },
    link: 'https://kaspi.kz/shop/p/easy-88110-seryi-50-106368003/?c=750000000#!/item'
  },
  {
    id: 16,
    title: ' Coat Easy COM 911 burgundy 52 ',
    price: 29900,
    description: 'Season: year-round\n' +
      '    Composition: wool, ,polyester\n' +
      '    Insulation: none',
    category: 'Clothing',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h50/62290495668254/easy-red-coat-sj-m911-170-m-bordovyj-m-bordovyj-106367938-1.jpg',
    rating: {
      rate: 5.0,
      count: 20
    },
    link: 'https://kaspi.kz/shop/p/easy-sj-m911-bordovyi-52-106367939/?c=750000000#!/item'
  },
  {
    id: 17,
    title: ' ThiY PL2 multicolor 90 ',
    price: 4990,
    description: 'Type: Casual Dress\n' +
      '    Composition: cotton',
    category: 'Clothing',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h7e/63894697246750/thiy-pl2-mul-tikolor-90-107188721-1.jpg',
    rating: {
      rate: 5.0,
      count: 23
    },
    link: 'https://kaspi.kz/shop/p/thiy-pl2-mul-tikolor-90-107188721/?c=750000000#!/item'
  },
  {
    id: 18,
    title: ' Red Bull classic energy drink 4 pieces of 250 ml ',
    price: 2378,
    description: 'Type of drink: tonic\n' +
      '    Stimulating substance: taurine\n' +
      '    Sugar-free: No\n' +
      '    Volume: 1000 ml\n' +
      '    Taste: classic\n' +
      '    Country of manufacture: Austria',
    category: 'Products',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h55/32639634964510/red-bull-toniziruusij-lajm-250-ml-100801779-1-Container.jpg',
    rating: {
      rate: 5.0,
      count: 666
    },
    link: 'https://kaspi.kz/shop/p/red-bull-klassicheskii-4-sht-po-250-ml-100801779/?c=750000000#!/item'
  },
  {
    id: 19,
    title: ' KINDER milk chocolate bar 100 g ',
    price: 625,
    description: 'Type of chocolate: milk\n' +
      '    Filling: milk\n' +
      '    Additives: without additives\n' +
      '    Country of manufacture: Russia\n' +
      '    Storage conditions: store at a temperature from +3 ° C to +18 ° C and a relative humidity of no more than 65%',
    category: 'Products',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h31/67249861722142/kinder-shokoladnaya-plitka-molochnaya-100-g-100223058-1.jpg',
    rating: {
      rate: 5.0,
      count: 666
    },
    link: 'https://kaspi.kz/shop/p/kinder-shokoladnaja-plitka-molochnaja-100-g-100223058/?c=750000000#!/item'
  },
  {
    id: 20,
    title: ' KINDER Bueno milk chocolate bar, waffles 43 g ',
    price: 347,
    description: 'Type of chocolate: milk\n' +
      '    Filling: waffles\n' +
      '    Additives: without additives\n' +
      '    Country of manufacture: Russia\n' +
      '    Storage conditions: store at a temperature from 14°C to 18°C and a relative humidity of no more than 65%',
    category: 'Products',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/h61/46751854002206/kinder-sokoladnyj-batoncik-molocnyj-vafli-43-g-100222744-1-Container.jpg',
    rating: {
      rate: 5.0,
      count: 506
    },
    link: 'https://kaspi.kz/shop/p/kinder-bueno-shokoladnyi-batonchik-molochnyi-vafli-43-g-100222744/?c=750000000#!/item'
  },
  {
    id: 21,
    title: ' Haribo Happy Cola Zourr Marmalade 80 g ',
    price: 419,
    description: 'Type of marmalade: chewable\n' +
      '    Taste: orange\n' +
      '    With a toy: No\n' +
      '    Country of manufacture: Germany',
    category: 'Products',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/heb/47201683013662/haribo-happy-cola-zourr-80-g-101113111-1-Container.jpg',
    rating: {
      rate: 5.0,
      count: 283
    },
    link: 'https://kaspi.kz/shop/p/marmelad-haribo-happy-cola-zourr-80-g-101113111/?c=750000000#!/item'
  },
  {
    id: 22,
    title: ' Apivita honey floral natural 360 gr ',
    price: 2159,
    description: 'Type: Honey\n' +
      '    Type: floral\n' +
      '    Additives: without additives\n' +
      '    Country of manufacture: Kazakhstan',
    category: 'Products',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h29/48308815888414/med-apivita-naturalnyj-360gr-s-b-103460252-1.jpg',
    rating: {
      rate: 5.0,
      count: 111
    },
    link: 'https://kaspi.kz/shop/p/apivita-med-tsvetochnyi-natural-nyi-360-g-103460252/?c=750000000#!/item'
  },

]
