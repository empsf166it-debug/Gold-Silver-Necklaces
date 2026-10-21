/**
 * AURELIA FINE JEWELRY - CENTRAL DATA STORE & LOGIC
 * Master product catalog, collections, user sessions, cart, wishlist, and admin state.
 */

const AURELIA_DATA = {
  // Brand metadata
  brand: {
    name: "AURELIA",
    tagline: "Haute Joaillerie & Fine Necklaces",
    established: "1994",
    phone: "+1 (800) 842-8735",
    email: "concierge@aureliajewelry.com",
    address: "740 Fifth Avenue, Haute Joaillerie Suite, New York, NY 10019"
  },

  // 12 Curated Master Necklaces with unique verified photography, specs, and variants
  products: [
    {
      id: "aurelia-solitaire-gold",
      name: "The Aurelia Solitaire Diamond Necklace",
      subtitle: "18K Champagne Gold with 1.2ct Lab-Grown Brilliant Diamond",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "pendant",
      length: "18\"",
      price: 1850,
      originalPrice: 2150,
      rating: 4.95,
      reviewCount: 38,
      inStock: true,
      stockCount: 14,
      isBestseller: true,
      isNew: false,
      featured: true,
      image: "images/aurelia-solitaire-gold.jpg",
      gallery: [
        "images/aurelia-solitaire-gold.jpg",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "A timeless masterpiece of understated luxury. Suspended upon our signature micro-faceted Venetian chain in 18K Champagne Gold, a hand-selected 1.2 carat round brilliant diamond shines with supreme fire and clarity. Designed to rest effortlessly at the collarbone.",
      details: {
        karat: "18K Solid Champagne Gold (750 hallmark)",
        stone: "1.20 Carat Round Brilliant Diamond (VVS1, E Color, Excellent Cut)",
        chainLength: "18 inches (adjustable jump-ring at 16 inches)",
        clasp: "Signature Lobster Clasp with Aurelia teardrop tag",
        weight: "4.8 grams",
        origin: "Handcrafted in Valenza, Italy"
      }
    },
    {
      id: "seraphina-silver-choker",
      name: "Seraphina Sculpted Silver Choker",
      subtitle: "925 Sterling Silver with Micro-Pave Zirconia Accents",
      metal: "silver",
      metalType: "925 Sterling Silver",
      style: "choker",
      length: "16\"",
      price: 680,
      originalPrice: 790,
      rating: 4.88,
      reviewCount: 29,
      inStock: true,
      stockCount: 19,
      isBestseller: true,
      isNew: true,
      featured: true,
      image: "images/seraphina-silver-choker.jpg",
      gallery: [
        "images/seraphina-silver-choker.jpg",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Modern architectural contouring meets artisanal silver craft. The Seraphina choker rests gracefully against the neckline with a smooth rhodium-finished curve, punctuated by delicate pavé detailing that captures evening light from every angle.",
      details: {
        karat: "925 Sterling Silver with Anti-Tarnish Rhodium Shield",
        stone: "Artisanal Pavé Cubic Zirconia",
        chainLength: "16 inches with 2-inch extender chain",
        clasp: "Hidden magnetic slide lock with safety clasp",
        weight: "12.4 grams",
        origin: "Crafted in Arezzo, Italy"
      }
    },
    {
      id: "celeste-layered-cascade",
      name: "Céleste Triple-Layered Gold Cascade",
      subtitle: "18K Gold Duo with Beaded & Herringbone Strands",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "layered",
      length: "20\"",
      price: 2450,
      originalPrice: 2800,
      rating: 4.98,
      reviewCount: 52,
      inStock: true,
      stockCount: 8,
      isBestseller: true,
      isNew: false,
      featured: true,
      image: "images/celeste-layered-cascade.jpg",
      gallery: [
        "images/celeste-layered-cascade.jpg",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Master the art of effortless layering. The Céleste brings together three distinct chain silhouettes—a sleek snake choker, a micro-beaded saturn chain, and an elongated lariat with teardrop pendant—curated to never tangle.",
      details: {
        karat: "18K Solid Champagne Gold (750 hallmark)",
        stone: "Natural Champagne Sapphire drop (0.45ct)",
        chainLength: "Layered 15\", 17\", and 20\" cascading tiers",
        clasp: "Unified 3-strand tangle-free barrel clasp",
        weight: "9.6 grams",
        origin: "Hand-assembled in Geneva, Switzerland"
      }
    },
    {
      id: "etoile-silver-medallion",
      name: "Étoile Astral Silver Medallion",
      subtitle: "Oxidized 925 Silver with Celestial Engraving & Star Diamond",
      metal: "silver",
      metalType: "925 Sterling Silver",
      style: "pendant",
      length: "22\"",
      price: 540,
      originalPrice: 620,
      rating: 4.91,
      reviewCount: 23,
      inStock: true,
      stockCount: 16,
      isBestseller: false,
      isNew: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "A talisman of direction and inner strength. Features a hand-engraved celestial compass on an organic hammered 925 sterling silver medallion, centered with a conflict-free star-set diamond.",
      details: {
        karat: "925 Sterling Silver with subtle vintage patina",
        stone: "0.08ct Star-set Natural White Diamond (VS2)",
        chainLength: "22 inches Diamond-Cut Oval Rolo Chain",
        clasp: "Custom Hand-Forged S-hook clasp",
        weight: "8.2 grams",
        origin: "Handcrafted in Athens, Greece"
      }
    },
    {
      id: "valere-figaro-gold",
      name: "The Valère Heavy Gold Figaro Chain",
      subtitle: "Solid 18K Yellow Gold Statement 5mm Links",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "chain",
      length: "20\"",
      price: 3100,
      originalPrice: 3500,
      rating: 4.97,
      reviewCount: 44,
      inStock: true,
      stockCount: 6,
      isBestseller: true,
      isNew: false,
      featured: false,
      image: "images/valere-figaro-gold.jpg",
      gallery: [
        "images/valere-figaro-gold.jpg",
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Substantial, confident, and unapologetically luxurious. The Valère features precision diamond-cut bevels on each Italian 3+1 Figaro link, refracting sunlight with unmistakable warm gold radiance.",
      details: {
        karat: "18K Solid Warm Yellow Gold (750 hallmark)",
        stone: "Pure Gold (No stones)",
        chainLength: "20 inches (5.2mm link thickness)",
        clasp: "Heavy-duty custom box clasp with dual safety figure-eight latches",
        weight: "18.5 grams",
        origin: "Vicenza, Italy"
      }
    },
    {
      id: "lumina-pearl-silver",
      name: "Lumina Baroque Pearl Silver Lariat",
      subtitle: "Australian Freshwater Keshi Pearl on 925 Rope Chain",
      metal: "silver",
      metalType: "925 Sterling Silver",
      style: "pendant",
      length: "24\"",
      price: 720,
      originalPrice: 850,
      rating: 4.86,
      reviewCount: 18,
      inStock: true,
      stockCount: 11,
      isBestseller: false,
      isNew: true,
      featured: false,
      image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Every baroque pearl is singular—no two are ever identical. Suspended from an intricate diamond-cut 925 silver rope chain, this organic lustrous gem shimmers with iridescent pink and silver orient.",
      details: {
        karat: "925 Sterling Silver with White Gold dipping",
        stone: "Grade AAA Australian Cultured Baroque Pearl (14-16mm)",
        chainLength: "24 inches drop lariat with sliding silicone adjuster",
        clasp: "Toggle ring clasp",
        weight: "11.2 grams",
        origin: "Broome, Western Australia & Arezzo"
      }
    },
    {
      id: "monarch-tennis-gold",
      name: "The Monarch Diamond Tennis Necklace",
      subtitle: "18K Champagne Gold with 4.5ct Continuous Lab Diamonds",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "tennis",
      length: "16\"",
      price: 4800,
      originalPrice: 5400,
      rating: 5.0,
      reviewCount: 31,
      inStock: true,
      stockCount: 4,
      isBestseller: true,
      isNew: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "The pinnacle of red-carpet glamour. Over 110 individually set round brilliant diamonds articulate seamlessly around the neckline with fluid movement, bathed in our bespoke Champagne Gold alloy.",
      details: {
        karat: "18K Solid Champagne Gold (750 hallmark)",
        stone: "4.50 Total Carat Weight Brilliant Diamonds (VS1+, F-G Color)",
        chainLength: "16 inches (choker collar fit)",
        clasp: "Double-hinged integrated security safety clasp",
        weight: "22.0 grams",
        origin: "Geneva Haute Joaillerie Atelier"
      }
    },
    {
      id: "solstice-silver-mesh",
      name: "Solstice Liquid Silver Ribbon Choker",
      subtitle: "Woven 925 Italian Mesh with Flexible Contour",
      metal: "silver",
      metalType: "925 Sterling Silver",
      style: "choker",
      length: "16\"",
      price: 590,
      originalPrice: 690,
      rating: 4.82,
      reviewCount: 19,
      inStock: true,
      stockCount: 15,
      isBestseller: false,
      isNew: false,
      featured: false,
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Drapes like molten liquid silk across the skin. Hand-knitted from thousands of micro-threads of 925 sterling silver, this mesh necklace flexes with your every gesture.",
      details: {
        karat: "925 Italian Sterling Silver (925 hallmark)",
        stone: "Pure Silver Mesh",
        chainLength: "15.5 inches with 1.5-inch extension",
        clasp: "Sleek magnetic box clasp with safety pin",
        weight: "14.2 grams",
        origin: "Milan, Italy"
      }
    },
    {
      id: "elysian-emerald-gold",
      name: "Elysian Colombian Emerald Pendant",
      subtitle: "18K Gold Emerald-Cut Solitaire with Halo Pavé",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "pendant",
      length: "18\"",
      price: 2950,
      originalPrice: 3400,
      rating: 4.99,
      reviewCount: 41,
      inStock: true,
      stockCount: 5,
      isBestseller: true,
      isNew: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "An homage to regal heritage. Anchored by a vivid verdant 1.6-carat Muzo-origin emerald, framed by micro-pavé diamonds on a delicate 18K gold diamond-cut wheat chain.",
      details: {
        karat: "18K Solid Champagne Gold (750 hallmark)",
        stone: "1.60 Carat Colombian Emerald & 0.35ct Diamond halo",
        chainLength: "18 inches (adjustable to 16 inches)",
        clasp: "Teardrop lobster claw with Aurelia stamp",
        weight: "6.1 grams",
        origin: "Paris Atelier & Bogota Stones"
      }
    },
    {
      id: "zephyr-silver-curb",
      name: "Zephyr Beveled Silver Curb Chain",
      subtitle: "Solid 925 Sterling Silver 6mm Precision Link",
      metal: "silver",
      metalType: "925 Sterling Silver",
      style: "chain",
      length: "22\"",
      price: 490,
      originalPrice: 560,
      rating: 4.87,
      reviewCount: 27,
      inStock: true,
      stockCount: 22,
      isBestseller: false,
      isNew: false,
      featured: false,
      image: "images/zephyr-silver-curb.jpg",
      gallery: [
        "images/zephyr-silver-curb.jpg",
        "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Crisp, mirror-polished edges with substantial presence. The Zephyr curb chain delivers effortless everyday refinement whether worn solo or anchored with our custom charms.",
      details: {
        karat: "925 Sterling Silver with anti-tarnish micro-film",
        stone: "Pure Silver",
        chainLength: "22 inches (6.0mm link)",
        clasp: "Custom oversized spring-ring clasp",
        weight: "26.8 grams",
        origin: "Birmingham Jewellery Quarter, UK"
      }
    },
    {
      id: "solaria-sunburst-gold",
      name: "Solaria Radiant Sunburst Medallion",
      subtitle: "18K Gold Coin with Floating White Opal Center",
      metal: "gold",
      metalType: "18K Champagne Gold",
      style: "pendant",
      length: "20\"",
      price: 1980,
      originalPrice: 2250,
      rating: 4.93,
      reviewCount: 35,
      inStock: true,
      stockCount: 9,
      isBestseller: true,
      isNew: true,
      featured: false,
      image: "images/solaria-sunburst-gold.jpg",
      gallery: [
        "images/solaria-sunburst-gold.jpg",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Inspired by ancient celestial cartography. A radiating sunburst coin forged from warm 18K gold cradles a hypnotic natural Coober Pedy white opal flashing flashes of azure and ember.",
      details: {
        karat: "18K Solid Champagne Gold (750 hallmark)",
        stone: "Natural Australian White Crystal Opal (1.1ct)",
        chainLength: "20 inches link chain with 18\" shortening ring",
        clasp: "Signature oval lobster clasp",
        weight: "7.9 grams",
        origin: "Sydney & Valenza"
      }
    },
    {
      id: "clarisse-dual-tone",
      name: "Clarisse Dual-Tone Interlocking Link",
      subtitle: "Intertwined 18K Gold and 925 Sterling Silver Chain",
      metal: "silver", // filterable under both
      metalType: "18K Gold & 925 Silver",
      style: "layered",
      length: "18\"",
      price: 1420,
      originalPrice: 1650,
      rating: 4.89,
      reviewCount: 22,
      inStock: true,
      stockCount: 12,
      isBestseller: false,
      isNew: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "The harmony of warm gold and cool silver. Two entwined oval links symbolize eternal union and duality, suspended on a delicate two-tone interlocking cable chain.",
      details: {
        karat: "18K Solid Gold & 925 Sterling Silver combination",
        stone: "Clean polished precious metal (Zero stones)",
        chainLength: "18 inches",
        clasp: "Integrated toggle ring clasp",
        weight: "8.6 grams",
        origin: "Firenze, Italy"
      }
    }
  ],

  // 6 Curated Signature Collections for Page 4 & Homepage Section 2
  collections: [
    {
      id: "gold-classics",
      title: "Gold Classics",
      tagline: "Timeless Radiance in 18K",
      description: "Hand-forged chains, radiant solitaires, and enduring silhouettes bathed in our bespoke Champagne Gold alloy.",
      metal: "gold",
      itemCount: 7,
      image: "images/aurelia-solitaire-gold.jpg",
      filterStyle: "gold"
    },
    {
      id: "silver-essentials",
      title: "Silver Essentials",
      tagline: "Crisp Modern Architecture",
      description: "Sculptural 925 sterling silver chokers, liquid mesh, and celestial medallions finished with tarnish-resistant rhodium.",
      metal: "silver",
      itemCount: 5,
      image: "images/seraphina-silver-choker.jpg",
      filterStyle: "silver"
    },
    {
      id: "pendant-stories",
      title: "Pendant Stories",
      tagline: "Talismans & Keepsakes",
      description: "Meaningful medallions, celestial compasses, and rare gemstones crafted to become personal heirlooms.",
      metal: "all",
      itemCount: 6,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80",
      filterStyle: "pendant"
    },
    {
      id: "layered-looks",
      title: "Layered Looks",
      tagline: "Curated Multi-Tier Harmony",
      description: "Carefully proportioned tiers designed to cascade effortlessly without tangling, from delicate chokers to dramatic lariats.",
      metal: "all",
      itemCount: 4,
      image: "images/celeste-layered-cascade.jpg",
      filterStyle: "layered"
    },
    {
      id: "everyday-elegance",
      title: "Everyday Elegance",
      tagline: "Effortless Understated Luxury",
      description: "Featherweight chains, minimalist bars, and daily essentials designed for 24/7 comfortable wear.",
      metal: "all",
      itemCount: 8,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      filterStyle: "chain"
    },
    {
      id: "special-occasion",
      title: "Special Occasion",
      tagline: "Gala & Red-Carpet Splendor",
      description: "Statement diamond tennis collars, Colombian emerald solitaires, and high-jewelry ceremonial creations.",
      metal: "gold",
      itemCount: 4,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
      filterStyle: "tennis"
    }
  ],

  // Sample Customer Reviews
  reviews: [
    {
      id: "rev-1",
      productId: "aurelia-solitaire-gold",
      author: "Evelyn Sterling-Montague",
      location: "London, UK",
      verified: true,
      rating: 5,
      date: "October 3, 2026",
      title: "Breathtaking quality and fire in the diamond",
      comment: "The Champagne Gold alloy has such a soft, warm glow—not harsh or overly yellow like standard retail pieces. It hangs perfectly in the collarbone hollow. Packaging was like receiving a gift from an imperial jeweler."
    },
    {
      id: "rev-2",
      productId: "aurelia-solitaire-gold",
      author: "Catherine DuPont",
      location: "Paris, France",
      verified: true,
      rating: 5,
      date: "September 24, 2026",
      title: "My signature daily necklace",
      comment: "I have worn this every day for three weeks, through dinners and morning meetings. The clasp is secure yet easy to fasten. Outstanding craftsmanship."
    },
    {
      id: "rev-3",
      productId: "seraphina-silver-choker",
      author: "Sienna V.",
      location: "New York, NY",
      verified: true,
      rating: 5,
      date: "October 8, 2026",
      title: "Sculptural perfection in sterling silver",
      comment: "The weight is wonderfully balanced. The rhodium finish keeps it looking like polished white gold. I get asked about it constantly!"
    },
    {
      id: "rev-4",
      productId: "celeste-layered-cascade",
      author: "Eleanor Vance",
      location: "Milan, Italy",
      verified: true,
      rating: 5,
      date: "September 18, 2026",
      title: "Finally, layered chains that never knot",
      comment: "The multi-tier spacer is genius. Three distinct textures that catch the candlelight seamlessly. Worth every single euro."
    }
  ],

  // Initial Seed Orders for Customer Dashboard & Admin
  orders: [
    {
      id: "AUR-89241",
      date: "Oct 12, 2026",
      customerName: "Eleanor Vance",
      customerEmail: "eleanor.vance@luxury.com",
      status: "Delivered",
      total: 2450.00,
      trackingNumber: "FDX-99482104US",
      carrier: "FedEx International Priority",
      items: [
        {
          id: "celeste-layered-cascade",
          name: "Céleste Triple-Layered Gold Cascade",
          metal: "18K Champagne Gold",
          length: "20\"",
          qty: 1,
          price: 2450.00,
          image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=400&q=80"
        }
      ],
      shippingAddress: {
        street: "742 Evergreen Terrace, Apt 14B",
        city: "Manhattan",
        state: "NY",
        zip: "10021",
        country: "United States"
      }
    },
    {
      id: "AUR-89190",
      date: "Oct 09, 2026",
      customerName: "Marcus Aurelius Thorne",
      customerEmail: "m.thorne@mayfair.co.uk",
      status: "In Transit",
      total: 1850.00,
      trackingNumber: "DHL-481029410GB",
      carrier: "DHL Express Luxury Courier",
      items: [
        {
          id: "aurelia-solitaire-gold",
          name: "The Aurelia Solitaire Diamond Necklace",
          metal: "18K Champagne Gold",
          length: "18\"",
          qty: 1,
          price: 1850.00,
          image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
        }
      ],
      shippingAddress: {
        street: "14 Berkeley Square",
        city: "Mayfair, London",
        state: "Greater London",
        zip: "W1J 6BQ",
        country: "United Kingdom"
      }
    },
    {
      id: "AUR-89055",
      date: "Oct 05, 2026",
      customerName: "Claire Beauchamp",
      customerEmail: "claire.b@geneva-trust.ch",
      status: "Crafting in Atelier",
      total: 4800.00,
      trackingNumber: "ATELIER-GENEVA-042",
      carrier: "Private Armored Delivery",
      items: [
        {
          id: "monarch-tennis-gold",
          name: "The Monarch Diamond Tennis Necklace",
          metal: "18K Champagne Gold",
          length: "16\"",
          qty: 1,
          price: 4800.00,
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
        }
      ],
      shippingAddress: {
        street: "Rue du Rhône 42",
        city: "Geneva",
        state: "GE",
        zip: "1204",
        country: "Switzerland"
      }
    }
  ],

  // Inquiries for Admin
  inquiries: [
    {
      id: "inq-101",
      name: "Sophia Lorenzi",
      email: "sophia.l@vogue.it",
      subject: "Bespoke Bridal 18K Diamond Choker Commission",
      date: "Oct 13, 2026",
      status: "Pending Response",
      message: "Buonasera, I am seeking an appointment at your Geneva or New York atelier for a bespoke necklace to accompany a Vera Wang gown in May. Could you share your custom timeline?"
    },
    {
      id: "inq-102",
      name: "Arthur Pendelton",
      email: "a.pendelton@oxford.ac.uk",
      subject: "Custom Monogram Engraving Font Question",
      date: "Oct 11, 2026",
      status: "Answered",
      message: "Does the custom necklace studio allow Greek letters for family crest engraving on the Étoile Astral Medallion? Thank you."
    }
  ]
};

// STORAGE HELPERS WITH LOCALSTORAGE PERSISTENCE
const StorageManager = {
  KEYS: {
    PRODUCTS: "aurelia_products_v2",
    CART: "aurelia_cart_v1",
    WISHLIST: "aurelia_wishlist_v1",
    USER: "aurelia_user_v1",
    THEME: "aurelia_theme_v1",
    RTL: "aurelia_rtl_v1",
    ORDERS: "aurelia_orders_v1",
    SAVED_CUSTOM: "aurelia_saved_custom_v1",
    REVIEWS: "aurelia_reviews_v1"
  },

  init() {
    const catalogVer = localStorage.getItem("aurelia_catalog_version");
    if (!localStorage.getItem(this.KEYS.PRODUCTS) || catalogVer !== "v3.1") {
      localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(AURELIA_DATA.products));
      localStorage.setItem("aurelia_catalog_version", "v3.1");
    }
    if (!localStorage.getItem(this.KEYS.CART)) {
      localStorage.setItem(this.KEYS.CART, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.KEYS.WISHLIST)) {
      localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(["aurelia-solitaire-gold", "seraphina-silver-choker"]));
    }
    if (!localStorage.getItem(this.KEYS.ORDERS)) {
      localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(AURELIA_DATA.orders));
    }
    if (!localStorage.getItem(this.KEYS.REVIEWS)) {
      localStorage.setItem(this.KEYS.REVIEWS, JSON.stringify(AURELIA_DATA.reviews));
    }
  },

  getProducts() {
    try {
      const data = localStorage.getItem(this.KEYS.PRODUCTS);
      return data ? JSON.parse(data) : AURELIA_DATA.products;
    } catch (e) {
      return AURELIA_DATA.products;
    }
  },

  saveProducts(products) {
    localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent("aurelia:products-updated"));
  },

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id) || products[0];
  },

  addProduct(newProd) {
    const prods = this.getProducts();
    newProd.id = newProd.id || "prod-" + Date.now();
    prods.unshift(newProd);
    this.saveProducts(prods);
    return newProd;
  },

  updateProduct(id, updates) {
    const prods = this.getProducts();
    const idx = prods.findIndex(p => p.id === id);
    if (idx !== -1) {
      prods[idx] = { ...prods[idx], ...updates };
      this.saveProducts(prods);
      return prods[idx];
    }
    return null;
  },

  deleteProduct(id) {
    let prods = this.getProducts();
    prods = prods.filter(p => p.id !== id);
    this.saveProducts(prods);
  },

  // CART
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CART)) || [];
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(this.KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("aurelia:cart-updated", { detail: { cart } }));
  },

  addToCart(productId, qty = 1, options = {}) {
    const cart = this.getCart();
    const product = this.getProductById(productId);
    if (!product && !options.isCustom) return false;

    const cartItemId = options.customId || `${productId}-${options.metal || product.metal}-${options.length || product.length}`;
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        cartItemId,
        id: productId,
        name: options.name || product.name,
        price: options.price || product.price,
        image: options.image || product.image,
        metal: options.metal || product.metalType,
        length: options.length || product.length,
        qty: qty,
        customSpecs: options.customSpecs || null
      });
    }

    this.saveCart(cart);
    return true;
  },

  removeFromCart(cartItemId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    this.saveCart(cart);
  },

  updateCartQty(cartItemId, qty) {
    const cart = this.getCart();
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
      item.qty = Math.max(1, qty);
      this.saveCart(cart);
    }
  },

  clearCart() {
    this.saveCart([]);
  },

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.qty, 0);
  },

  getCartSubtotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  // WISHLIST
  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.WISHLIST)) || [];
    } catch {
      return [];
    }
  },

  saveWishlist(list) {
    localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("aurelia:wishlist-updated", { detail: { list } }));
  },

  toggleWishlist(productId) {
    let list = this.getWishlist();
    const exists = list.includes(productId);
    if (exists) {
      list = list.filter(id => id !== productId);
    } else {
      list.push(productId);
    }
    this.saveWishlist(list);
    return !exists;
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },

  // USER AUTH & DASHBOARDS
  getUser() {
    try {
      const u = localStorage.getItem(this.KEYS.USER);
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  },

  login(userData) {
    localStorage.setItem(this.KEYS.USER, JSON.stringify(userData));
    window.dispatchEvent(new CustomEvent("aurelia:auth-changed", { detail: { user: userData } }));
  },

  logout() {
    localStorage.removeItem(this.KEYS.USER);
    window.dispatchEvent(new CustomEvent("aurelia:auth-changed", { detail: { user: null } }));
  },

  // ORDERS
  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.ORDERS)) || AURELIA_DATA.orders;
    } catch {
      return AURELIA_DATA.orders;
    }
  },

  addOrder(order) {
    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent("aurelia:orders-updated"));
    return order;
  },

  updateOrderStatus(orderId, newStatus) {
    const orders = this.getOrders();
    const target = orders.find(o => o.id === orderId);
    if (target) {
      target.status = newStatus;
      localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
      window.dispatchEvent(new CustomEvent("aurelia:orders-updated"));
    }
  },

  // SAVED CUSTOM DESIGNS
  getSavedCustomDesigns() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SAVED_CUSTOM)) || [];
    } catch {
      return [];
    }
  },

  saveCustomDesign(design) {
    const designs = this.getSavedCustomDesigns();
    design.id = "custom-" + Date.now();
    design.savedAt = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    designs.unshift(design);
    localStorage.setItem(this.KEYS.SAVED_CUSTOM, JSON.stringify(designs));
    return design;
  },

  // REVIEWS
  getReviews(productId) {
    try {
      const all = JSON.parse(localStorage.getItem(this.KEYS.REVIEWS)) || AURELIA_DATA.reviews;
      return productId ? all.filter(r => r.productId === productId) : all;
    } catch {
      return AURELIA_DATA.reviews;
    }
  },

  addReview(newReview) {
    try {
      const all = JSON.parse(localStorage.getItem(this.KEYS.REVIEWS)) || AURELIA_DATA.reviews;
      newReview.id = "rev-" + Date.now();
      newReview.date = "Just now";
      newReview.verified = true;
      all.unshift(newReview);
      localStorage.setItem(this.KEYS.REVIEWS, JSON.stringify(all));
      window.dispatchEvent(new CustomEvent("aurelia:review-added", { detail: { review: newReview } }));
      return newReview;
    } catch {
      return false;
    }
  }
};

// Initialize default storage immediately
StorageManager.init();
