// champions
const akali = 0;
const ambessa = 1;
const amumu = 2;
const blitzcrank = 3;
const caitlyn = 4;
const camille = 5;
const cassiopeia = 6;
const corki = 7;
const darius = 8;
const draven = 9;
const drMundo = 10;
const ekko = 11;
const elise = 12;
const ezreal = 13;
const gangplank = 14;
const garen = 15;
const heimerdinger = 16;
const illaoi = 17;
const irelia = 18;
const jayce = 19;
const jinx = 20;
const kogMaw = 21;
const leblanc = 22;
const leona = 23;
const loris = 24;
const lux = 25;
const maddie = 26;
const malzahar = 27;
const mordekaiser = 28;
const morgana = 29;
const nami = 30;
const nocturne = 31;
const nunu = 32;
const powder = 33;
const rell = 34;
const renata = 35;
const renni = 36;
const rumble = 37;
const scar = 38;
const sett = 39;
const sevika = 40;
const silco = 41;
const singed = 42;
const smeech = 43;
const steb = 44;
const swain = 45;
const tristana = 46;
const trundle = 47;
const twistedFate = 48;
const twitch = 49;
const urgot = 50;
const vander = 51;
const vex = 52;
const vi = 53;
const violet = 54;
const vladimir = 55;
const zeri = 56;
const ziggs = 57;
const zoe = 58;
const zyra = 59;

// traits
// origins
const academy = 0;
const automata = 1;
const blackRose = 2;
const chemBaron = 3;
const conqueror = 4;
const emissary = 5;
const enforcer = 6;
const experiment = 7;
const family = 8;
const firelight = 9;
const highRoller = 10;
const junkerKing = 11;
const rebel = 12;
const scrap = 13;

// classes
const ambusher = 14;
const artillerist = 15;
const bruiser = 16;
const dominator = 17;
const formSwapper = 18;
const pitFighter = 19;
const quickstriker = 20;
const sentinel = 21;
const sniper = 22;
const sorcerer = 23;
const visionary = 24;
const watcher = 25;

// team-up
const geniuses = 26;
const martialLaw = 27;
const menaces = 28;
const reunion = 29;
const sisters = 30;
const unlikelyDuo = 31;
const whatCloudHaveBeen = 32;

export type Trait = {
  k: number;
  id: string;
  arr: number[];
  active: number[];
  isUnique?: boolean;
  isTeamUp?: boolean;
  hasEmblem?: boolean;
};

