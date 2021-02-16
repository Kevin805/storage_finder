import connectDB from '../../../utils/connectDB'
import Units from '../../../models/unitModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getUnit(req, res)
            break;
        case "PUT":
            await updateUnit(req, res)
            break;
    }
}

const getUnit = async (req, res) => {
    try {
        const { id } = req.query;

        const unit = await Units.findById(id)
        if(!unit) return res.status(400).json({err: "space doesn't exist."})

        res.json({ unit })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateUnit = async (req, res) => {
    try {       
        const result = await auth(req, res)
        if(result.role == 'admin') return res.status(400).json({err: "Authentication required"}) 
        
        const {id} = req.query
        const {title, price, description, content, images} = req.body

        if(!title || !price || !description || !content || images.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})

        await Units.findOneAndUpdate({_id: id}, {
            title: title.toLowerCase(), price, description, content, images
        })

        res.json({msg: 'Success! Updated a product'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}


