/* eslint-disable */
import * as moment from 'moment';

export const events = [
    {
        id: 'bc7db965-3c4f-4233-abf5-69bd70c3c175',
        icon: 'heroicons_outline:home',
        status: 1,
        infoEvent: {
            title: 'Anita y Mario',
            description: 'Tarjeta de Invitación boda de Anita y Mario',
            eventType: 'wedding',
            date: "2023-04-13T00:12:30.211Z",
            hour: '20:45',
            couple: { one: { name: 'Anita', type: 'she' }, two: { name: 'Mario', type: 'he' } },
            counter: true,
            notifications: true,
            phrase: 'Todos somos mortales, hasta el primer beso y la segunda copa de vino'
        },
        menus: [
            {
                position: 0,
                menu: [
                    { id: '11231231', name: 'Jamón ibérico con cortador' },
                    { id: '11231231', name: 'Surtido de quesos.' },
                    { id: '11231231', name: 'Maki de salmón.' },
                    { id: '11231231', name: 'Roca marina con gamba.' },
                    { id: '11231231', name: 'Lata de salmón con verduritas.' },
                    { id: '11231231', name: 'Taco tex-mex.' },
                    { id: '11231231', name: 'Cucurucho de queso y espuma de piquillos.' },
                    { id: '11231231', name: 'Gyoza de gamba al ajillo.' },
                    { id: '11231231', name: 'Dado de cordero.' },
                    { id: '11231231', name: 'Ceviche de corvina.' },
                    { id: '11231231', name: 'Tartar de atún.' },
                ],
                name: 'Cóctel de bienvenida',
                description: 'Selección de entrantes',
            },
            {
                position: 1,
                menu: [
                    { id: '11231231', name: 'Gamba blanca y langostino tigre.' },
                ],
                name: 'Marisco',
                description: 'Selección de primeros',
            },
            {
                position: 2,
                menu: [],
                name: 'Sorbete de mojito',
                description: 'Carnes y pescados',
            },
            {
                position: 3,
                menu: [
                    { id: '11231231', name: ['Paletilla de cordero lechal en su jugo y patatas glass.', 'Atún en escabeche de mandarina.'] },
                ],
                name: 'Segundo',
                description: 'Para los más golosos',
            },
            {
                position: 3,
                menu: [
                    { id: '11231231', name: 'Mouse de queso sobre bizcocho con corazón de frutos rojos y capa de chocolate blanco.' }
                ],
                name: 'Postre',
                description: 'Para los más golosos',
            },
        ],
        dressCode: {
            time: 'afternoon',
            message: 'alksjdlka da dla lasdj ladlda'
        },
        photo: [],
        hotels: [],
        panels: [],
        design: {
            theme: 'default',
            colors: ['#fff'],
            themeList: [
                {
                    id: 1,
                    theme: 'default',
                },
                {
                    id: 2,
                    theme: 'demo',
                },
                {
                    id: 3,
                    theme: 'prueba',
                },
                {
                    id: 4,
                    theme: 'cold',
                },
                {
                    id: 5,
                    theme: 'dark',
                },

            ]
        }
        /* event: { 
            infoEvent: {
                eventType: 'wedding', 
                date: { start: 'Jun 28, 2021 14:30', end: 'Jun 29, 2021 06:30' },
                name1: 'Anita',
                name2: 'Mario',
                counter: true,
                notifications: true
            },
            lenguages: ['ENG', 'ES'],
            timetable: [
                {
                    type: 'ceremony',
                    title: 'Ceremonia',
                    date: {
                        start: 'Jun 28, 2021 13:30h',
                        end: 'Jun 28, 2021 14:30h',
                    },
                    direction: 'Plaza de España, 1',
                    city: 'Tomelloso',
                    place: 'Iglesia de la Almudena',
                    link: 'http://www.demo.es',
                },
                {
                    type: 'banquete',
                    title: 'Banquete',
                    date: {
                        start: 'Jun 28, 2021 15:30h',
                        end: 'Jun 28, 2021 20:30h',
                    },
                    direction: 'Avenida de la trilla, 9',
                    city: 'Tomelloso',
                    place: 'Salones Epilogo',
                    link: 'http://www.demo.es',
                },
                {
                    type: 'bar',
                    title: 'Barra Libre',
                    date: {
                        start: 'Jun 28, 2021 20:30h',
                        end: 'Jun 28, 2021 01:30h',
                    },
                    direction: 'Avenida de la trilla, 9',
                    city: 'Tomelloso',
                    place: 'Ande Utiel',
                    link: 'http://www.demo.es',
                },
            ],
            hotels: [
                {
                    id: 'josdifjoisjdf-234234234-23423',
                    name: 'Hotel Paloma',
                    direction: 'Avenida Plaza de España, 6',
                    city: 'Tomelloso',
                    locality: 'Ciudad Real',
                    community: 'Castilla-La Mancha',
                    stars: 4,
                    phone: '926-518-123',
                    date: {
                        entry: 'Jun 27, 2021 12:00',
                        out: 'Jun 29, 2021 12:00',
                    },
                },
            ],
            guests: [
                {
                    id: '09842038490234-23-420348234',
                    name: 'Marga Zapala',
                    //relationship: 'Suegra',
                    email: 'marga@marga.es',
                    //age: 24,
                    phone: '673-343-323',
                    hotel: {
                        active: true,
                        id: 'josdifjoisjdf-234234234-23423',
                        room: '12',
                    },
                    menu: {
                        id: '12312389138123',
                    },
                    alergies: ['Aguacate'],
                    message: 'Lorem Ipsum dolor...',
                    guests: {
                        allow: true,
                        avaliable: 4,
                        guests: [
                            {
                                id: '09842038490234-23-420348234',
                                name: 'Kayla Jurkowska',
                                age: 13,
                                //relationship: 'Nieta',
                                phone: null,
                                email: null,
                                menu: 'Carne',
                                alergies: [],
                                hotel: {
                                    id: 'josdifjoisjdf-234234234-23423',
                                    room: '13',
                                },
                                messages: [
                                    {
                                        text: 'Lorem Ipsum dolor...',
                                    },
                                ],
                                url: 'http://www.aws.es/2983490234234234248224',
                            },
                        ]
                    },
                    url: 'http://www.aws.es/2983490234234234248234',
                },
            ],
            menu: [
                {
                    position: 0,
                    name: 'Cóctel',
                    menu: [
                        { id: '11231231', name: 'Surtido de gambas' },
                        { id: '11231231', name: 'Revuelto de gazpacho' },
                        { id: '11231231', name: 'Croquetas' },
                        { id: '11231231', name: 'Mexican' },
                        { id: '11231231', name: 'Jamón y queso' },
                    ],
                },
                {
                    position: 1,
                    name: 'Primeros platos',
                    menu: [
                        {
                            id: '213321',
                            name: 'Ensalada de perdiz en su jugo',
                        },
                        {
                            id: '9238992131',
                            name: 'Surtido de ibéricos',
                        },
                    ],
                },
                {
                    position: 2,
                    name: 'Segundos platos',
                    menu: [
                        {
                            id: '213321',
                            name: 'Marico gallego',
                        },
                        {
                            id: '213321',
                            name: 'Gambas rojas',
                        },
                    ],
                },
                {
                    position: 3,
                    name: 'Sorbetes',
                    menu: [
                        {
                            id: '213321',
                            name: 'Fresa',
                        },
                        {
                            id: '213321',
                            name: 'Mojito',
                        },
                    ],
                },
                {
                    position: 4,
                    name: 'Postres',
                    menu: [
                        {
                            id: '802934234',
                            name: 'Tarta de chocolate y fresa',
                        },
                    ],
                },
            ],
            dressCode: [],
            giftList: [],
            transport: [],
        } */
    },
    {
        id: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        icon: 'heroicons_outline:template',
        status: 1,
        infoEvent: {
            title: 'Admin Dashboard',
            description: '',
            eventType: 'wedding',
            date: new Date(),
            name1: 'una',
            name2: 'otra',
            counter: false,
            notifications: true
        }
    }
];

