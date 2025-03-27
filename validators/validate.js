const zod = require('zod')

const schoolSchema = zod.object({
    name: zod.string({message: "Name must be a string"}).min(1, {message: "Name is required"}),
    address: zod.string({message: "Address must be a string"}).min(1, {message: "Address is required"}),
    latitude: zod.number({message: "latitude must be a number"}).min(-90, {message: "Invalid latitude"}).max(90, {message: "Invalid latitude"}),
    longitude: zod.number({message: "longitude must be a number"}).min(-180, {message: "Invalid longitude"}).max(180, {message: "Invalid longitude"})
})

const userLocationSchema = zod.object({
    userLatitude: zod.number({message: "latitude must be a number"}).min(-90, {message: "Invalid latitude"}).max(90, {message: "Invalid latitude"}),
    userLongitude: zod.number({message: "longitude must be a number"}).min(-180, {message: "Invalid longitude"}).max(180, {message: "Invalid longitude"})
})

module.exports = { schoolSchema, userLocationSchema };
