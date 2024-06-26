import {defineField, defineType, defineArrayMember} from 'sanity'
import {  InfoOutlineIcon} from '@sanity/icons'

const policies = defineType({
    name: 'policies',
    title: 'Policies',
    type: 'document',
    icon: InfoOutlineIcon,
    fields: [
        defineField({
            type:'string',
            name:"title",
            title: "Title",
        }),
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        defineField({ title: 'Block Content',
            name: 'blockContent',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    // Styles let you set what your user can mark up blocks with. These
                    // correspond with HTML tags, but you can set any title or value
                    // you want and decide how you want to deal with it where you want to
                    // use your content.
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                    ],
                    lists: [{title: 'Bullet', value: 'bullet'}],
                    // Marks let you mark up inline text in the block editor.
                    marks: {
                        // Decorators usually describe a single property – e.g. a typographic
                        // preference or highlighting by editors.
                        decorators: [
                            {title: 'Strong', value: 'strong'},
                            {title: 'Emphasis', value: 'em'},
                        ],
                        // Annotations can be any object structure – e.g. a link or a footnote.
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'quote',
                                type: 'object',
                                title: 'Quote',
                                fields: [
                                    {
                                        name: 'text',
                                        type: 'text', // <= This can also be a Portable Text field
                                        title: 'Text',
                                    },
                                    {
                                        name: 'author',
                                        type: 'string', // <= This could be a reference to an author document type, if you had that
                                        title: 'Author',
                                    },
                                ]
                            },
                        ],
                    },
                },
                // You can add additional types here. Note that you can't use
                // primitive types such as 'string' and 'number' in the same array
                // as a block type.
                {
                    type: 'image',
                    options: {hotspot: true, },
                    fields: [
                        {
                            title: "Alternative Text",
                            name: "alt",
                            type: "string",
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
                {
                    type: 'file',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name',
                        },
                    ]
                },
            ],})
    ]
});

export default  policies;