type AstrophotographyImage = {
  src: string;
  caption: string;
  tags?: string[];
  author?: string;
  date?: Date;
  location?: {
    place: string;
    coords: {
      lat: number;
      lng: number;
    };
  };
  equipment?: string[];
  notes?: string;
};

export const images: AstrophotographyImage[] = [
  {
    src: "/ring-nebula.jpg",
    caption: "Ring Nebula (M57)",
    tags: ["nebula", "planetary", "m57"],
    author: "John Doe",
    date: new Date ('2021-08-01'),
    location: {
      place: "Trenton, NJ",
      coords: {
        lat: 40.2171,
        lng: -74.7429,
      },
    },
    equipment: ["Celestron 8SE", "ZWO ASI224MC"],
    notes: "First light with new camera",
  },
  {
    src: "/duck.jpg",
    caption: "Wild Duck Cluster (M11)",
    tags: ["cluster", "m11"],
    author: "Jane Doe",
    date: new Date ('2022-11-05'),
    location: {
      place: "Cherry Springs, PA",
      coords: {
        lat: 41.6501,
        lng: -77.8161,
      },
    },
    equipment: ["Orion XT8", "Canon EOS 80D"],
    notes: "First time at Cherry Springs",
  },
  {
    src: "/m20.jpg",
    caption: "Trifid Nebula (M20)",
    tags: ["nebula", "m20"],
    author: "John Doe",
    date: new Date ('2022-06-15'),
    location: {
      place: "Trenton, NJ",
      coords: {
        lat: 40.2171,
        lng: -74.7429,
      },
    },
    equipment: ["Celestron 8SE", "ZWO ASI224MC"],
    notes: "Star party with local club",
  },
  {
    src: "/m8.jpg",
    caption: "Lagoon Nebula (M8)",
    tags: ["nebula", "m8"],
    author: "Tom Smith",
    date: new Date ('2022-07-04'),
    location: {
      place: "Boise, ID",
      coords: {
        lat: 43.6150,
        lng: -116.2023,
      },
    },
    equipment: ["Nexstar 6SE", "ZWO ASI533MC"],
    notes: "First time in Boise",
  },
  {
    src: "/m16.jpg",
    caption: "Eagle Nebula (M16)",
    tags: ["nebula", "m16"],
    author: "Nancy Jones",
    date: new Date ('2022-09-21'),
    location: {
      place: "Sedona, AZ",
      coords: {
        lat: 34.8697,
        lng: -111.7601,
      },
    },
    equipment: ["Orion XT10", "Canon EOS 80D"],
    notes: "First time in Sedona",
  },
  {
    src: "/m17.jpg",
    caption: "Omega Nebula (M17)",
    tags: ["nebula", "m17"],
    author: "Thomas Brown",
    date: new Date ('2022-10-31'),
    location: {
      place: "Flagstaff, AZ",
      coords: {
        lat: 35.1983,
        lng: -111.6513,
      },
    },
    equipment: ["Orion XT8", "ZWO ASI533MC"],
    notes: "Halloween star party",
  },
  {
    src: "/m13.jpg",
    caption: "Great Hercules Cluster (M13)",
    tags: ["cluster", "m13"],
    author: "John Doe",
    date: new Date ('2022-08-15'),
    location: {
      place: "Trenton, NJ",
      coords: {
        lat: 40.2171,
        lng: -74.7429,
      },
    },
    equipment: ["Celestron 8SE", "ZWO ASI224MC"],
    notes: "Bad seeing conditions",
  },
  {
    src: "/rho-ophiuchi.jpg",
    caption: "Rho Ophiuchi Cloud Complex (XSS J16271-2423)",
    tags: ["nebula", "xss j16271-2423"],
    author: "Simon McNeil",
    date: new Date ('2022-07-15'),
    location: {
      place: "Toronto, ON",
      coords: {
        lat: 43.65107,
        lng: -79.347015,
      },
    },
    equipment: ["Orion XT10", "Canon EOS 80D"],
    notes: "After a long night of imaging",
  },
  {
    src: "/blue-horsehead.jpg",
    caption: "Blue Horsehead Nebula (IC 4592)",
    tags: ["nebula", "ic 4592"],
    author: "Jane Doe",
    date: new Date ('2022-09-15'),
    location: {
      place: "Cherry Springs, PA",
      coords: {
        lat: 41.6501,
        lng: -77.8161,
      },
    },
    equipment: ["Orion XT8", "Canon EOS 80D"],
    notes: "Broken dew shield",
  },
  {
    src: "/m24.jpg",
    caption: "Sagittarius Star Cloud (M24)",
    tags: ["cluster", "m24"],
    author: "Tom Smith",
    date: new Date ('2022-08-21'),
    location: {
      place: "Boise, ID",
      coords: {
        lat: 43.6150,
        lng: -116.2023,
      },
    },
    equipment: ["Nexstar 6SE", "ZWO ASI533MC"],
    notes: "Borrowed telescope",
  },
];

export const tags = new Set (images.flatMap((image) => image.tags ?? []).sort());