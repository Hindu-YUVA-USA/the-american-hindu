import type { GlobalConfig } from "payload";
import link from "../fields/link";
import { admins } from "../access/admins";


export const Footer: GlobalConfig = {
    access:{
        read: admins
    },
    fields: [
        {
            name: 'navItems',
            fields: [
                link({
                    appearances: false
                }),
            ],
            maxRows: 6,
            type: 'array',
        }
    ],
    slug: 'footer',
}