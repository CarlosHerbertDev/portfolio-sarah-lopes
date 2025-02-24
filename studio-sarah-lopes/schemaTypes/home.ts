import { defineType, defineField } from "sanity";

export const home = defineType({
    name:'home',
    title:'Home',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'titulo inicial',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'complemento do rirulo',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'uma foto sua',
            type: 'image'
        })
    ]
})