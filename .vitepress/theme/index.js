import DefaultTheme from 'vitepress/theme'
import './styles/size.css'
import './styles/svg.css'
import './styles/logo.css'
import { useGoogleAnalytics } from './googleAnalytics'

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        if (typeof window !== 'undefined') {
            const themeConfig = siteData.value.themeConfig
            if (themeConfig && themeConfig.googleAnalyticsId) {
                useGoogleAnalytics(themeConfig.googleAnalyticsId)
            } else {
                console.warn('Google Analytics ID Initial Failed.')
                console.log('themeConfig:', themeConfig)
            }
        }
    }
}