export const eventList = [
    {
        id: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title: 'Admin Dashboard',
        description: 'Roadmap for the new project',
        icon: 'heroicons_outline:template',
        lastActivity: moment().startOf('day').subtract(1, 'day').toISOString(),
        members: [
            '9c510cf3-460d-4a8c-b3be-bcc3db578c08',
            'baa88231-0ee6-4028-96d5-7f187e0f4cd5',
            '18bb18f3-ea7d-4465-8913-e8c9adf6f568'
        ]
    },
    {
        id: '0168b519-3dab-4b46-b2ea-0e678e38a583',
        title: 'Weekly Planning',
        description: 'Job related tasks for the week',
        icon: 'heroicons_outline:calendar',
        lastActivity: moment().startOf('day').subtract(2, 'days').toISOString(),
        members: [
            '79ebb9ee-1e57-4706-810c-03edaec8f56d',
            '319ecb5b-f99c-4ee4-81b2-3aeffd1d4735',
            '5bf7ed5b-8b04-46b7-b364-005958b7d82e',
            'd1f612e6-3e3b-481f-a8a9-f917e243b06e',
            'fe0fec0d-002b-406f-87ab-47eb87ba577c',
            '23a47d2c-c6cb-40cc-af87-e946a9df5028',
            '6726643d-e8dc-42fa-83a6-b4ec06921a6b',
            '0d1eb062-13d5-4286-b8d4-e0bea15f3d56'
        ]
    },
    {
        id: 'bc7db965-3c4f-4233-abf5-69bd70c3c175',
        title: 'Personal Tasks',
        description: 'Personal tasks around the house',
        icon: 'heroicons_outline:home',
        lastActivity: moment().startOf('day').subtract(1, 'week').toISOString(),
        members: [
            '6f6a1c34-390b-4b2e-97c8-ff0e0d787839'
        ]
    },
    {
        id: 'bc7db965-3c4f-4233-abf5-69bd70c3c175',
        title: 'Invitación boda',
        description: 'Personal tasks around the house',
        icon: 'heroicons_outline:home',
        lastActivity: moment().startOf('day').subtract(1, 'week').toISOString(),
        members: [
            '6f6a1c34-390b-4b2e-97c8-ff0e0d787839'
        ]
    }
];