export const traits: { [key: number]: Trait } = {
  // origins
  [academy]: {
    k: academy,
    id: 'academy',
    arr: [ezreal, heimerdinger, jayce, leona, lux],
    active: [3, 4, 5, 6],
    hasEmblem: true,
  },
  [automata]: {
    k: automata,
    id: 'automata',
    arr: [amumu, blitzcrank, kogMaw, malzahar, nocturne],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [blackRose]: {
    k: blackRose,
    id: 'blackRose',
    arr: [cassiopeia, elise, leblanc, morgana, vladimir],
    active: [3, 4, 5, 7],
    hasEmblem: true,
  },
  [chemBaron]: {
    k: chemBaron,
    id: 'chemBaron',
    arr: [renata, renni, sevika, silco, singed, smeech],
    active: [3, 4, 5, 6, 7],
    hasEmblem: true,
  },
  [conqueror]: {
    k: conqueror,
    id: 'conqueror',
    arr: [ambessa, darius, draven, mordekaiser, rell, swain],
    active: [2, 4, 6, 9],
    hasEmblem: true,
  },
  [emissary]: {
    k: emissary,
    id: 'emissary',
    arr: [ambessa, garen, nami, tristana],
    active: [1, 4],
  },
  [enforcer]: {
    k: enforcer,
    id: 'enforcer',
    arr: [caitlyn, camille, loris, maddie, steb, twistedFate, vi],
    active: [2, 4, 6, 8, 10],
    hasEmblem: true,
  },
  [experiment]: {
    k: experiment,
    id: 'experiment',
    arr: [drMundo, nunu, twitch, urgot, zyra],
    active: [3, 5, 7],
    hasEmblem: true,
  },
  [family]: {
    k: family,
    id: 'family',
    arr: [powder, vander, violet],
    active: [3, 4, 5],
    hasEmblem: true,
  },
  [firelight]: {
    k: firelight,
    id: 'firelight',
    arr: [ekko, scar, zeri],
    active: [2, 3, 4],
    hasEmblem: true,
  },
  [highRoller]: {
    k: highRoller,
    id: 'highRoller',
    arr: [sevika],
    active: [1],
    isUnique: true,
  },
  [junkerKing]: {
    k: junkerKing,
    id: 'junkerKing',
    arr: [rumble],
    active: [1],
    isUnique: true,
  },
  [rebel]: {
    k: rebel,
    id: 'rebel',
    arr: [akali, ezreal, illaoi, irelia, jinx, sett, vex, zoe],
    active: [3, 5, 7, 10],
    hasEmblem: true,
  },
  [scrap]: {
    k: scrap,
    id: 'scrap',
    arr: [corki, ekko, gangplank, powder, rumble, trundle, ziggs],
    active: [2, 4, 6, 9],
    hasEmblem: true,
  },

  // classes
  [ambusher]: {
    k: ambusher,
    id: 'ambusher',
    arr: [camille, ekko, jinx, powder, smeech],
    active: [2, 3, 4, 5],
    hasEmblem: true,
  },
  [artillerist]: {
    k: artillerist,
    id: 'artillerist',
    arr: [corki, ezreal, tristana, urgot],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [bruiser]: {
    k: bruiser,
    id: 'bruiser',
    arr: [elise, nunu, renni, sett, steb, trundle],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [dominator]: {
    k: dominator,
    id: 'dominator',
    arr: [blitzcrank, cassiopeia, drMundo, mordekaiser, silco, ziggs],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [formSwapper]: {
    k: formSwapper,
    id: 'formSwapper',
    arr: [elise, gangplank, jayce, swain],
    active: [2, 4],
  },
  [pitFighter]: {
    k: pitFighter,
    id: 'pitFighter',
    arr: [draven, gangplank, sevika, urgot, vi, violet],
    active: [2, 4, 6, 8],
    hasEmblem: true,
  },
  [quickstriker]: {
    k: quickstriker,
    id: 'quickstriker',
    arr: [akali, ambessa, nocturne, twistedFate],
    active: [2, 3, 4],
    hasEmblem: true,
  },
  [sentinel]: {
    k: sentinel,
    id: 'sentinel',
    arr: [illaoi, irelia, leona, loris, rell, rumble, singed],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [sniper]: {
    k: sniper,
    id: 'sniper',
    arr: [caitlyn, kogMaw, maddie, twitch, zeri],
    active: [2, 4, 6],
    hasEmblem: true,
  },
  [sorcerer]: {
    k: sorcerer,
    id: 'sorcerer',
    arr: [leblanc, lux, nami, swain, vladimir, zoe, zyra],
    active: [2, 4, 6, 8],
    hasEmblem: true,
  },
  [visionary]: {
    k: visionary,
    id: 'visionary',
    arr: [heimerdinger, malzahar, morgana, nunu, rell, renata, vex],
    active: [2, 4, 6, 8],
    hasEmblem: true,
  },
  [watcher]: {
    k: watcher,
    id: 'watcher',
    arr: [amumu, darius, garen, scar, vander, vladimir],
    active: [2, 4, 6],
    hasEmblem: true,
  },

  // team-up
  [geniuses]: {
    k: geniuses,
    id: 'geniuses',
    arr: [ekko, heimerdinger],
    active: [2],
    isTeamUp: true,
  },
  [martialLaw]: {
    k: martialLaw,
    id: 'martialLaw',
    arr: [ambessa, caitlyn],
    active: [2],
    isTeamUp: true,
  },
  [menaces]: {
    k: menaces,
    id: 'menaces',
    arr: [powder, silco],
    active: [2],
    isTeamUp: true,
  },
  [reunion]: {
    k: reunion,
    id: 'reunion',
    arr: [ekko, vi],
    active: [2],
    isTeamUp: true,
  },
  [sisters]: {
    k: sisters,
    id: 'sisters',
    arr: [vi, jinx],
    active: [2],
    isTeamUp: true,
  },
  [unlikelyDuo]: {
    k: unlikelyDuo,
    id: 'unlikelyDuo',
    arr: [jinx, sevika],
    active: [2],
    isTeamUp: true,
  },
  [whatCloudHaveBeen]: {
    k: whatCloudHaveBeen,
    id: 'whatCloudHaveBeen',
    arr: [vander, silco],
    active: [2],
    isTeamUp: true,
  },
};

export const TRAITS_LENGTH = 33;
export const TEAM_UP_LENGTH = 7;

export type Champion = {
  id: string;
  k: number;
  c: number;
  t: {
    id: string;
    arr: number[];
    active: number[];
  }[];
  img: string;
};

export const champions: { [key: number]: Champion } = {
  [akali]: {
    id: 'akali',
    k: akali,
    c: 2,
    t: [traits[rebel], traits[quickstriker]],
    img: 'Akali.png',
  },
  [ambessa]: {
    id: 'ambessa',
    k: ambessa,
    c: 4,
    t: [traits[conqueror], traits[emissary], traits[quickstriker]],
    img: 'Ambessa.png',
  },
  [amumu]: {
    id: 'amumu',
    k: amumu,
    c: 1,
    t: [traits[automata], traits[watcher]],
    img: 'Amumu.png',
  },
  [blitzcrank]: {
    id: 'blitzcrank',
    k: blitzcrank,
    c: 3,
    t: [traits[automata], traits[dominator]],
    img: 'Blitzcrank.png',
  },
  [caitlyn]: {
    id: 'caitlyn',
    k: caitlyn,
    c: 5,
    t: [traits[enforcer], traits[sniper]],
    img: 'Caitlyn.png',
  },
  [camille]: {
    id: 'camille',
    k: camille,
    c: 2,
    t: [traits[enforcer], traits[ambusher]],
    img: 'Camille.png',
  },
  [cassiopeia]: {
    id: 'cassiopeia',
    k: cassiopeia,
    c: 3,
    t: [traits[blackRose], traits[dominator]],
    img: 'Cassiopeia.png',
  },
  [corki]: {
    id: 'corki',
    k: corki,
    c: 4,
    t: [traits[scrap], traits[artillerist]],
    img: 'Corki.png',
  },
  [darius]: {
    id: 'darius',
    k: darius,
    c: 1,
    t: [traits[conqueror], traits[watcher]],
    img: 'Darius.png',
  },
  [drMundo]: {
    id: 'drMundo',
    k: drMundo,
    c: 4,
    t: [traits[experiment], traits[dominator]],
    img: 'DrMundo.png',
  },
  [draven]: {
    id: 'draven',
    k: draven,
    c: 1,
    t: [traits[conqueror], traits[pitFighter]],
    img: 'Draven.png',
  },
  [ekko]: {
    id: 'ekko',
    k: ekko,
    c: 4,
    t: [traits[firelight], traits[ambusher], traits[scrap]],
    img: 'Ekko.png',
  },
  [elise]: {
    id: 'elise',
    k: elise,
    c: 4,
    t: [traits[blackRose], traits[bruiser], traits[formSwapper]],
    img: 'Elise.png',
  },
  [ezreal]: {
    id: 'ezreal',
    k: ezreal,
    c: 3,
    t: [traits[academy], traits[artillerist], traits[rebel]],
    img: 'Ezreal.png',
  },
  [gangplank]: {
    id: 'gangplank',
    k: gangplank,
    c: 3,
    t: [traits[scrap], traits[formSwapper], traits[pitFighter]],
    img: 'Gangplank.png',
  },
  [garen]: {
    id: 'garen',
    k: garen,
    c: 4,
    t: [traits[emissary], traits[watcher]],
    img: 'Garen.png',
  },
  [heimerdinger]: {
    id: 'heimerdinger',
    k: heimerdinger,
    c: 4,
    t: [traits[academy], traits[visionary]],
    img: 'Heimerdinger.png',
  },
  [illaoi]: {
    id: 'illaoi',
    k: illaoi,
    c: 4,

    t: [traits[rebel], traits[sentinel]],
    img: 'Illaoi.png',
  },
  [irelia]: {
    id: 'irelia',
    k: irelia,
    c: 1,
    t: [traits[rebel], traits[sentinel]],
    img: 'Irelia.png',
  },
  [jayce]: {
    id: 'jayce',
    k: jayce,
    c: 5,
    t: [traits[academy], traits[formSwapper]],
    img: 'Jayce.png',
  },
  [jinx]: {
    id: 'jinx',
    k: jinx,
    c: 5,
    t: [traits[rebel], traits[ambusher]],
    img: 'Jinx.png',
  },
  [kogMaw]: {
    id: 'kogMaw',
    k: kogMaw,
    c: 3,
    t: [traits[automata], traits[sniper]],
    img: 'KogMaw.png',
  },
  [leblanc]: {
    id: 'leblanc',
    k: leblanc,
    c: 5,
    t: [traits[blackRose], traits[sorcerer]],
    img: 'Leblanc.png',
  },
  [leona]: {
    id: 'leona',
    k: leona,
    c: 2,
    t: [traits[academy], traits[sentinel]],
    img: 'Leona.png',
  },
  [loris]: {
    id: 'loris',
    k: loris,
    c: 3,
    t: [traits[enforcer], traits[sentinel]],
    img: 'Loris.jpg',
  },
  [lux]: {
    id: 'lux',
    k: lux,
    c: 1,
    t: [traits[academy], traits[sorcerer]],
    img: 'Lux.png',
  },
  [maddie]: {
    id: 'maddie',
    k: maddie,
    c: 1,
    t: [traits[enforcer], traits[sniper]],
    img: 'Maddie.jpg',
  },
  [malzahar]: {
    id: 'malzahar',
    k: malzahar,
    c: 5,
    t: [traits[automata], traits[visionary]],
    img: 'Malzahar.png',
  },
  [mordekaiser]: {
    id: 'mordekaiser',
    k: mordekaiser,
    c: 5,
    t: [traits[conqueror], traits[dominator]],
    img: 'Mordekaiser.png',
  },
  [morgana]: {
    id: 'morgana',
    k: morgana,
    c: 1,
    t: [traits[blackRose], traits[visionary]],
    img: 'Morgana.png',
  },
  [nami]: {
    id: 'nami',
    k: nami,
    c: 3,
    t: [traits[emissary], traits[sorcerer]],
    img: 'Nami.png',
  },
  [nocturne]: {
    id: 'nocturne',
    k: nocturne,
    c: 2,
    t: [traits[automata], traits[quickstriker]],
    img: 'Nocturne.jpg',
  },
  [nunu]: {
    id: 'nunu',
    k: nunu,
    c: 3,
    t: [traits[experiment], traits[bruiser], traits[visionary]],
    img: 'Nunu.png',
  },
  [powder]: {
    id: 'powder',
    k: powder,
    c: 1,
    t: [traits[family], traits[ambusher], traits[scrap]],
    img: 'Powder.jpg',
  },
  [rell]: {
    id: 'rell',
    k: rell,
    c: 2,
    t: [traits[conqueror], traits[sentinel], traits[visionary]],
    img: 'Rell.png',
  },
  [renata]: {
    id: 'renata',
    k: renata,
    c: 2,
    t: [traits[chemBaron], traits[visionary]],
    img: 'Renata.png',
  },
  [renni]: {
    id: 'renni',
    k: renni,
    c: 3,
    t: [traits[chemBaron], traits[bruiser]],
    img: 'Renni.png',
  },
  [rumble]: {
    id: 'rumble',
    k: rumble,
    c: 5,
    t: [traits[junkerKing], traits[scrap], traits[sentinel]],
    img: 'Rumble.png',
  },
  [scar]: {
    id: 'scar',
    k: scar,
    c: 3,
    t: [traits[firelight], traits[watcher]],
    img: 'Scar.jpg',
  },
  [sett]: {
    id: 'sett',
    k: sett,
    c: 2,
    t: [traits[rebel], traits[bruiser]],
    img: 'Sett.png',
  },
  [sevika]: {
    id: 'sevika',
    k: sevika,
    c: 5,
    t: [traits[chemBaron], traits[highRoller], traits[pitFighter]],
    img: 'Sevika.jpg',
  },
  [silco]: {
    id: 'silco',
    k: silco,
    c: 4,
    t: [traits[chemBaron], traits[dominator]],
    img: 'Silco.jpg',
  },
  [singed]: {
    id: 'singed',
    k: singed,
    c: 1,
    t: [traits[chemBaron], traits[sentinel]],
    img: 'Singed.png',
  },
  [smeech]: {
    id: 'smeech',
    k: smeech,
    c: 3,
    t: [traits[chemBaron], traits[ambusher]],
    img: 'Smeech.jpg',
  },
  [steb]: {
    id: 'steb',
    k: steb,
    c: 1,
    t: [traits[enforcer], traits[bruiser]],
    img: 'Steb.jpg',
  },
  [swain]: {
    id: 'swain',
    k: swain,
    c: 3,
    t: [traits[conqueror], traits[formSwapper], traits[sorcerer]],
    img: 'Swain.png',
  },
  [tristana]: {
    id: 'tristana',
    k: tristana,
    c: 2,
    t: [traits[emissary], traits[artillerist]],
    img: 'Tristana.png',
  },
  [trundle]: {
    id: 'trundle',
    k: trundle,
    c: 2,
    t: [traits[scrap], traits[bruiser]],
    img: 'Trundle.png',
  },
  [twistedFate]: {
    id: 'twistedFate',
    k: twistedFate,
    c: 3,
    t: [traits[enforcer], traits[quickstriker]],
    img: 'TwistedFate.png',
  },
  [twitch]: {
    id: 'twitch',
    k: twitch,
    c: 4,
    t: [traits[experiment], traits[sniper]],
    img: 'Twitch.png',
  },
  [urgot]: {
    id: 'urgot',
    k: urgot,
    c: 2,
    t: [traits[experiment], traits[artillerist], traits[pitFighter]],
    img: 'Urgot.png',
  },
  [vander]: {
    id: 'vander',
    k: vander,
    c: 2,
    t: [traits[family], traits[watcher]],
    img: 'Vander.jpg',
  },
  [vex]: {
    id: 'vex',
    k: vex,
    c: 1,
    t: [traits[rebel], traits[visionary]],
    img: 'Vex.png',
  },
  [vi]: {
    id: 'vi',
    k: vi,
    c: 4,
    t: [traits[enforcer], traits[pitFighter]],
    img: 'Vi.png',
  },
  [violet]: {
    id: 'violet',
    k: violet,
    c: 1,
    t: [traits[family], traits[pitFighter]],
    img: 'Violet.jpg',
  },
  [vladimir]: {
    id: 'vladimir',
    k: vladimir,
    c: 2,
    t: [traits[blackRose], traits[sorcerer], traits[watcher]],
    img: 'Vladimir.png',
  },
  [zeri]: {
    id: 'zeri',
    k: zeri,
    c: 2,
    t: [traits[firelight], traits[sniper]],
    img: 'Zeri.png',
  },
  [ziggs]: {
    id: 'ziggs',
    k: ziggs,
    c: 2,
    t: [traits[scrap], traits[dominator]],
    img: 'Ziggs.png',
  },
  [zoe]: {
    id: 'zoe',
    k: zoe,
    c: 4,
    t: [traits[rebel], traits[sorcerer]],
    img: 'Zoe.png',
  },
  [zyra]: {
    id: 'zyra',
    k: zyra,
    c: 1,
    t: [traits[experiment], traits[sorcerer]],
    img: 'Zyra.png',
  },
};
