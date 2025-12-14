export interface ColorTheme {
    name: string;
    value: string;
    primary: string;
    primaryHsl: string;
    colors: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
}

export const colorThemes: ColorTheme[] = [
    {
        name: 'Sun Breathing',
        value: 'orange',
        primary: '#f97316',
        primaryHsl: '25 95% 53%',
        colors: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
        },
    },
    {
        name: 'Water Breathing',
        value: 'blue',
        primary: '#3b82f6',
        primaryHsl: '217 91% 60%',
        colors: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },
    },
    {
        name: 'Thunder Breathing',
        value: 'yellow',
        primary: '#eab308',
        primaryHsl: '48 96% 53%',
        colors: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
        },
    },
    {
        name: 'Wind Breathing',
        value: 'green',
        primary: '#22c55e',
        primaryHsl: '142 76% 36%',
        colors: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
        },
    },
    {
        name: 'Love Breathing',
        value: 'purple',
        primary: '#a855f7',
        primaryHsl: '283 89% 66%',
        colors: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
        },
    },
    ];

export const getThemeByValue = (value: string): ColorTheme => {
    return colorThemes.find((theme) => theme.value === value) || colorThemes[0];
};
