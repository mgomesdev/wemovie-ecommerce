import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 1,
            url: `${process.env.DOMAIN}/`,
        },
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 2,
            url: `${process.env.DOMAIN}/cart`,
        },
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 3,
            url: `${process.env.DOMAIN}/purchase-completed`,
        },
    ];
}
