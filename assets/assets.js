import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'CodeSandbox',
        description: 'Fully functional clone',
        bgImage: '/work-1.png',
        github: "https://github.com/JunedDeshmukh/CodeSandbox_clone"
    },
    {
        title: 'Video Calling App   ',
        description: 'Using webRTC',
        bgImage: '/work-2.png',
        github: "https://github.com/JunedDeshmukh/Video_calling_app"
    },
    {
        title: 'Spotify UI',
        description: 'Functional music player',
        bgImage: '/work-3.png',
        github: "https://github.com/JunedDeshmukh/Spotify_ui"
    },
    {
        title: 'Wanderlust',
        description: 'Inspired by AirBnb',
        bgImage: '/work-4.png',
        github: "https://github.com/JunedDeshmukh/wanderlust"
    },
        {
        title: 'Hangman',
        description: 'Click to Play Framework Done',
        bgImage: '/work-5.png',
        github: "http://hangman-game-three-sable.vercel.app"
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'Click to Play',
        bgImage: '/work-6.png',
        github: "https://tic-tac-toe-one-drab-63.vercel.app"
    },
    {
        title: 'Simon Says Game',
        description: 'Mimic the flashing pattern',
        bgImage: '/work-7.png',
        github: "https://simon-says-game-gilt-beta.vercel.app"
    },
    {
        title: 'Snake Game',
        description: 'Feed the Hungry Snake',
        bgImage: '/work-8.png',
        github: "https://snake-game-xi-blue.vercel.app"
    },

]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming, and maintaining websites and web applications. It involves frontend development for user interfaces, backend development for server-side logic, and often includes database integration and deployment.', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software applications specifically designed to run on mobile devices such as smartphones and tablets. It includes building native, hybrid, or web-based apps, focusing on performance, user experience, and device compatibility.', link: '' },
    // { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, TypeScript' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Frontend', description: 'React.js, Next.js, WebSockets, WebRTC, TailwindCSS' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Backend', description: 'Node.js, Express.js, Docker' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];