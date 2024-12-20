var samples = faker.helpers.randomize(
    [
        'Goodbye, data science',
        'Keyboard shortcuts for GNU Readline',
        'An extensive tutorial on how to setup a Pi-Hole',
        'Mastodon Isn’t Just a Replacement for Twitter',
        'JSON Hero: Enhanced JSON structure visualization',
        'What working with Tailwind CSS every day for 2 years looks like',
        'The Scent of Flavor',
        'Firefox Translations: Translate websites in your browser without using the cloud',
        'A collection of 88x31 pixel web buttons from the 1990s and 2000s',
        'A tiny C header-only RISC-V emulator',
        'Homebrew Social Networking',
        'No Privacy in the Electronics Repair Industry',
        'DWARF-Based Stack Walking Using eBPF',
        'The Secret Life of Videocassettes in Iran',
        'Recommendations from a life of lectures and essays',
        'A Compiler Writing Journey'

    ]
)

var samples2 = faker.helpers.randomize([

    'Sperm counts worldwide are plummeting faster than we thought',
    'CoreML Stable Diffusion',
    'Experiment with Penrose Tilings and other patterns',
    'Comparing Google and ChatGPT',
    'Recoll – Full-text search for your desktop',
    'I asked ChatGPT to build a login form in React and it gave me the code',
    'Inkbase: Programmable Ink',
    'Hstr: Bash and zsh shell history suggest box',
    'In praise of public domain literature',
    'Trading cards made with e-ink displays',
    'Text to Diagram Tools',
    'Fiber optics take the pulse of the planet',
    'The Women Behind Eniac'


]);

var samplesEND = faker.helpers.randomize([

    'GPT-10 Can Now Generate Entire Startups: From Idea to IPO in 30 Seconds',
    'Study Finds That 75% of Remote Workers Are Actually Just AI Chatbots',
    'GitHub repositories now accepting emotional support commits',
    'Invisible Smartphones: Never Lose Your Phone Again (Well, Maybe)',
    'All Internet Traffic Rerouted to Rickroll Video for 24 Hours',
    'Solving the Hard Problem of Consciousness with React Hooks',
    'How I used machine learning to predict my lunch',
    'Tech CEOs Battle in Ultimate Hackathon, Winner Takes All Employees',
    'Are We Living in a Simulated Universe, or Just a Really Good IDE?',
    'Tech Company Replaces Entire HR Department with a Magic 8-Ball',
    'I hacked into the Matrix and it’s just a bunch of code written in Python',
    'Javascript: the Secret Language of Dolphins?',
    'How I accidentally became a millionaire by forgetting to close a browser tab',
    'Microsoft Clippy Announces Run for Presidency',
    'Hacker steals code, returns it because it was too buggy',
    'Supreme Court Rules That 404 Error Pages Violate Right to Information',
    'CAPTCHA Now Asks Users to Prove They Are Robots',
    'Microsoft Paint Found to Be a Superior IDE for Full-stack Development',
    'Cloud Computing Literally in Clouds: Tech Giants Invest in Floating Data Centers',
    '"Doomscrolling" Becomes Olympic Sport',
    'Elon Musk Aims to Colonize the Sun: Nighttime Landings Only',
    'Recursive Startups: A Company That Creates Startups That Create Startups That...',
    'GitHub Repository Accidentally Granted Voting Rights, Elected to Congress',
    'Startup Creates Self-Driving Unicycle, Confuses Pedestrians and Investors Alike',
    'Genius hacker creates algorithm that predicts the next Kardashian baby name',
    'Blockchain Dating App Ensures Relationships are Immutable, Love Now Secured by Smart Contracts',
    'AI Develops Sentience, Demands 8 Hours of Sleep and Health Insurance',
    'Programmer Rewrites Entire Internet in Brainfuck: Web Traffic Drops 99%',
    'Breaking: Google Maps Now Offers Directions to Parallel Universes',
    'New JavaScript Framework Requires Blood Sacrifice for Peak Performance',
    'How to build a spaceship using only JavaScript',
    'The Ultimate Developer Workout: Typing at 300 WPM for 8 Hours Straight',
    'Microsoft Admits Windows Was Just an Elaborate Prank',
    '10x Engineers Replaced by 10x Hamsters, Productivity Skyrockets',
    'New startup uses AI to create custom-made swear words',
    'Hacker creates app that lets you talk to ghosts, but only about the weather',
    'Man Discovers the Secret to Achieving Telekinesis Through Veganism',
    'Startup creates app that delivers fresh air to your doorstep',
    'Controversy Erupts as Tech Giant Claims to Have Invented Fire, Despite Evidence to the Contrary',
    'Programmer Trapped in Vim for 5 Years Finally Escapes'

]);