export const members = [
    {
        id: '6f6a1c34-390b-4b2e-97c8-ff0e0d787839',
        name: 'Angeline Vinson',
        avatar: 'assets/images/avatars/female-01.jpg'
    },
    {
        id: '4ce4be48-c8c0-468d-9df8-ddfda14cdb37',
        name: 'Roseann Greer',
        avatar: 'assets/images/avatars/female-02.jpg'
    },
    {
        id: '9c510cf3-460d-4a8c-b3be-bcc3db578c08',
        name: 'Lorraine Barnett',
        avatar: 'assets/images/avatars/female-03.jpg'
    },
    {
        id: '7ec887d9-b01a-4057-b5dc-aaed18637cc1',
        name: 'Middleton Bradford',
        avatar: 'assets/images/avatars/male-01.jpg'
    },
    {
        id: '74975a82-addb-427b-9b43-4d2e03331b68',
        name: 'Sue Hays',
        avatar: 'assets/images/avatars/female-04.jpg'
    },
    {
        id: '18bb18f3-ea7d-4465-8913-e8c9adf6f568',
        name: 'Keith Neal',
        avatar: 'assets/images/avatars/male-02.jpg'
    },
    {
        id: 'baa88231-0ee6-4028-96d5-7f187e0f4cd5',
        name: 'Wilkins Gilmore',
        avatar: 'assets/images/avatars/male-03.jpg'
    },
    {
        id: '0d1eb062-13d5-4286-b8d4-e0bea15f3d56',
        name: 'Baldwin Stein',
        avatar: 'assets/images/avatars/male-04.jpg'
    },
    {
        id: '5bf7ed5b-8b04-46b7-b364-005958b7d82e',
        name: 'Bobbie Cohen',
        avatar: 'assets/images/avatars/female-05.jpg'
    },
    {
        id: '93b1a72b-e2db-4f77-82d6-272047433508',
        name: 'Melody Peters',
        avatar: 'assets/images/avatars/female-06.jpg'
    },
    {
        id: 'd1f612e6-3e3b-481f-a8a9-f917e243b06e',
        name: 'Marquez Ryan',
        avatar: 'assets/images/avatars/male-05.jpg'
    },
    {
        id: '79ebb9ee-1e57-4706-810c-03edaec8f56d',
        name: 'Roberta Briggs',
        avatar: 'assets/images/avatars/female-07.jpg'
    },
    {
        id: '6726643d-e8dc-42fa-83a6-b4ec06921a6b',
        name: 'Robbie Buckley',
        avatar: 'assets/images/avatars/female-08.jpg'
    },
    {
        id: '8af617d7-898e-4992-beda-d5ac1d7ceda4',
        name: 'Garcia Whitney',
        avatar: 'assets/images/avatars/male-06.jpg'
    },
    {
        id: 'bcff44c4-9943-4adc-9049-08b1d922a658',
        name: 'Spencer Pate',
        avatar: 'assets/images/avatars/male-07.jpg'
    },
    {
        id: '54160ca2-29c9-4475-88a1-31a9307ad913',
        name: 'Monica Mcdaniel',
        avatar: 'assets/images/avatars/female-09.jpg'
    },
    {
        id: '51286603-3a43-444e-9242-f51fe57d5363',
        name: 'Mcmillan Durham',
        avatar: 'assets/images/avatars/male-08.jpg'
    },
    {
        id: '319ecb5b-f99c-4ee4-81b2-3aeffd1d4735',
        name: 'Jeoine Hebert',
        avatar: 'assets/images/avatars/female-10.jpg'
    },
    {
        id: 'fe0fec0d-002b-406f-87ab-47eb87ba577c',
        name: 'Susanna Kline',
        avatar: 'assets/images/avatars/female-11.jpg'
    },
    {
        id: '23a47d2c-c6cb-40cc-af87-e946a9df5028',
        name: 'Suzette Singleton',
        avatar: 'assets/images/avatars/female-12.jpg'
    }
];

