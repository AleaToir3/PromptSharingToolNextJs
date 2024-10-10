import { Schema, model, models } from 'mongoose';

const promptScheme = new Schema(({
    creator: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type: String,
        require:[true,'prompte required pls ...']
    },
    tag:{
        type: String,
        require:[true,'tag required pls ...']
    }
}))

const Prompt = models.Prompt || model('prompt',promptScheme)
export default Prompt;