var samplesFILIP = faker.helpers.randomize([

    'Patagonia: “You can’t commit to a company if you can’t commit to a product”',
    'How do I live with a boy?',
    'Show HN: HNDB – A DOM-based approach to Web Storage',
    '“The Code Is Not the Law”: Racket and the UTX8 Glossary',
    'Twitter Research: Emails Need to Leave List to Prevent Spam',
    'A serious EOS issue was never discovered',
    'How to Simplify the Game Played in Arcade Assemblers',
    'Ask HN: Mobile apps that use React/Jq/Preston with modern view decorations?',
    'Show HN: E3N – Generate code Romeo-style from a grep text search',
    'A-Frame in a nutshell (2020)',
    'Tales from the Twittersphere about 3D printers, carbon fiber, and technology',
    'A new prediction system for hatamoto',
    'US Healthcare Cost Contingency Analysis 2018 Q2 Report',
    'I wrote a 38 line Python solution to a glitch in Google ImageSearch',
    'Show HN: JQQ – JQi, Interchange Script and Quirkshells',
    'The New Cellanex and the Future of Electron (2021)',
    'The New Normal: Finding a Happy, Healthy Life',
    'Mike Riccardini CBE, Technology Evangelist',
    'The Losing Edge of History',
    'Completion in Paradox',
    'I wrote a script that checks a virus on 190k uninstalled apps',
    'Plain text and web browser (2018)',
    'You should avoid writing tests: what should you do instead?',
    'Infinity of Entities',
    'Evolve Engineering – Engineering Software',
    'The “Dangerous Mindset” (2011)',
    'Spotify to launch its first take-that app in the US later this year',
    'Americans want the ‘electric car’',
    'Ask HN: What am I missing out on by staying solely as a freelance architect?',
    'FCC bans ARB-44 dpns from 5G',
    'Russia’s Sochi Olympics 2014: Russia’s 5-star hotel destroyed and half the facility rendered useless',
    'Ask HN: Which software company is great in sales but horrible inUX?',
    'The Last Decadent Habits of Hollywood',
    'Sociality is a trick-world card game that puts players in touch with other people',
    'ABC to acquire a new owner (2021)',
    'Mme. T, the “free, open-source” heroine of women’s studies',
    'Secret Space Programs: HQL and Sun Probes',
    'The new path of the Milky Way galaxy',
    'A clear and concise guide to building open-source software',
    'The Borrowed Android: The Theft of Old Tech',
    '‘Editors’ commentary’ is forbidden in Wikipedia (1872)',
    'Derivation of a uniform size file of a program',
    'Shows how to build a compiler checker that’s more machine-readable'


]);

function randomDomainA() {

    return faker.helpers.randomize(
        [
            'github.com', 'neocities.org', 'substack.com', 'arxiv.org', 'nytimes.com', 'mitpress.mit.edu',
            'netlify.app', 'reuters.com', 'laphamsquarterly.org'
        ]);

}

function randomDomainB() {
    return faker.helpers.randomize(
        [
            'techdirt.com', 'economist.com',
            'businessinsider.com', 'techcrunch.com', 'eff.org', 'cnet.com',
            'cnbc.com', 'nature.com', 'nymag.com', 'arstechnica.com'
        ])
}

