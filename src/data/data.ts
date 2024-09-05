export interface House {
    id: string
    title: string;
    description: string;
    bedrooms?: number;
    bathrooms?: number;
    features: string[];
    price: string;
    images: string[];
    location: string;
  }
  
  export const houses: House[] = [
    {  id:'1',
      title: "Bahía Del Tezal Fase 1",
      description: "A sólo 3 minutos caminando de la playa. Hay un acceso al costado del hotel RIU.",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "Cocina, sala y comedor.",
        "Balcón.",
        "Área de lavado.",
        "Cortinas eléctricas anti huracán.",
        "Seguridad y elevador.",
        "Roof con terraza y alberca.",
        "Completamente amueblado y equipado.",
        "Baños de mármol y cocina granito.",
        "Mesa de comedor de mármol.",
        "Remodelado en baños y carpintería de cocina, closets y puertas."
      ],
      price: "298,000 DLLS",
      images: [
        "/images/house1/image1.jpeg",
        "/images/house1/image2.jpeg",
        "/images/house1/image3.jpeg",
        "/images/house1/image4.jpeg",
        "/images/house1/image5.jpeg"
      ],
      location: "Cabo San Lucas, México"
    },
    {id:'2',
        title: "I Tower",
        description: "Oportunidad única para renta vacacional por AIRBNB. Se aceptan créditos.",
        price: "1,890,000.00 MX (1,690,000.00 MX pago de contado)",
        features: [
          "Aceptamos pagos de contado.",
          "Crédito hipotecario."
        ],
        images: [
          "/images/itower/image1.jpeg",
          "/images/itower/image2.jpeg",
          "/images/itower/image3.jpeg",
          "/images/itower/image4.jpeg",
          "/images/itower/image5.jpeg"
        ],
        location: "México"
      },
      {id:'3',
        title: "Lote en Cerritos Beach Town",
        description: "Lote en venta a 300 metros de la orilla de la playa, con un área de 900 metros cuadrados.",
        price: "Consultar",
        features: [],
        images: [
          "/images/cerritos/image1.jpeg",
          "/images/cerritos/image2.jpeg",
          "/images/cerritos/image3.jpeg"
          ,
          "/images/cerritos/image4.jpeg"
          ,
          "/images/cerritos/image5.jpeg"
        ],
        location: "Cerritos Beach, México"
      },

      {id:'4',
        title: "¡Tu Nuevo Hogar Te Espera!",
        description: "Casa con 2 recámaras y un baño en un terreno de 160 m² con una construcción de 88 m². Segunda planta en obra negra lista para continuar tu proyecto.",
        bedrooms: 2,
        bathrooms: 1,
        features: [
          "Espacio de sala.",
          "Comedor.",
          "Cocina con barra y gabinetes.",
          "Aires acondicionados en las recámaras.",
          "Closet en una recámara.",
          "Cochera con portón de herrería.",
          "Protecciones.",
          "Techado de lámina galvanizada en patio frontal.",
          "Piso firme en patio frontal."
        ],
        price: "2,300,000 MX",
        images: [
          "/images/nuevo-hogar/image1.jpeg",
          "/images/nuevo-hogar/image2.jpeg",
          "/images/nuevo-hogar/image3.jpeg",
          "/images/nuevo-hogar/image4.jpeg",
          "/images/nuevo-hogar/image5.jpeg"
        ],
        location: "México"
      },
      {id:'5',
        title: "MISTIQ",
        description: "Departamento en venta en el Tezal con 2 habitaciones, 2.5 baños y un estacionamiento techado.",
        bedrooms: 2,
        bathrooms: 2.5,
        features: [
          "Cocina Integral.",
          "Comedor.",
          "Sala.",
          "Centro de Lavado.",
          "Estacionamiento techado para 1 auto."
        ],
        price: "8,600,000 MX",
        images: [
          "/images/mistiq/image1.jpeg",
          "/images/mistiq/image2.jpeg",
          "/images/mistiq/image3.jpeg"
          ,
          "/images/mistiq/image4.jpeg"
          ,
          "/images/mistiq/image5.jpeg"
        ],
        location: "El Tezal, México"
      },
      {id:'6',
        title: "Casa en Brisas del Pacífico",
        description: "Excelente ubicación cerca de escuelas, hospitales, centros comerciales y avenidas principales de CSL.",
        bedrooms: 2,
        bathrooms: 2,
        features: [
          "Sala comedor.",
          "Cocina.",
          "Patio bardeado.",
          "Cisterna.",
          "176 m² terreno.",
          "104 m² construcción."
        ],
        price: "3,250,000 MN",
        images: [
          "/images/brisas-del-pacifico/image1.jpeg",
          "/images/brisas-del-pacifico/image2.jpeg",
          "/images/brisas-del-pacifico/image3.jpeg",
          "/images/brisas-del-pacifico/image4.jpeg",
          "/images/brisas-del-pacifico/image5.jpeg"
        ],
        location: "Cabo San Lucas, México"
      },
      {id:'7',
        title: "Departamento en Venta: CL2",
        description: "Completamente equipado, ubicado en Jacarandas, enfrente de la Escuela UGC.",
        bedrooms: 2,
        bathrooms: 2,
        features: [
          "Cocina, Sala y Comedor.",
          "Balcón.",
          "Área de Lavado.",
          "Roof con Terraza y Alberca.",
          "Área de Juegos para Niños."
        ],
        price: "2,800,000 MXN",
        images: [
          "/images/cl2/image1.jpeg",
          "/images/cl2/image2.jpeg",
          "/images/cl2/image3.jpeg",
          "/images/cl2/image4.jpeg",
          "/images/cl2/image5.jpeg"
        ],
        location: "Jacarandas, México"
      },
      {id:'8',
        title: "PREVENTA The I Loft Cabo",
        description: "A minutos de la Marina CSL, Centros Nocturnos, Plazas Comerciales y Restaurantes.",
        
        features: [
          "Unidades tipo estudio de 42m Equipadas.",
          "Para dos o cuatro personas.",
          "Estacionamiento subterráneo.",
          "Alberca."
        ],
        price: "3,590,000 MXN",
        images: [
          "/images/i-loft-cabo/image1.jpeg",
          "/images/i-loft-cabo/image2.jpeg",
          "/images/i-loft-cabo/image3.jpeg",
          "/images/i-loft-cabo/image4.jpeg",
          "/images/i-loft-cabo/image5.jpeg"
        ],
        location: "Cabo San Lucas, México"
      },
      {id:'9',
        title: "Casa Nueva en Venta en la Zona de Los Cangrejos",
        description: "Descubre tu nuevo hogar en una de las zonas en crecimiento.",
        bedrooms: 3,
        features: [
          "Terreno de 200 m²: Amplio espacio para disfrutar.",
          "Espaciosas y bien iluminadas recámaras."
        ],
        price: "2,900,000 MXN",
        images: [
          "/images/los-cangrejos/image1.jpeg",
          "/images/los-cangrejos/image2.jpeg",
          "/images/los-cangrejos/image3.jpeg",
          "/images/los-cangrejos/image4.jpeg",
          "/images/los-cangrejos/image5.jpeg"
        ],
        location: "Los Cangrejos, México"
      },
      {id:'10',
        title: "Luxury Condos for Sale",
        description: "Discover your dream home in Mexico’s most visited tourist destination with incredible return on investment.",
        
        features: [
          "Breathtaking views.",
          "Premium amenities."
        ],
        price: "418,000 USD",
        images: [
          "/images/luxury-condos/image1.jpeg",
          "/images/luxury-condos/image2.jpeg",
          "/images/luxury-condos/image3.jpeg",
          "/images/luxury-condos/image4.jpeg",
          "/images/luxury-condos/image5.jpeg"
        ],
        location: "México"
      }


  ];