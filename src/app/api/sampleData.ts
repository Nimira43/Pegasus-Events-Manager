import { Timestamp } from 'firebase/firestore'

export const sampleData = [
  {
    id: '1',
    title: 'Birthday party for Amy',
    date: Timestamp.fromDate(new Date(Date.now() + 23 * 86400000)),
    category: 'food',
    description:
      'A cosy birthday gathering filled with homemade dishes, laughter, and far too much cake. Friends and family are coming together to celebrate Megan with good food, warm company, and a few embarrassing stories.',
    city: 'Manchester, UK',
    venue: 'Vanessa Dobson, 29 Romford Road, Manchester, UK',
    hostedBy: 'Vanessa',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/84.jpg',
    attendees: [
      { id: 'a', name: 'Vanessa', photoURL: 'https://randomuser.me/api/portraits/women/55.jpg' },
      { id: 'b', name: 'Danny', photoURL: 'https://randomuser.me/api/portraits/men/73.jpg' },
      { id: 'c', name: 'Phil', photoURL: 'https://randomuser.me/api/portraits/men/38.jpg' }
    ]
  },
  {
    id: '2',
    title: 'Darts at the Fox and Goose',
    date: Timestamp.fromDate(new Date(Date.now() + 30 * 86400000)),
    category: 'drinks',
    description:
      'A relaxed evening at the Fox and Goose with pints, friendly competition, and the occasional wildly inaccurate dart throw. Perfect for unwinding and catching up with mates.',
    city: 'Birmingham, UK',
    venue: 'Fox and Goose, 23 Main Street, Birmingham, UK',
    hostedBy: 'Mick',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/51.jpg',
    attendees: [
      { id: 'a', name: 'Eddie', photoURL: 'https://randomuser.me/api/portraits/men/61.jpg' },
      { id: 'b', name: 'Debbie', photoURL: 'https://randomuser.me/api/portraits/women/14.jpg' }
    ]
  },

  {
    id: '3',
    title: 'New Star Wars movie',
    date: Timestamp.fromDate(new Date(Date.now() + 37 * 86400000)),
    category: 'film',
    description:
      'A group cinema trip to see the latest Star Wars release on the big screen. Expect popcorn, dramatic gasps, heated post-film debates, and at least one person ranking the trilogies on the way home.',
    city: 'Reading, UK',
    venue: 'ABC Cinema, 7 High Street, Reading, UK',
    hostedBy: 'Albert',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/75.jpg',
    attendees: [
      { id: 'a', name: 'Jack', photoURL: 'https://randomuser.me/api/portraits/men/35.jpg' },
      { id: 'b', name: 'Elsie', photoURL: 'https://randomuser.me/api/portraits/women/64.jpg' }
    ]
  },
  {
    id: '4',
    title: 'Art Museum Visit',
    date: Timestamp.fromDate(new Date(Date.now() + 43 * 86400000)),
    category: 'culture',
    description:
      'A slow, thoughtful afternoon exploring new exhibitions, sketching favourite pieces, and pretending to understand abstract installations. Ideal for anyone who enjoys creativity, conversation, and a good café afterwards.',
    city: 'Bristol, UK',
    venue: '53 New Street, Maidstone, UK',
    hostedBy: 'Sue',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/21.jpg',
    attendees: [
      { id: 'a', name: 'Tina', photoURL: 'https://randomuser.me/api/portraits/women/60.jpg' },
      { id: 'b', name: 'Rachel', photoURL: 'https://randomuser.me/api/portraits/women/11.jpg' }
    ]
  }
]