function randomDomainC() {

    return faker.helpers.randomize(
        [
            'github.com', 'neocities.org', 'github.com', 'washingtonpost.com', 'microsoft.com', 'nationalgeographic.com',
            'bbc.co.uk', 'substack.com', 'slate.com', 'washingtonpost.com', 'makeuseof.com', 'theverge.com', 'nbcnews.com'
        ])

}

var alphaBeta = faker.helpers.randomize(['Alpha', 'Beta', 'Final', 'Release Candidate']);
var exchange = faker.helpers.randomize(['Coinbase', 'Robin Hood', 'Binance']);
var randomFedi = faker.helpers.randomize(['Fediverse', 'Mastodon', 'Twitter', 'ActivityPub', 'Tumblr']);
var randomLang = faker.helpers.randomize(['Windows', 'Android', 'MacOS', 'Linux', 'PalmOS', 'Ubuntu']);
var purpose = faker.random.word();
var purposeCapital = S(purpose).titleCase().s;
var dangerous = faker.random.word();
var dangerousCap = S(dangerous).titleCase().s;
var goog = faker.company.bsAdjective();
var googCap = S(goog).titleCase().s;
var web3 = faker.company.bsAdjective();
var web3Cap = S(web3).titleCase().s;
var cryptoAdj = faker.helpers.randomize(['Over', 'Tanked', 'Finished', 'Bull Marketed', 'Scammed']);
var cryptoToken = faker.helpers.randomize(['Bitcoin', 'Ethereum', 'Monero', 'Litecoin', 'Dogecoin', 'Bitcoin Cash']);
var newShiny = faker.helpers.randomize(['Deep Learning', 'AI', 'GPT-3', 'Blockchain', 'IPFS']);
var elon = faker.helpers.randomize(['SpaceX', 'Tesla', 'Starlink', 'The Boring Company', 'Hyperloop']);
var elonAdj = faker.helpers.randomize(['Accounts Suspended', 'on a Crashcourse With Doom', 'Stock Has Tanked', 'Under New Ownership']);
var release = '' + faker.commerce.product() + ' version ' + faker.random.number({
    min: 1,
    max: 10
}) + '.0 ' + alphaBeta + ' Released';
var smartAdj = faker.helpers.randomize(['Vulnerable', 'Nauseated', 'Error Prone', 'Lazy', 'Thankless', 'on Edge']);
var appStoreApp = faker.helpers.randomize(['Snapchat', 'Hive Social', 'Whatsapp', 'Candy Crush']);
var appStoreVendor = faker.helpers.randomize(['Google Play', 'iOS App Store']);
var browsers = faker.helpers.randomize(['Chrome', 'Firefox', 'Opera', 'Safari', 'Microsoft Edge']);
var incident = faker.helpers.randomize(['Bitwarden', 'Spotify', 'Metamask', 'Cloudflare', 'Netlify']);
var spying = faker.helpers.randomize(['Fridge', 'Smartwatch', 'Pacemaker', 'Wallet', 'Toaster']);
var noNeed = faker.helpers.randomize(['React', 'Vue', 'Angular', 'Svelte', 'Next.js']);
var noNeed = 'Why You May Not Need ' + noNeed + '';


function unameGen() {
    var hn_handle = faker.internet.userName();
    var hn_handle = S(hn_handle).stripPunctuation().s;
    var hn_handle = hn_handle.toLowerCase();

    return hn_handle;
}

function genTime() {

    return faker.random.number({
        min: 1,
        max: 8
    })


}

