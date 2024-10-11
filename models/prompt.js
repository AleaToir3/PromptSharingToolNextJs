import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type: String,
        require:[true,'prompt required pls ...']
    },
    tag:{
        type: String,
        require:[true,'tag required pls ...']
    }
})

const Prompt = models.Prompt || model('Prompt',PromptSchema)
export default Prompt;