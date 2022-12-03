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
        title: '' + faker.date.weekday() + ' Hackathon. Join and win prizes.',
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
        itemNum: '24',
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
        title: 'You Have Reached the End of the Internet',
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
        itemNum: '30',
        timescale: genTime()
    }


];