import { defineType, defineField } from "sanity";

export const projects = defineType({
    name:'project',
    title:'Project',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'project title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Url do projeto',
            type: 'slug',
            options: {source: 'title'},
        }),
        defineField({
            name: 'description',
            title: 'descrição do projeto',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image'
        })
    ]
})