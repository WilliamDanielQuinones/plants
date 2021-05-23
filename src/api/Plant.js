import { LightLevels, WaterLevels } from '../constants'

const data = [
    {
        id: 18207,
        name: "Fiddle-Leaf Fig",
        path: "fiddle-leaf-fig",
        pictures: [
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(2).jpg',
                date: Date.now(),
                comment: 'my boy 1'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(3).jpg',
                date: Date.now(),
                comment: 'my boy 2'
            },
            {
                url: 'https://plants-for-the-site.s3.amazonaws.com/fiddle/Image+from+iOS+(4).jpg',
                date: Date.now(),
                comment: 'my boy 3'
            }
        ],
        lightLevel: LightLevels.BrightIndirect,
        waterLevel: WaterLevels.DryBetweenWater,
        databaseUrl: 'https://garden.org/plants/view/76531/Fiddle-Leaf-Fig-Ficus-lyrata/'
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