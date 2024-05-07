import logs from '../assets/Images/icon1.png'
import logs1 from '../assets/Images/icon2.png'
const sidebarOptions = [
    {
        name: 'Option 1',
        title: 'Title 1',
        imagePath: logs,
        navigatePath: '/page1',
    },
    {
        name: 'Option 2',
        title: 'Title 2',
        imagePath: logs1,
        navigatePath: '/page2',
    },
    {
        name: 'Option 3',
        title: 'Title 3',
        imagePath: '/path/to/image3.png',
        navigatePath: '/option3',
    },
    {
        name: 'Option 4',
        title: 'Title 4',
        imagePath: '/path/to/image4.png',
        navigatePath: '/option4',
    },
];

export default sidebarOptions;
