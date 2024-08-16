import type { Field } from "payload";
import deepMerge from "../utilities/deepMerge";

//define the different appearance options of a link field
export const appearanceOptions = {
    default: {
        label: 'Default',
        value: 'default',
    },
    primary: {
        label: 'Primary Button',
        value: 'primary',
    },
    secondary: {
        label: 'Secondary Button',
        value: 'secondary',
    },
}

export type LinkApperances = 'default' | 'primary' | 'secondary' //type definiion for TS

type LinkType = (options? : {
    appearances?: LinkApperances[] | false
    disableLabel?: boolean
    overrides?: Record<string, unknown>
})=> Field

//using the above defined type, we will define a function that takes some preferences and accordingly generates a custom link field 
//to use in our admin panel
const link: LinkType = ({appearances, disableLabel = false, overrides = {} } = {}) => {
    const linkResult: Field = {
        name: 'link',
        admin: {
            hideGutter: true
        },
        fields: [
            {
                fields: [
                    {
                        name: 'type',
                        admin: {
                            layout: 'horizontal',
                            width: '50%',
                        },
                        defaultValue: 'reference',
                        options: [
                            {
                                label: 'Internal link',
                                value: 'reference',
                            },
                            {
                                label: 'Custom URL',
                                value: 'custom',
                            },
                        ],
                        type: 'radio',
                    },
                    {
                        name: 'newTab',
                        admin:{
                            style: {
                                alignSelf: 'flex-end',
                            },
                            width: '50%'
                        },
                        label: 'Open in new tab',
                        type: 'checkbox',
                    }
                ],
                type: 'row',
            }
        ],
        type: 'group'
    }

    //generate a list of fields based on chosen option in the above radio field
    //an appropriate field is displayed after the previous option is chosen (reference vs custom url)
    const linkTypes: Field[] = [
        {
            name: 'reference',
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference', //condition to check previous field's chosen data
                //more infor available here: https://payloadcms.com/docs/fields/overview#conditional-logic
            },
            label: 'Document to link to',
            maxDepth: 1,
            relationTo: ['pages'],
            required: true,
            type: 'relationship',
        },
        {
            name: 'url',
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom'
            },
            label: 'Custom URL',
            required: true,
            type: 'text'
        }
    ]

    if(!disableLabel){
        linkTypes.map((linkType)=> ({
            ...linkType,
            admin:{
                ...linkType.admin,
                width: '50%',
            }
        }))

        linkResult.fields.push({
            fields: [
                ...linkTypes,
                {
                    name:'label',
                    admin: {
                        width: '50%',
                    },
                    label: 'Label',
                    required: true,
                    type: 'text'
                },
            ],
            type: 'row'
        })
    }
    else{
        linkResult.fields = [...linkResult.fields, ...linkTypes]
    }

    if(appearances !== false){
        let appearanceOptionsToUse = [
            appearanceOptions.default,
            appearanceOptions.primary,
            appearanceOptions.secondary
        ]
        if(appearances){
            appearanceOptionsToUse = appearances.map((appearance)=> appearanceOptions[appearance])
        }

        linkResult.fields.push({
            name: 'appearance',
            admin:{
                description: 'Choose how the link should be rendered.',
            },
            defaultValue: 'default',
            options: appearanceOptionsToUse,
            type: 'select',
        })
    }
    return deepMerge(linkResult, overrides);
}

export default link