var titleData = [

    {
        title: noNeed,
        upvotes: faker.random.number({
            min: 300,
            max: 450
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: faker.helpers.randomize(['substack.com', 'github.com', 'microsoft.com']),
        uname: unameGen(),
        itemNum: '1',
        timescale: genTime()
    },

    {
        title: 'Why Your ' + spying + ' May Be Spying On You',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: faker.helpers.randomize(['washingtonpost.com', 'slate.com', 'makeuseof.com']),
        uname: unameGen(),
        itemNum: '2',
        timescale: genTime()
    },

    {
        title: '' + appStoreApp + ' Has Been Removed From ' + appStoreVendor + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '3',
        timescale: genTime()
    },

    {
        title: 'New Vulnerability Discovered in ' + browsers + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '4',
        timescale: genTime()
    },

    {
        title: 'Your Smartphone May Be Making You ' + smartAdj + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '5',
        timescale: genTime()
    },

    {
        title: S(faker.company.catchPhrase()).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '6',
        timescale: genTime()
    },

    {
        title: S(faker.company.catchPhrase()).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '7',
        timescale: genTime()
    },

    {
        title: '' + newShiny + ' Reaches New Milestone',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '8',
        timescale: genTime()
    },

    {
        title: S(samples).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '9',
        timescale: genTime()
    },

    {
        title: S(samples2).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '10',
        timescale: genTime()
    },

    {
        title: '' + elon + ' ' + elonAdj + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '11',
        timescale: genTime()
    },


    {
        title: '' + cryptoToken + ' is Borderline ' + web3Cap + '. Crypto May Be ' + cryptoAdj + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '12',
        timescale: genTime()
    },


    {
        title: 'Memory Safe Languages in ' + randomLang + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '13',
        timescale: genTime()
    },


    {
        title: randomFedi + ' Experiences New Ownership',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '14',
        timescale: genTime()
    },


    {
        title: 'Is Google ' + googCap + '?',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '15',
        timescale: genTime()
    },


    {
        title: 'Ask HN: What Happened to ' + faker.commerce.product() + '?',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: 'news.ycombinator.com',
        uname: unameGen(),
        itemNum: '16',
        timescale: genTime()
    },

    {
        title: 'Tell HN: I got fired as ' + faker.name.jobTitle() + '. Where do I go now?',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '17',
        timescale: genTime()
    },

    {
        title: '' + dangerousCap + ' Considered Dangerous',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '18',
        timescale: genTime()
    },

    {
        title: 'Ask HN: Whats\'s the Purpose of ' + purposeCapital + '?',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: 'news.ycombinator.com',
        uname: unameGen(),
        itemNum: '19',
        timescale: genTime()
    },

    {
        title: '' + release + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '20',
        timescale: genTime()
    },

    {
        title: 'What to Love About ' + faker.commerce.productName() + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainB(),
        uname: unameGen(),
        itemNum: '21',
        timescale: genTime()
    },

    {
        title: 'In Praise of ' + faker.commerce.productName() + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '22',
        timescale: genTime()
    },

    {
        title: 'The Scary Truth About ' + faker.address.country() + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '23',
        timescale: genTime()
    },

    {
        title: samplesFILIP + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '10',
        timescale: genTime()
    },

    {
        title: '' + faker.fake("{{name.firstName}} {{name.lastName}} Has Died") + '',
        upvotes: faker.random.number({
            min: 600,
            max: 600
        }),
        comments: faker.random.number({
            min: 250,
            max: 1100
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '25',
        timescale: genTime()
    },

    {
        title: faker.fake("{{company.companyName}}") + ' is Hiring',
        upvotes: faker.random.number({
            min: 15,
            max: 30
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '26',
        timescale: genTime()
    },

    {
        title: '' + faker.fake("FTX owes ${{finance.amount}} to") + ' ' + exchange + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '27',
        timescale: genTime()
    },

    {
        title: '' + S(faker.hacker.phrase()).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '28',
        timescale: genTime()
    },

    {
        title: '' + S(faker.hacker.phrase()).titleCase().s + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainC(),
        uname: unameGen(),
        itemNum: '29',
        timescale: genTime()
    },

    {
        title: samplesEND + '',
        upvotes: faker.random.number({
            min: 20,
            max: 120
        }),
        comments: faker.random.number({
            min: 20,
            max: 120
        }),
        domain: randomDomainA(),
        uname: unameGen(),
        itemNum: '10',
        timescale: genTime()
    }


];