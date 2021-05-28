import { LightLevels, WaterLevels } from '../constants'

const data = [
    {
        id: 18207,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(35).jpg',
        name: "Fiddle-Leaf Fig",
        path: "fiddle-leaf-fig",
        description: "Native to the rainforests of western and central Africa, the Fiddle Leaf Fig Tree (Ficus lyrata) is a stunning plant with huge green leaves and an even larger following of houseplant fans. Despite its popularity, it's certainly not the easiest houseplant to look after, but its visual impact in a space is unmatched when given proper conditions and care.",
        descriptionSource: "https://greeneryunlimited.co/blogs/plant-care/fiddle-leaf-fig-care",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(35).jpg',
                date: new Date("May 25, 2021"),
                comment: 'my boy'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(36).jpg',
                date: new Date("May 25, 2021"),
                comment: 'his corner'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(37).jpg',
                date: new Date("May 25, 2021"),
                comment: 'his leaves'
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
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/majesty-palm/Image+from+iOS+(5).jpg',
        name: "Majesty Palm",
        path: "majesty-palm",
        description: "Majesty palm (Ravenea rivularis) is a slow-growing palm with long arching green fronds atop multiple stems. It is usually grown as a large houseplant, though it can reach heights of up to 90 feet in its native outdoor environment. As a houseplant, it is said to resemble a kentia palm when young and a royal palm when mature. This is high praise since these are two of the more attractive of all indoor palm",
        descriptionSource: "https://www.thespruce.com/grow-ravenea-majesty-palms-indoors-1902882",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/majesty-palm/Image+from+iOS+(5).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/majesty-palm/Image+from+iOS+(6).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/majesty-palm/Image+from+iOS+(7).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            WaterLevels.HighHumidity,
            `But also bright and indirect light 🌄`
        ],
        dislikes: [
            LightLevels.FullSunlight
        ],
        databaseUrl: 'https://garden.org/plants/view/113710/Majesty-Palm-Ravenea-rivularis/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/white-butterfly/Image+from+iOS+(11).jpg',
        name: "White Butterfly",
        path: "white-butterfly",
        description: "Also known as the ‘arrowhead plant’ on account of its uniquely shaped leaves, Syngoniums (known scientifically as Syngonium Podophyllum) are easy to grow houseplants which do well in bright indirect light and will thrive in your indoor garden, given the right conditions. Here’s a White Butterfly Syngonium care guide, as well as watering advice and propagation tips and tricks!",
        descriptionSource: "https://thecitywild.com/white-butterfly-syngonium-care-guide-syngonium-podophyllum/",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/white-butterfly/Image+from+iOS+(9).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/white-butterfly/Image+from+iOS+(8).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/white-butterfly/Image+from+iOS+(10).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/white-butterfly/Image+from+iOS+(11).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.Medium,
            `${WaterLevels.HighHumidity} 🌧`
        ],
        dislikes: [
            LightLevels.DirectSun
        ],
        databaseUrl: 'https://garden.org/plants/view/79134/Arrowhead-Plant-Syngonium-podophyllum/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/devils-ivy/Image+from+iOS+(12).jpg',
        name: "Devil's Ivy",
        path: "devils-ivy",
        description: "Hanging, climbing - Devil’s Ivy, also known as Scindapsus, can grow in all directions. This houseplant stands out thanks to its heart-shaped satiny leaves with silver, pale green, yellow or whitish spots, or a flame pattern. it’s also a reliable companion: if looked after well, this domestic wonder can grow very old and remain beautiful.",
        descriptionSource: "https://www.flowercouncil.co.uk/campaign/august-2018-devils-ivy-houseplant-of-the-month",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/devils-ivy/Image+from+iOS+(12).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/devils-ivy/Image+from+iOS+(13).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/devils-ivy/Image+from+iOS+(14).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            WaterLevels.KeepMoist,
            'Food monthly'
        ],
        dislikes: [
            LightLevels.DirectSun
        ],
        databaseUrl: 'https://garden.org/plants/view/76418/Devils-Ivy-Epipremnum-aureum/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/prince-of-orange/Image+from+iOS+(15).jpg',
        name: "Prince of Orange",
        path: "prince-of-orange",
        description: "The Philodendron Prince of Orange gets its name from its uniquely hued leaves, which change color over time. New growth starts a starburst yellow when it first emerges, transitioning first to copper tones, and ultimately settling into darker shades of green.",
        descriptionSource: "https://greeneryunlimited.co/pages/philodendron-prince-of-orange-care",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/prince-of-orange/Image+from+iOS+(15).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/prince-of-orange/Image+from+iOS+(16).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            WaterLevels.KeepMoist,
            'Being dusted'
        ],
        dislikes: [
            WaterLevels.SoggySoil
        ],
        databaseUrl: 'https://garden.org/plants/view/610127/Philodendrons-Philodendron/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/gray-dragon/Image+from+iOS+(17).jpg',
        name: "Gray Dragon",
        path: "gray-dragon",
        description: "Alocasia maharani 'Grey Dragon' offers the most gorgeous of foliage that is velvety in texture and has a warm grey tone. It would make for the most unique addition to your collection! Keep this plant in a humid location such as a bathroom and it will be very happy!",
        descriptionSource: "https://www.groovyplantsranch.com/products/alocasia-maharani-grey-dragon-rare",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/gray-dragon/Image+from+iOS+(18).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/gray-dragon/Image+from+iOS+(17).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/gray-dragon/Image+from+iOS+(19).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.BrightIndirect,
            WaterLevels.KeepMoist
        ],
        dislikes: [
            LightLevels.DirectSun
        ],
        databaseUrl: 'https://garden.org/plants/view/661316/Jewel-Alocasia-Alocasia-Maharani/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/mandarin-spider/Image+from+iOS+(22).jpg',
        name: "Mandarin Spider",
        path: "mandarin-spider",
        description: "Most colorful houseplants give us their shot of color from their leaves. But mandarin plant (Chlorophytum amaniense ‘Fire Flash’) goes a different route. It shows off colorful orange leaf stems (called petioles). This gives the plant an interesting, and eye-cathing look. Plus, its strap-like leaves add a tropical touch to indoor spaces.",
        descriptionSource: "https://www.costafarms.com/plants/mandarin-plant",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/mandarin-spider/Image+from+iOS+(22).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/mandarin-spider/Image+from+iOS+(21).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/mandarin-spider/Image+from+iOS+(20).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            WaterLevels.FilteredWater,
            WaterLevels.DryBetweenWater
        ],
        dislikes: [
            `${LightLevels.DirectSun} 🌞`
        ],
        databaseUrl: 'https://garden.org/plants/view/118237/Sierra-Leone-Lily-Chlorophytum-Fireflash/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/ruby-ficus-elastica/Image+from+iOS+(25).jpg',
        name: "Ruby Ficus Elastica",
        path: "ruby-ficus-elastica",
        description: "The Ficus Elastica Ruby, also known as a variegated Rubber tree, is native to tropical regions of India and Malaysia. Its care is similar to that of the Rubber Tree, however its unique tri-colored variegation requires brighter light conditions than the Burgundy variety to keep the colors strong and defined.",
        descriptionSource: "https://greeneryunlimited.co/pages/ficus-elastica-ruby-care",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ruby-ficus-elastica/Image+from+iOS+(25).jpg',
                date: new Date("May 22, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ruby-ficus-elastica/Image+from+iOS+(24).jpg',
                date: new Date("May 22, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ruby-ficus-elastica/Image+from+iOS+(23).jpg',
                date: new Date("May 22, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.BrightIndirect,
            WaterLevels.DryBetweenWater
        ],
        dislikes: [
            LightLevels.DirectSun
        ],
        databaseUrl: 'https://garden.org/plants/view/546273/Variegated-Rubber-Tree-Ficus-elastica-Ruby/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/nerve-plant/Image+from+iOS+(28).jpg',
        name: "Nerve Plant",
        path: "nerve-plant",
        description: "In its native South America, this tropical plant grows as a ground cover and can spread out about 12 inches (30 cm). Its low-spreading habit makes it ideal for dish gardens and terrariums, where it thrives with the help of high humidity.",
        descriptionSource: "https://www.guide-to-houseplants.com/nerve-plant.html",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/nerve-plant/Image+from+iOS+(28).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/nerve-plant/Image+from+iOS+(27).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/nerve-plant/Image+from+iOS+(26).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            WaterLevels.Misty,
            'Pinching stem tips to keep plant bushy and full'
        ],
        dislikes: [
            LightLevels.DirectSun
        ],
        databaseUrl: 'https://garden.org/plants/view/76542/Nerve-Plant-Fittonia-albivenis/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/monolena-primuliflora/Image+from+iOS+(30).jpg',
        name: "Monolena Primuliflora",
        path: "monolena-primuliflora",
        description: "Monolena primuliflora is a plant you might not have seen before. This very unique plant has only recently made its debut onto the house plant scene. Monolena primuliflora is an epiphytic ant plant that is native to Ecuador and Peru. These plants grow attached to the branches of trees where they form a caudex that serves as a habitation for ants.",
        descriptionSource: "https://foliacollective.com/blogs/news/plant-know-how-monolena-primuliflora",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/monolena-primuliflora/Image+from+iOS+(30).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/monolena-primuliflora/Image+from+iOS+(29).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.BrightIndirect,
            WaterLevels.HighHumidity
        ],
        dislikes: [
            WaterLevels.DryBetweenWater
        ],
        databaseUrl: 'https://garden.org/plants/view/150212/Monolena-Monolena-primuliflora/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/hoya-compacta/Image+from+iOS+(31).jpg',
        name: "Hoya Compacta",
        path: "hoya-compacta",
        description: "The Hoya plant family has up to 300 species, and the Hoya Carnosa Compacta is one of the most popular species. There is also a popular variegated version of this plant called Hoya Tricolor or Hoya Krimson Queen.",
        descriptionSource: "https://plantophiles.com/plant-care/hoya-carnosa-compacta/",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/hoya-compacta/Image+from+iOS+(31).jpg',
                date: new Date("May 26, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.FullSunlight,
            WaterLevels.DryBetweenWater
        ],
        dislikes: [
            'None really! Hardy.'
        ],
        databaseUrl: 'https://garden.org/plants/view/180721/Hindu-Rope-Hoya-Hoya-carnosa-Compacta/'
    },
    {
        id: 34568,
        thumbnail: 'https://plants-for-the-site.s3.amazonaws.com/ponytail-palm/Image+from+iOS+(32).jpg',
        name: "Ponytail Palm",
        path: "ponytail-palm",
        description: "Oddly enough, a ponytail palm tree is neither a palm nor a tree. In fact, it is a member of the Agave family and is actually a succulent. Other common names for this plant include the bottle palm tree or the elephant foot tree. In the past, it has been classified as either Nolina recurvata or Beaucarnea recurvata, but the latter is now the correct classification of this plant.",
        descriptionSource: "https://www.gardeningknowhow.com/houseplants/ponytail-palm/ponytail-palm-care.htm",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ponytail-palm/Image+from+iOS+(32).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ponytail-palm/Image+from+iOS+(33).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/ponytail-palm/Image+from+iOS+(34).jpg',
                date: new Date("May 25, 2021"),
                comment: ''
            },
        ],
        likes: [
            LightLevels.FullSunlight,
            WaterLevels.DryBetweenWater
        ],
        dislikes: [
            'Being put in a large pot'
        ],
        databaseUrl: 'https://garden.org/plants/view/87773/Ponytail-Palm-Beaucarnea-recurvata/'
    }
]

export default class PlantApi {
    static async getPlantByPath(path) {
        return data.find(plant => plant.path === path)
    }
    static async getPlants() {
        return data
    }
    static async getPlantCount() {
        return data.length
    }
}