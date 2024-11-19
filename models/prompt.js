import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({

    prompt: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

module.exports = Prompt