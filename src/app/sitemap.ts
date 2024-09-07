import { evarConts } from '@/lib/constants/evarConts'
import { seoData } from '@/lib/database/db'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
 return seoData.map(data => {

    return {
        url: `${evarConts.baseUrl}${data.page}`,
        changeFrequency: "daily"
    }
 })
}