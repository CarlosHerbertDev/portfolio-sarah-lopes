import { defineType, defineField } from "sanity";

export const projects = defineType({
    name:'project',
    title:'Project',
    type:'document',
    fields: [
        defineField({
            name: 'project',
            title: 'project name',
            type: 'string'
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