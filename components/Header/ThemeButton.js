import { Button, useTheme } from '@geist-ui/core'
import { DarkModeIcon, LightModeIcon } from '../SVGs'

export default function ({ config, sticky, themePreference }) {
    const prefers = themePreference()
    const theme = useTheme()

    return (
        <Button
            icon={theme.type === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            style={
                sticky
                    ? {
                          top: '1.5px',
                      }
                    : {}
            }
            aria-label="Toggle Dark mode"
            px={1}
            scale={0.7}
            auto
            onClick={() =>
                prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')
            }
        />
    )
}
