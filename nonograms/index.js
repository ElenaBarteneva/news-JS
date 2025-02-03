const easyTemplates = [
        {name: "smile",
        field: [
            [1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ]},
        {name: "arrow",
        field: [
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ]},
        {name: "rhombus",
        field: [
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0]
        ]},
        {name: "heart",
        field: [
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]
        ]},
        {name: "cat",
        field: [
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0]
        ]},
        {name: "sand clock",
        field: [
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1]
        ]},
    ];

const middleTemplates = [
    {name: "question mark",
    field: [
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]},
    {name: "house",
    field: [
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]},
    {name: "snowman",
    field: [
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 1, 1]
    ]},
    {name: "cat",
    field: [
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ]},
    {name: "smile",
    field: [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    ]},
    {name: "rabbit",
    field: [
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]}
];

const hardTemplates = [
    {name: "gift",
    field: [
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]},
    {name: "sun",
    field: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]},
    {name: "heart",
    field: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    ]},
    {name: "bug",
    field: [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
    ]},
    {name: "coffee",
    field: [
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    ]},
    {name: "star",
    field: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    ]}
]


document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
        <img alt='logo' src='./assets/images/cube-90.png'>
        <h1>nonograms</h1>
    `
    body.appendChild(header);

    const controlsSection = document.createElement('div');
    controlsSection.classList.add('controls');
    body.appendChild(controlsSection);

    const difficultySection = document.createElement('div');
    difficultySection.classList.add('level');
    body.appendChild(difficultySection);

    const templateSection = document.createElement('div');
    templateSection.classList.add('template');
    body.appendChild(templateSection);

    const gameSection = document.createElement('div');
    gameSection.classList.add('game-field');
    body.appendChild(gameSection);

    const timerSection = document.createElement('div');
    timerSection.classList.add('timer');
    body.appendChild(timerSection);

    

    //controls section
    const randomResetSolutionBlock = document.createElement('div');
    randomResetSolutionBlock.classList.add('save-game');
    controlsSection.appendChild(randomResetSolutionBlock);
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset');
    resetBtn.textContent = "reset game"; 

    const saveGameBtn = document.createElement('button');
    saveGameBtn.classList.add('save');
    saveGameBtn.textContent = "save game";

    const loadGameBtn = document.createElement("button");
    loadGameBtn.classList.add("load");
    loadGameBtn.textContent = "load last game";

    const resultList = document.createElement('button');
    resultList.classList.add('result-list');
    resultList.textContent = "top scores";

    const saveGameBlock = document.createElement('div');
    saveGameBlock.classList.add('save-game');
    saveGameBlock.appendChild(saveGameBtn);
    saveGameBlock.appendChild(loadGameBtn);
    saveGameBlock.appendChild(resultList);
    controlsSection.appendChild(saveGameBlock);

    const randomGameBtn = document.createElement('button');
    randomGameBtn.classList.add('random');
    randomResetSolutionBlock.appendChild(randomGameBtn);
    randomResetSolutionBlock.appendChild(resetBtn);
    randomGameBtn.textContent = "random game";
    const showSolutionBtn = document.createElement('button');
    showSolutionBtn.classList.add('show-solution');
    randomResetSolutionBlock.appendChild(showSolutionBtn);
    showSolutionBtn.textContent = "show solution"; 
    const themesBtn = document.createElement('button');
    themesBtn.classList.add('themes');
    themesBtn.innerHTML= `<img alt='dark-light theme' src='./assets/images/day-and-night.png'>`;
    controlsSection.appendChild(themesBtn);

    //difficulty section
    const difficultyLeftBtn = document.createElement("button");
    difficultyLeftBtn.classList.add('button');
    difficultyLeftBtn.textContent = '⟵';
    const levelField = document.createElement('div');
    levelField.classList.add('difficulty-level');
    const difficultyRightBtn = document.createElement("button");
    difficultyRightBtn.classList.add('button');
    difficultyRightBtn.textContent = `⟶`;
    difficultySection.appendChild(difficultyLeftBtn);
    difficultySection.appendChild(levelField);
    difficultySection.appendChild(difficultyRightBtn);
    levelField.textContent = "easy (5x5)";
    const levels = {
        6: "easy (5x5)",
        11: "middle (10x10)",
        16: "hard (15х15)"
    };
    const fieldSizes = ["easy (5x5)", "middle (10x10)", "hard (15х15)"];

    //template section
    const templateLeftBtn = document.createElement("button");
    templateLeftBtn.classList.add('button');
    templateLeftBtn.textContent = '⟵';
    const templateField = document.createElement('div');
    templateField.classList.add('template-field');
    const templateRightBtn = document.createElement("button");
    templateRightBtn.classList.add('button');
    templateRightBtn.textContent = `⟶`;
    templateSection.appendChild(templateLeftBtn);
    templateSection.appendChild(templateField);
    templateSection.appendChild(templateRightBtn);

    // sounds
    const soundAddBlackCell = new Audio('./assets/audio/to-black.mp3');
    const soundChangeToWhiteCell = new Audio('./assets/audio/to-white.mp3');
    const soundAddCrossCell = new Audio('./assets/audio/cross.mp3')
    const soundVictory = new Audio('./assets/audio/win.mp3')
    function playSound(sound) {
        sound.currentTime = 0;
        sound.play();
    }

    //timer
    let seconds = 0;
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timerSection.appendChild(timer);
    timer.textContent = "00:00";
    let timerStarted = false; 
    let timerData; 


    function launchTimer() {
        const timerElement = document.querySelector('.timer'); 
        function updateTimer() {
            const minutesTimer = Math.floor(seconds / 60);
            const secondsTimer = seconds % 60;
            const minutesStr = minutesTimer < 10 ? `0${minutesTimer}` : `${minutesTimer}`;
            const secondsStr = secondsTimer < 10 ? `0${secondsTimer}` : `${secondsTimer}`;
            timerElement.textContent = `${minutesStr}:${secondsStr}`;
    }
        if(seconds == 0) {
        timerElement.textContent = "00:00";
    }
        timerData = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        timerStarted = true;
    };

    function stopTimer() { 
    clearInterval(timerData);
    // timer.textContent = "00:00";
    timerStarted = false; 
    };

    function timerCheck() { 
        if (!timerStarted) { 
            launchTimer();
            timerStarted = true;
        }; 
    };


    //game field
    let gridSize = 6;
    function initializeGame(gridSize) {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');
        for (let i = 0; i < gridSize; i++) {
        if (gridSize < 11) {
            gameContainer.style.gridTemplateColumns = `80px ${'50px '.repeat(gridSize - 1)}`;
            gameContainer.style.gridTemplateRows = `80px ${'50px '.repeat(gridSize - 1)}`;
        }
        if (gridSize >= 11 && gridSize < 16) {
            gameContainer.style.gridTemplateColumns = `60px ${'30px '.repeat(gridSize - 1)}`;
            gameContainer.style.gridTemplateRows = `60px ${'30px '.repeat(gridSize - 1)}`;
        }
        if (gridSize >= 16) {
            gameContainer.style.gridTemplateColumns = `40px ${'20px '.repeat(gridSize - 1)}`;
            gameContainer.style.gridTemplateRows = `40px ${'20px '.repeat(gridSize - 1)}`;
        }
            for (let j = 0; j < gridSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                   if (j === 0) {
                    cell.classList.add('first-column');
                    cell.classList.remove('cell');
                }
                if (i === 0) {
                    cell.classList.add('first-row');
                    cell.classList.remove('cell');
                }
                // add border-right style to each 5th cell in column
                if (parseInt(cell.dataset.col) % 5 === 0 && j !== gridSize - 1) {
                    cell.classList.add('cell-border-right');
                }
                // add border-bottom style to each 5th cell in row
                if (parseInt(cell.dataset.row) % 5 === 0 && i !== gridSize - 1) {
                    cell.classList.add('cell-border-bottom');
                }
                gameContainer.appendChild(cell);
            }
        }
        gameSection.appendChild(gameContainer);
        const cells = document.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.addEventListener("click", function() {
                if (this.classList.contains('crossed')) {
                    this.classList.remove('crossed');
                    playSound(soundChangeToWhiteCell);
                } else if (this.classList.contains('clicked')){
                    this.classList.toggle('clicked');
                    playSound(soundChangeToWhiteCell);
                } else{
                this.classList.toggle('clicked');
                playSound(soundAddBlackCell);
               
            }
                
            updateGameData()
            timerCheck()
            });
            
            cell.addEventListener("contextmenu", function(event) {
                event.preventDefault();
                if (this.classList.contains('clicked')) {
                    this.classList.remove('clicked');
                    playSound(soundChangeToWhiteCell);
                } else if(this.classList.contains('crossed')) {
                    this.classList.toggle('crossed');
                    playSound(soundChangeToWhiteCell);
                }
                else{
                this.classList.toggle('crossed');
                playSound(soundAddCrossCell);
                }
                updateGameData()
                timerCheck()
            });
        });
    }
    initializeGame();

    let currentSizeIndex = 0;
    let currentTemplateSet = easyTemplates; 

    function updateTemplateSet() {  
        if (gridSize === '6') {
            currentTemplateSet = easyTemplates;
        } else if (gridSize === '11') {
            currentTemplateSet = middleTemplates;
        } else if (gridSize === '16') {
            currentTemplateSet = hardTemplates;
        }
    }

    function updateSizeField() { 
        gridSize = Object.keys(levels)[currentSizeIndex];
        levelField.textContent = levels[gridSize];
        const existingGameContainer = gameSection.querySelector('.game-container');
        if (existingGameContainer) {
            gameSection.removeChild(existingGameContainer);
        }
        initializeGame(gridSize);
        updateTemplateSet(gridSize);
        updateNameField();
        findConsecutiveOnes(currentTemplateSet[currentTemplateIndex].field);
        stopTimer();
    }
    difficultyLeftBtn.addEventListener("click", function() {
        const existingGameContainer = gameSection.querySelector('.game-container');
        if (existingGameContainer) {
            gameSection.removeChild(existingGameContainer);
        }
        currentSizeIndex = (currentSizeIndex - 1 + Object.keys(levels).length) % Object.keys(levels).length;
        templateField.textContent = "select the game";
        updateSizeField();
        seconds = 0;
        timer.textContent = "00:00";
    });
    difficultyRightBtn.addEventListener("click", function() {
        const existingGameContainer = gameSection.querySelector('.game-container');
        if (existingGameContainer) {
            gameSection.removeChild(existingGameContainer);
        }
        currentSizeIndex = (currentSizeIndex + 1) % Object.keys(levels).length;
        templateField.textContent = "select the game";
        updateSizeField();
        seconds = 0;
        timer.textContent = "00:00";
    });

    let currentTemplateIndex = 0;  
    templateField.textContent = currentTemplateSet[currentTemplateIndex].name;
    updateSizeField();
    templateLeftBtn.addEventListener("click", function() {
        currentTemplateIndex = (currentTemplateIndex - 1 + currentTemplateSet.length) % currentTemplateSet.length;
        updateNameField();
        seconds = 0;
        timer.textContent = "00:00";
    });

    templateRightBtn.addEventListener("click", function() {   
        currentTemplateIndex = (currentTemplateIndex + 1) % currentTemplateSet.length;
        updateNameField();
        seconds = 0;
        timer.textContent = "00:00";
    });
    function updateNameField() {   
        templateField.textContent = currentTemplateSet[currentTemplateIndex].name;
        removeAllClickedCells();
        stopTimer();
        findConsecutiveOnes(currentTemplateSet[currentTemplateIndex].field);
    }

    function findConsecutiveOnes(matrix = easyTemplates[0].field) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    let rowSequences = new Array(rowCount).fill([]);
    let colSequences = new Array(colCount).fill([]);   
    for (let i = 0; i < rowCount; i++) {  
        let currentSequence = [];
        for (let j = 0; j < colCount; j++) {
            if (matrix[i][j] === 1) {
                currentSequence.push(1);
            } else if (currentSequence.length > 0) {
                rowSequences[i] = rowSequences[i].concat([currentSequence.length]);
                currentSequence = [];
            }
        }
        if (currentSequence.length > 0) {
            rowSequences[i] = rowSequences[i].concat([currentSequence.length]);
        }
    }
    for (let j = 0; j < colCount; j++) {
        let currentSequence = [];
        for (let i = 0; i < rowCount; i++) {
            if (matrix[i][j] === 1) {
                currentSequence.push(1);
            } else if (currentSequence.length > 0) {
                colSequences[j] = colSequences[j].concat([currentSequence.length]);
                currentSequence = [];
            }
        }
        if (currentSequence.length > 0) {
            colSequences[j] = colSequences[j].concat([currentSequence.length]);
        }
    }
    const firstColumnBlocks = document.querySelectorAll('.first-column'); 
    rowSequences.forEach((sequence, index) => {
        const currentBlock = firstColumnBlocks[index + 1];
        if (currentBlock) {
            currentBlock.textContent = sequence.join(' ');
        }
    });
    const firstRowBlocks = document.querySelectorAll('.first-row'); 
    colSequences.forEach((sequence, index) => {
        const currentBlock = firstRowBlocks[index + 1];
        if (currentBlock) {
            currentBlock.textContent = sequence.join(' \n');
        }
    });
    return { rowSequences, colSequences };
    };
    findConsecutiveOnes();

    function updateGameData() {
        gameData = []; 
        gameDataWithX = []; 
        const cells = document.getElementsByClassName('cell');
        const gridSize = Math.sqrt(cells.length); 
        console.log(gridSize);
        for (let i = 1; i < gridSize + 1; i++) {
            const row = [];
            const rowX = [];
            for (let j = 1; j < gridSize + 1; j++) {
                const cell = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`);
                if (!(cell && (cell.classList.contains('first-row') || cell.classList.contains('first-column')))) { 
                    if (cell && cell.classList.contains('clicked')) {
                        row.push(1);
                        rowX.push(1);
                    } 
                    else if (cell && cell.classList.contains('crossed')) {
                        row.push(0);
                        rowX.push(2);
                    } else {
                        row.push(0);
                        rowX.push(0);
                    }
                }
            }
            gameData.push(row);
            gameDataWithX.push(rowX);
        }
        
        if (isArraysEqual(gameData, currentTemplateSet[currentTemplateIndex].field)) { 
            setTimeout(function () {
                stopTimer();
                modalVictory.style.display = "flex";
                modalVictoryButton.textContent = `Great! You have solved the nonogram in ${document.querySelector('.timer').textContent} seconds`;
                
                playSound(soundVictory);
                let fieldSize = fieldSizes[currentSizeIndex]; 
                let timerValue = document.querySelector('.timer').textContent;
                saveSolutionToLocalStorage(fieldSize, timerValue);
            }, 0);
        };
    };

    function isArraysEqual(arr1, arr2) {   
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
        if (!arr1[i].every((val, index) => val === arr2[i][index])) {
            return false;
        }
        }
        return true;
    };

    function removeAllClickedCells() {
        const cells = document.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.classList.remove('clicked');
            cell.classList.remove('crossed');
        });
    }

    saveGameBtn.addEventListener('click', function() {
    saveGameData();
    });

    loadGameBtn.addEventListener('click', function() {
    loadGameData();
    });

    function saveGameData() {
        if(!(timer.textContent === "00:00") || seconds > 0) {   
        const dataToSave = {
            gridSize: gridSize,
            timerStarted: timerStarted,
            seconds: seconds,   
            timerValue: document.querySelector('.timer').textContent,
            gameData: gameData,
            gameDataWithX: gameDataWithX,
            currentTemplateSetIndex: currentTemplateIndex,
            templateFieldValue: templateField.textContent,
            levelField: levelField.textContent,
        };
        localStorage.setItem('gameData', JSON.stringify(dataToSave));
    }
    }

    function loadGameData() {
        const savedData = localStorage.getItem('gameData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            gridSize = parsedData.gridSize;
            timerStarted = parsedData.timerStarted;
            seconds = parsedData.seconds; 
            document.querySelector('.timer').textContent =  parsedData.timerValue;
            gameData = parsedData.gameData;
            gameDataWithX = parsedData.gameDataWithX;
            currentTemplateIndex = parsedData.currentTemplateSetIndex;
            levelField.textContent = parsedData.levelField;
            const existingGameContainer = gameSection.querySelector('.game-container');
            if (existingGameContainer) {
                gameSection.removeChild(existingGameContainer);
            }
            
            updateTemplateSet(gridSize);
            initializeGame(gridSize); 
            findConsecutiveOnes(currentTemplateSet[currentTemplateIndex].field);
            updateNameField();
            
            templateField.textContent = parsedData.templateFieldValue;
            const cells = document.getElementsByClassName('cell');
            Array.from(cells).forEach((cell, index) => {
                const rowIndex = Math.floor(index / (gridSize - 1));
                const colIndex = index % (gridSize - 1);
                cell.classList.remove('clicked', 'crossed');
                if (gameDataWithX[rowIndex][colIndex] === 1) {
                    cell.classList.add('clicked');
                }
                if (gameDataWithX[rowIndex][colIndex] === 2) {
                    cell.classList.add('crossed');
                }
            });
            launchTimer();
        }
    };

    //show solution
    function highlightSolutionCells() {
        const cells = document.getElementsByClassName('cell');
        for (let i = 0; i < currentTemplateSet[currentTemplateIndex].field.length; i++) {
            for (let j = 0; j < currentTemplateSet[currentTemplateIndex].field[i].length; j++) {
                const cell = document.querySelector(`.cell[data-row="${i + 1}"][data-col="${j + 1}"]`);  
                if (currentTemplateSet[currentTemplateIndex].field[i][j] === 1) {
                    cell.classList.add('solution');
                } else {
                    cell.classList.remove('solution');
                }
            }
        }
    };
    function clearSolutionClasses() {
        const cells = document.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.classList.remove('solution');
        });
    }
    showSolutionBtn.addEventListener('mousedown', function() { 
        highlightSolutionCells();
    });
    showSolutionBtn.addEventListener('mouseup', clearSolutionClasses);  
    showSolutionBtn.addEventListener('mouseleave', clearSolutionClasses);
    showSolutionBtn.addEventListener('touchstart', function(event) {
        event.preventDefault();
        showSolutionBtn.classList.add('active');
        highlightSolutionCells();
    });
    showSolutionBtn.addEventListener('touchend', function() {
        showSolutionBtn.classList.remove('active');
        clearSolutionClasses();
    });
    showSolutionBtn.addEventListener('touchcancel', function() {
        showSolutionBtn.classList.remove('active');
        clearSolutionClasses();
    });

    //top scores
    function saveSolutionToLocalStorage(fieldSize, timerValue) {
        let difficultyLevelText = document.querySelector('.difficulty-level').textContent;
        let currentDifficultyLevel = difficultyLevelText;
        const solutionData = { 
        fieldName: currentTemplateSet[currentTemplateIndex].name,
        fieldSize: currentDifficultyLevel,
        timerValue: timerValue,
        };
        let savedSolutions = JSON.parse(localStorage.getItem('savedSolutions')) || [];
        const numericTimerValue = Number(timerValue.replace(/:/g, ''));  
        savedSolutions.push({ ...solutionData, numericTimerValue }); 
        savedSolutions.sort((a, b) => b.numericTimerValue - a.numericTimerValue); 
        savedSolutions = savedSolutions.slice(-5); 
        localStorage.setItem('savedSolutions', JSON.stringify(savedSolutions));
    };

    const modalTopScores = document.createElement('div');  
    modalTopScores.classList.add('modal-top-scores');
    body.appendChild(modalTopScores);
    const modalTopScoresClose = document.createElement('button'); 
    modalTopScores.appendChild(modalTopScoresClose);
    modalTopScoresClose.classList.add('button');
    modalTopScoresClose.textContent = "close";
    const modalTopScoresOrderedList = document.createElement('ol'); 
    modalTopScores.appendChild(modalTopScoresOrderedList);
    modalTopScoresOrderedList.textContent = 'top scores';

    let listItems = []; 
    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = '---';
        modalTopScoresOrderedList.appendChild(listItem);
        listItems.push(listItem); 
    }
    resultList.addEventListener('click', function (event) {
        let savedSolutions = JSON.parse(localStorage.getItem('savedSolutions')) || []; 
        savedSolutions.reverse(); 
        savedSolutions.forEach((solution, index) => {
        listItems[index].textContent = `difficulty: ${solution.fieldSize},\ntemplate: ${solution.fieldName},\ntime: ${solution.timerValue}`;
        });
        modalTopScores.style.display = 'flex';
    });  
    modalTopScoresClose.addEventListener('click',function(){
        modalTopScores.style.display = 'none';
    });
    
    const modalVictory = document.createElement('div');  
    modalVictory.classList.add('modal-victory');
    body.appendChild(modalVictory);
    const modalVictoryButton = document.createElement('button'); 
    modalVictoryButton.classList.add('modal-victory__button');
    modalVictory.appendChild(modalVictoryButton);
    modalVictoryButton.addEventListener("click", function() {
        modalVictory.style.display = "none";
        resetGame();
    });

    function resetGame() {
        const existingGameContainer = gameSection.querySelector('.game-container');
        if (existingGameContainer) {
            gameSection.removeChild(existingGameContainer);
        }
        seconds = 0;
        document.querySelector('.timer').textContent = "00:00";
        timerStarted = false;
        initializeGame(gridSize);
        findConsecutiveOnes(currentTemplateSet[currentTemplateIndex].field);
        updateNameField();
    };

    resetBtn.addEventListener("click", function() {
        resetGame();
    });

    
    function randomGame() {
        const existingGameContainer = gameSection.querySelector('.game-container');
        if (existingGameContainer) {
            gameSection.removeChild(existingGameContainer);
        }
        seconds = 0;
        timer.textContent = "00:00";
        timerStarted = false;
        const allFieldSizes = ['6', '11', '16'];
        const randomIndex = Math.floor(Math.random() * allFieldSizes.length);
        gridSize = allFieldSizes[randomIndex];
        levelField.textContent = fieldSizes[randomIndex];
        updateTemplateSet(gridSize);
        initializeGame(gridSize);
        findConsecutiveOnes(currentTemplateSet[currentTemplateIndex].field);
        const randomFieldIndex = Math.floor(Math.random() * currentTemplateSet.length);
        currentTemplateIndex = randomFieldIndex;
        updateNameField();
    }
    randomGameBtn.addEventListener("click", function() {
        randomGame();
    });

    function toggleTheme() {
        body.classList.toggle('dark-theme');
    };
    themesBtn.addEventListener("click", function() {
        toggleTheme();
    });
    
  });
   