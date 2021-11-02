const movies = {
    state: {
        moviesList: [
            {
                id: 1,
                favorite: false,
                title: 'El Camino',
                description: "A middle-aged man named Walter has been working as a chemistry teacher at a secondary school for a long time. He is not happy with his life, as it is impossible to feed his children and a non-working spouse on a teacher's salary. The idea of breaking bad had never crossed Walter's mind; all his life he had simply drifted with the flow, trying to make ends meet But the situation changes dramatically when doctors make a terrible diagnosis to the teacher, which sounds like a death sentence. Walter was diagnosed with cancer.The idea that he has lived aimlessly all his life does not leave his head, the thoughts of a man tend to one thing, to the fact that absolutely everything needs to be changed. The chemistry teacher starts making meth morphine and other narcotic substances. Along with Walter, a young man named Jersey Pickman started breaking bad. It was he who started selling drugs on the streets of Albuquerque. Now that they have cash in their pockets, they are ready for a lot of things. Moreover, a chemist's fatal diagnosis frees him from responsibility and moral principles. The life of the companions takes on a completely different orientation, different from the previous dull existence.",
                raiting: '7/10',
                coutry: 'USA',
                premiere: 2019,
                budget: '$6 000 000',
                genres: [
                    'Crime', 'Drama'
                ],
                duration: '122min',

                img: 'src/assets/el_camino.jpg',
                frame: {
                    1: 'src/assets/1.jfif',
                    2: 'src/assets/2.jfif',
                    3: 'src/assets/3.jfif',
                    4: 'src/assets/4.jfif',
                    5: 'src/assets/5.jfif',
                },
            },
            {
                id: 2,
                favorite: false,
                title: 'The Gentelmen',
                description: "A middle-aged man named Walter has been working as a chemistry teacher at a secondary school for a long time. He is not happy with his life, as it is impossible to feed his children and a non-working spouse on a teacher's salary. The idea of breaking bad had never crossed Walter's mind; all his life he had simply drifted with the flow, trying to make ends meet But the situation changes dramatically when doctors make a terrible diagnosis to the teacher, which sounds like a death sentence. Walter was diagnosed with cancer.The idea that he has lived aimlessly all his life does not leave his head, the thoughts of a man tend to one thing, to the fact that absolutely everything needs to be changed. The chemistry teacher starts making meth morphine and other narcotic substances. Along with Walter, a young man named Jersey Pickman started breaking bad. It was he who started selling drugs on the streets of Albuquerque. Now that they have cash in their pockets, they are ready for a lot of things. Moreover, a chemist's fatal diagnosis frees him from responsibility and moral principles. The life of the companions takes on a completely different orientation, different from the previous dull existence.",
                raiting: '9/10',
                coutry: 'USA',
                premiere: 2019,
                budget: '$6 000 000',
                genres: [
                    'Crime', 'Drama'
                ],
                duration: '122min',

                img: 'src/assets/gentelmen.jpg',
                frame: {
                    1: 'src/assets/1.jfif',
                    2: 'src/assets/2.jfif',
                    3: 'src/assets/3.jfif',
                    4: 'src/assets/4.jfif',
                    5: 'src/assets/5.jfif',
                },
            },
            {
                id: 3,
                favorite: false,
                title: 'The Revenant',
                description: "A middle-aged man named Walter has been working as a chemistry teacher at a secondary school for a long time. He is not happy with his life, as it is impossible to feed his children and a non-working spouse on a teacher's salary. The idea of breaking bad had never crossed Walter's mind; all his life he had simply drifted with the flow, trying to make ends meet But the situation changes dramatically when doctors make a terrible diagnosis to the teacher, which sounds like a death sentence. Walter was diagnosed with cancer.The idea that he has lived aimlessly all his life does not leave his head, the thoughts of a man tend to one thing, to the fact that absolutely everything needs to be changed. The chemistry teacher starts making meth morphine and other narcotic substances. Along with Walter, a young man named Jersey Pickman started breaking bad. It was he who started selling drugs on the streets of Albuquerque. Now that they have cash in their pockets, they are ready for a lot of things. Moreover, a chemist's fatal diagnosis frees him from responsibility and moral principles. The life of the companions takes on a completely different orientation, different from the previous dull existence.",
                raiting: '8/10',
                coutry: 'USA',
                premiere: 2019,
                budget: '$6 000 000',
                genres: [
                    'Crime', 'Drama'
                ],
                duration: '122min',

                img: 'src/assets/revenant.jpg',
                frame: {
                    1: 'src/assets/1.jfif',
                    2: 'src/assets/2.jfif',
                    3: 'src/assets/3.jfif',
                    4: 'src/assets/4.jfif',
                    5: 'src/assets/5.jfif',
                },
            },
            {
                id: 4,
                favorite: false,
                title: '1917',
                description: "A middle-aged man named Walter has been working as a chemistry teacher at a secondary school for a long time. He is not happy with his life, as it is impossible to feed his children and a non-working spouse on a teacher's salary. The idea of breaking bad had never crossed Walter's mind; all his life he had simply drifted with the flow, trying to make ends meet But the situation changes dramatically when doctors make a terrible diagnosis to the teacher, which sounds like a death sentence. Walter was diagnosed with cancer.The idea that he has lived aimlessly all his life does not leave his head, the thoughts of a man tend to one thing, to the fact that absolutely everything needs to be changed. The chemistry teacher starts making meth morphine and other narcotic substances. Along with Walter, a young man named Jersey Pickman started breaking bad. It was he who started selling drugs on the streets of Albuquerque. Now that they have cash in their pockets, they are ready for a lot of things. Moreover, a chemist's fatal diagnosis frees him from responsibility and moral principles. The life of the companions takes on a completely different orientation, different from the previous dull existence.",
                raiting: '8/10',
                coutry: 'USA',
                premiere: 2019,
                budget: '$6 000 000',
                genres: [
                    'Crime', 'Drama'
                ],
                duration: '122min',

                img: 'src/assets/1917.jpg',
                frame: {
                    1: 'src/assets/1.jfif',
                    2: 'src/assets/2.jfif',
                    3: 'src/assets/3.jfif',
                    4: 'src/assets/4.jfif',
                    5: 'src/assets/5.jfif',
                },
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getMovies: (state) => state.moviesList
    }
}

export default movies