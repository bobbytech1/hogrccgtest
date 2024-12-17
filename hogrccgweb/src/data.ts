import { FaLightbulb } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRocket } from "react-icons/fa";


// data.ts
export interface EventData {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
  }

  interface ImageData {
    id: number;
    src: string;
    alt: string;
    caption?: string;
  };

  interface MinistriesData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
  };

  interface BlogData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    date: string;

  };

  interface AboutValues {
    id: number;
    imageUrl: React.ElementType | string;
    title: string;
    description: string;
  }
  
  export const Eventdata: EventData[] = [
    {
      id: 1,
      title: "Dinner and Award Night",
      description: " Its our Hog Dinner and Award night and we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus perferendis animi, minus id quia eveniet necessitatibus, repellat in doloribus dignissimos consequuntur? Odit ex corporis architecto doloribus iste ab, porro fuga aliquid exercitationem, molestias non! Adipisci omnis et, libero maxime, necessitatibus vel quas aliquid quaerat provident nostrum, esse reprehenderit molestias!.",
      image: "https://www.dropbox.com/scl/fi/exlokypfq4ugef2k4tsbw/IMG-20241123-WA0000.jpg?rlkey=9mm5ec1mmpg5qsjutvfpnzeiw&st=udxbtncc&raw=1",
      date: "December 1st, 2024",
    },
    {
      id: 2,
      title: "Dinner and Award Night",
      description: " Its our Hog Dinner and Award night and we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus perferendis animi, minus id quia eveniet necessitatibus, repellat in doloribus dignissimos consequuntur? Odit ex corporis architecto doloribus iste ab, porro fuga aliquid exercitationem, molestias non! Adipisci omnis et, libero maxime, necessitatibus vel quas aliquid quaerat provident nostrum, esse reprehenderit molestias!.",
      image: "https://www.dropbox.com/scl/fi/exlokypfq4ugef2k4tsbw/IMG-20241123-WA0000.jpg?rlkey=9mm5ec1mmpg5qsjutvfpnzeiw&st=udxbtncc&raw=1",
      date: "December 1st, 2024",
    },
    {
      id: 3,
      title: "Dinner and Award Night",
      description: " Its our Hog Dinner and Award night and we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus perferendis animi, minus id quia eveniet necessitatibus, repellat in doloribus dignissimos consequuntur? Odit ex corporis architecto doloribus iste ab, porro fuga aliquid exercitationem, molestias non! Adipisci omnis et, libero maxime, necessitatibus vel quas aliquid quaerat provident nostrum, esse reprehenderit molestias!.",
      image: "https://www.dropbox.com/scl/fi/exlokypfq4ugef2k4tsbw/IMG-20241123-WA0000.jpg?rlkey=9mm5ec1mmpg5qsjutvfpnzeiw&st=udxbtncc&raw=1",
      date: "December 1st, 2024",
    },
  ];

  export const ImageData: ImageData[] = [
    {
        id: 1,
        src: 'https://www.dropbox.com/scl/fi/fcfbc1m5frl3w2cvgmkjk/033A4539.jpg?rlkey=mb963h0bhp5zxt4embkcumv70&st=qhqjxhmo&raw=1',
        alt: 'Hog Img',
      },
      
      {
        id: 2,
        src: 'https://www.dropbox.com/scl/fi/d92z9gcubp0m3xy5g9rdr/033A4478.jpg?rlkey=eqvqcqbq8js0epe7sqf7t7nc8&st=afitksws&raw=1',
        alt: 'Image 2',
        caption: 'Hog Img2'
      },
      
      {
        id: 3,
        src: 'https://www.dropbox.com/scl/fi/4k2uafh483qsvf0x6wcwf/033A4809.jpg?rlkey=jooz4cwhcjjtoevn52cfn7m6w&st=64k1egk9&raw=1',
        alt: 'Image 3',
        caption: 'Hog Img3'
      },
      
      {
        id: 4,
        src: 'https://www.dropbox.com/scl/fi/ez6i3dy3ekqlnywkip29k/033A4786.jpg?rlkey=t1jnjv1mjyrbszc2w17jbjwhn&st=5p8dl5wh&raw=1',
        alt: 'Image 4',
        caption: 'Hog Img4'
      },
      
      {
        id: 5,
        src: 'https://www.dropbox.com/scl/fi/lsy7dwr00g9hakqyf553z/033A4643.jpg?rlkey=0qsyzwdvhotl31it4g7yhvfqi&st=p9q4g4dc&raw=1',
        alt: 'Image 5',
        caption: 'Hog Img5'
      },
      
      {
        id: 6,
        src: 'https://www.dropbox.com/scl/fi/e0k5xvhu6ajmw9u51caiw/033A4612.jpg?rlkey=ymvzkcb670kzzoj7odfdfusd8&st=wo0b6xed&raw=1',
        alt: 'Image 6',
        caption: 'Hog Img6'
      },
      
      {
        id: 7,
        src: 'https://www.dropbox.com/scl/fi/am7cg2qma01ff0opmlobb/DSC00103.jpg?rlkey=iigit30fcykacgotxfi1vukqa&st=vr687fn9&raw=1',
        alt: 'Image 7',
        caption: 'Hog Img7'
      },
      
      {
        id: 8,
        src: 'https://www.dropbox.com/scl/fi/uncod2liceo3ongh8j7ea/033A4562.jpg?rlkey=52uy5srldohg0ajb026y6frxl&st=7gc09td8&raw=1',
        alt: 'Image 8',
        caption: 'Hog Img8'
      },
      
      {
        id: 9,
        src: 'https://www.dropbox.com/scl/fi/cjwwf01k5u2dsqqjrc5pz/DSC00125.jpg?rlkey=vfvm7ycx03d4ar2s3hzrxt7ey&st=hrh67bl3&raw=1',
        alt: 'Image 9',
        caption: 'Hog Img9'
      },
  ]

  export const MinistriesData: MinistriesData[] = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Singles Ministry",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Mens Ministry",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Teens Ministry",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
    },
  ];

  export const BlogData: BlogData[] = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Walking with God",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
      date: "December 1st, 2024",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Praying to God",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
      date: "December 1st, 2024",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Worshipping God",
      description: "Join us at any of our Sunday service locations around the Bay Area for engaging and faith-building message from the Bible, along with singing, fellowship, and classes for kids.",
      date: "December 1st, 2024",
    },
  ];

  export const AboutCards: AboutValues[] = [
    {
      id: 1,
      imageUrl: FaLightbulb, // React Icon
      title: "God-focused",
      description: "Creating a culture that places God and his Word at the center of everything.",
    },
   
    {
      id: 2,
      imageUrl: CiHeart, // React Icon
      title: "God-focused",
      description: "Creating a culture that places God and his Word at the center of everything.",
    },
   
    {
      id: 1,
      imageUrl: FaRocket, // React Icon
      title: "God-focused",
      description: "Creating a culture that places God and his Word at the center of everything.",
    },
   
  ]
  