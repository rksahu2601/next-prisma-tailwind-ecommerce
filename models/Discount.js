const mongoose = require('mongoose')

const discountSchema = mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        credit: {
            type: Number,
            required: true,
            default: 1,
        },
        uses: {
            type: Number,
            required: true,
            default: 0,
        },
        category: {
            type: String,
            required: true,
        },
        percentage: {
            type: Number,
            required: true,
        },
        maximum_amount: {
            type: Number,
            required: true,
            default: 100,
        },
    },
    {
        timestamps: true,
    }
)

const Discount =
    mongoose.models.Discount || mongoose.model('Discount', discountSchema)

module.exports = Discount
