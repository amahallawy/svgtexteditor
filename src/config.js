import React from 'react';

const Config = {
    languages: ['en', 'ar'],
    logo: (
        <div>
            <span className="text-orange-800">SVG</span>&nbsp;
            <span className="text-orange-600">Text</span>&nbsp;
            <span className="text-orange-400">Editor</span>
        </div>
    ),
    menuLinks: [
        {
            id: 1,
            name: 'Home',
            link: '#'
        }, {
            id: 2,
            name: 'How it works',
            link: '#'
        }, {
            id: 3,
            name: 'Contact',
            link: '#'
        }
    ],
    label: {
        text: 'Text',
        font: 'Font',
        color: 'Color',
        fontSize: 'Font Size',
        align: 'Text Align',
        style: 'Text Style',
        position: 'Position',
        x: 'X',
        y: 'Y',
        imageButton: 'Image',
        codeButton: 'Code'
    },
    fonts: ['Lora', 'Merriweather', 'Raleway', 'Roboto'],
    default: {
        font: 'Lora',
        fontSize: 12
    },
    footerText: (<div>©{new Date().getFullYear()}, Made with ❤️ and ☕ by <a href="https://twitter.com/ahmed_mahallawy">Ahmed Mahallawy</a></div>),
    ar: {
        menuLinks: [
            {
                id: 1,
                name: 'الرئيسية',
                link: '#'
            }, {
                id: 2,
                name: 'كيف تعمل الخدمة',
                link: '#'
            }, {
                id: 3,
                name: 'التواصل',
                link: '#'
            }
        ],
        label: {
            text: 'النص',
            font: 'الخط',
            color: 'اللون',
            fontSize: 'حجم الخط',
            align: 'محاذاة النص',
            style: 'نمط النص',
            position: 'الموقع',
            x: 'X',
            y: 'Y',
            imageButton: 'صورة',
            codeButton: 'كود'
        },
        footerText: (<div style={{direction: 'rtl'}}>©{new Date().getFullYear()}، تم برمجته بكل ❤️ و كثير من ☕ عن طريق <a href="https://twitter.com/ahmed_mahallawy">Ahmed Mahallawy</a></div>),
    }
};

export default Config;