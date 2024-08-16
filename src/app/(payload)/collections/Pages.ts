import {CollectionConfig} from "payload";
import { CallToActionBlock } from "../blocks/CallToActionBlock";
import { MediaBlock } from "../blocks/MediaBlock";
import { TextBlock } from "../blocks/TextBlock";
import { TextMediaBlock } from "../blocks/TextMediaBlock";
import { QuoteBlock } from "../blocks/QuoteBlock";
import { FormBlock } from "../blocks/FormBlock";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'Content',
            type: 'group',
            fields: [
                {
                    name: 'blocks',
                    type: 'blocks',
                    blocks: [
                       CallToActionBlock,
                       MediaBlock,
                       TextBlock,
                       TextMediaBlock,
                       QuoteBlock,
                       FormBlock
                    ]
                }
            ],
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar'
            }
        }
    ],
    versions: true
}