import { LightLevels, WaterLevels } from '../constants'

const data = [
    {
        id: 18207,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(2).jpg',
        name: "Fiddle-Leaf Fig",
        path: "fiddle-leaf-fig",
        description: "Native to the rainforests of western and central Africa, the Fiddle Leaf Fig Tree (Ficus lyrata) is a stunning plant with huge green leaves and an even larger following of houseplant fans. Despite its popularity, it's certainly not the easiest houseplant to look after, but its visual impact in a space is unmatched when given proper conditions and care.",
        descriptionSource: "https://greeneryunlimited.co/blogs/plant-care/fiddle-leaf-fig-care",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(2).jpg',
                date: new Date("May 22, 2021"),
                comment: 'my boy 1'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(3).jpg',
                date: new Date("May 22, 2021"),
                comment: 'my boy 2'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(4).jpg',
                date: new Date("May 22, 2021"),
                comment: 'my boy 3'
            }
        ],
        likes: [
            LightLevels.BrightIndirect,
            WaterLevels.DryBetweenWater
        ],
        dislikes: [
            'Air vents and drafts 🥶'
        ],
        databaseUrl: 'https://garden.org/plants/view/76531/Fiddle-Leaf-Fig-Ficus-lyrata/'
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Majesty Palm",
        path: "majesty-palm",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "White Butterfly",
        path: "white-butterfly",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Devil's Ivy",
        path: "devils-ivy",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Prince of Orange",
        path: "prince-of-orange",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Gray Dragon",
        path: "gray-dragon",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Mandarin Spider",
        path: "mandarin-spider",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Ruby Ficus Elastica",
        path: "ruby-ficus-elastica",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Nerve Plant",
        path: "nerve-plant",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Monolena Primuliflora",
        path: "monolena-primuliflora",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Hoya Compacta",
        path: "hoya-compacta",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    },
    {
        id: 34568,
        thumbnail: '',
        name: "Ponytail Palm",
        path: "ponytail-palm",
        description: "",
        descriptionSource: "",
        pictures: [
            {
                url: '',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            
        ],
        dislikes: [
            ''
        ],
        databaseUrl: ''
    }
]

export default class PlantApi {
    static async getPlantByPath(path) {
        return data.find(plant => plant.path === path)
    }
    static async getPlants() {
        return data
    }
}