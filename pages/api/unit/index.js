import connectDB from '../../../utils/connectDB'
import Units from '../../../models/unitModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getUnits(req, res)
            break;
        case "POST":
            await createUnit(req, res)
            break;
    }
}

const getUnits = async (req, res) => {
    try {
        const units = await Units.find()

        res.json({
            status: 'success',
            result: units.length,
            units
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createUnit = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role == 'admin') return res.status(400).json({err: 'Authentication is not valid.'})

        const {title, price, description, content, images} = req.body

        if(!title || !price || !description || !content || images.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})


        const newUnit = new Units({
            title: title.toLowerCase(), price, description, content, images})

        await newUnit.save()

        res.json({msg: 'Success! Your Space is for rent!'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

