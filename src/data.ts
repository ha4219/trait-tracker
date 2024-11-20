// champions
const akali = 1;
const ambessa = 2;
const amumu = 3;
const blitzcrank = 4;
const caitlyn = 5;
const camille = 6;
const cassiopeia = 7;
const corki = 8;
const darius = 9;
const draven = 10;
const drMundo = 11;
const ekko = 12;
const elise = 13;
const ezreal = 14;
const gangplank = 15;
const garen = 16;
const heimerdinger = 17;
const illaoi = 18;
const irelia = 19;
const jayce = 20;
const jinx = 21;
const kogMaw = 22;
const leblanc = 23;
const leona = 24;
const loris = 25;
const lux = 26;
const maddie = 27;
const malzahar = 28;
const mordekaiser = 29;
const morgana = 30;
const nami = 31;
const nocturne = 32;
const nunu = 33;
const powder = 34;
const rell = 35;
const renata = 36;
const renni = 37;
const rumble = 38;
const scar = 39;
const sett = 40;
const sevika = 41;
const silco = 42;
const singed = 43;
const smeech = 44;
const steb = 45;
const swain = 46;
const tristana = 47;
const trundle = 48;
const twistedFate = 49;
const twitch = 50;
const urgot = 51;
const vander = 52;
const vex = 53;
const vi = 54;
const violet = 55;
const vladimir = 56;
const zeri = 57;
const ziggs = 58;
const zoe = 59;
const zyra = 60;

// traits
// ??

export type Trait = {
  id: string;
  arr: number[];
  active: number[];
};

export const trait: { [key: string]: Trait } = {
  // origins
  academy: {
    id: 'academy',
    arr: [ezreal, heimerdinger, jayce, leona, lux],
    active: [3, 4, 5, 6],
  },
  automata: {
    id: 'automata',
    arr: [amumu, blitzcrank, kogMaw, malzahar, nocturne],
    active: [2, 4, 6],
  },
  blackRose: {
    id: 'blackRose',
    arr: [cassiopeia, elise, leblanc, morgana, vladimir],
    active: [3, 4, 5, 7],
  },
  chemBaron: {
    id: 'chemBaron',
    arr: [renata, renni, sevika, silco, singed, smeech],
    active: [3, 4, 5, 6, 7],
  },
  conqueror: {
    id: 'conqueror',
    arr: [ambessa, darius, draven, mordekaiser, rell, swain],
    active: [2, 4, 6, 9],
  },
  emissary: {
    id: 'emissary',
    arr: [ambessa, garen, nami, tristana],
    active: [1, 4],
  },
  enforcer: {
    id: 'enforcer',
    arr: [caitlyn, camille, loris, maddie, steb, twistedFate, vi],
    active: [2, 4, 6, 8, 10],
  },
  experiment: {
    id: 'experiment',
    arr: [drMundo, nunu, twitch, urgot, zyra],
    active: [3, 5, 7],
  },
  family: {
    id: 'family',
    arr: [powder, vander, violet],
    active: [3, 4, 5],
  },
  firelight: {
    id: 'firelight',
    arr: [ekko, scar, zeri],
    active: [2, 3, 4],
  },
  highRoller: {
    id: 'highRoller',
    arr: [sevika],
    active: [1],
  },
  junkerKing: {
    id: 'junkerKing',
    arr: [rumble],
    active: [1],
  },
  rebel: {
    id: 'rebel',
    arr: [akali, ezreal, illaoi, irelia, jinx, sett, vex, zoe],
    active: [3, 5, 7, 10],
  },
  scrap: {
    id: 'scrap',
    arr: [corki, ekko, gangplank, powder, rumble, trundle, ziggs],
    active: [2, 4, 6, 9],
  },

  // classes
  ambusher: {
    id: 'ambusher',
    arr: [camille, ekko, jinx, powder, smeech],
    active: [2, 3, 4, 5],
  },
  artillerist: {
    id: 'artillerist',
    arr: [corki, ezreal, tristana, urgot],
    active: [2, 4, 6],
  },
  bruiser: {
    id: 'bruiser',
    arr: [elise, nunu, renni, sett, steb, trundle],
    active: [2, 4, 6],
  },
  dominator: {
    id: 'dominator',
    arr: [blitzcrank, cassiopeia, drMundo, mordekaiser, silco, ziggs],
    active: [2, 4, 6],
  },
  formSwapper: {
    id: 'formSwapper',
    arr: [elise, gangplank, jayce, swain],
    active: [2, 4],
  },
  pitFighter: {
    id: 'pitFighter',
    arr: [draven, gangplank, sevika, urgot, vi, violet],
    active: [2, 4, 6, 8],
  },
  quickstriker: {
    id: 'quickstriker',
    arr: [akali, ambessa, nocturne, twistedFate],
    active: [2, 3, 4],
  },
  sentinel: {
    id: 'sentinel',
    arr: [illaoi, irelia, leona, loris, rell, rumble, singed],
    active: [2, 4, 6],
  },
  sniper: {
    id: 'sniper',
    arr: [caitlyn, kogMaw, maddie, twitch, zeri],
    active: [2, 4, 6],
  },
  sorcerer: {
    id: 'sorcerer',
    arr: [leblanc, lux, nami, swain, vladimir, zoe, zyra],
    active: [2, 4, 6, 8],
  },
  visionary: {
    id: 'visionary',
    arr: [heimerdinger, malzahar, morgana, nunu, rell, renata, vex],
    active: [2, 4, 6, 8],
  },
  watcher: {
    id: 'watcher',
    arr: [amumu, darius, garen, scar, vander, vladimir],
    active: [2, 4, 6],
  },

  // team-up
  // geniuses: [ekko, heimerdinger],
  // martialLaw: [ambessa, caitlyn],
  // menaces: [powder, silco],
  // reunion: [ekko, vi],
  // sisters: [vi, jinx],
  // unlikelyDuo: [jinx, sevika],
  // whatCloudHaveBeen: [vander, silco],
};
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
    t: [trait.rebel, trait.quickstriker],
    img: 'Akali.png',
  },
  [ambessa]: {
    id: 'ambessa',
    k: ambessa,
    c: 4,
    t: [trait.conqueror, trait.emissary, trait.quickstriker],
    img: 'Ambessa.png',
  },
  [amumu]: {
    id: 'amumu',
    k: amumu,
    c: 1,
    t: [trait.automata, trait.watcher],
    img: 'Amumu.png',
  },
  [blitzcrank]: {
    id: 'blitzcrank',
    k: blitzcrank,
    c: 3,
    t: [trait.automata, trait.dominator],
    img: 'Blitzcrank.png',
  },
  [caitlyn]: {
    id: 'caitlyn',
    k: caitlyn,
    c: 5,
    t: [trait.enforcer, trait.sniper],
    img: 'Caitlyn.png',
  },
  [camille]: {
    id: 'camille',
    k: camille,
    c: 3,
    t: [trait.enforcer, trait.ambusher],
    img: 'Camille.png',
  },
  [cassiopeia]: {
    id: 'cassiopeia',
    k: cassiopeia,
    c: 3,
    t: [trait.blackRose, trait.dominator],
    img: 'Cassiopeia.png',
  },
  [corki]: {
    id: 'corki',
    k: corki,
    c: 4,
    t: [trait.scrap, trait.artillerist],
    img: 'Corki.png',
  },
  [darius]: {
    id: 'darius',
    k: darius,
    c: 1,
    t: [trait.conqueror, trait.watcher],
    img: 'Darius.png',
  },
  [drMundo]: {
    id: 'drMundo',
    k: drMundo,
    c: 4,
    t: [trait.experiment, trait.dominator],
    img: 'DrMundo.png',
  },
  [draven]: {
    id: 'draven',
    k: draven,
    c: 1,
    t: [trait.conqueror, trait.pitFighter],
    img: 'Draven.png',
  },
  [ekko]: {
    id: 'ekko',
    k: ekko,
    c: 4,
    t: [trait.firelight, trait.ambusher, trait.scrap],
    img: 'Ekko.png',
  },
  [elise]: {
    id: 'elise',
    k: elise,
    c: 4,
    t: [trait.blackRose, trait.bruiser, trait.formSwapper],
    img: 'Elise.png',
  },
  [ezreal]: {
    id: 'ezreal',
    k: ezreal,
    c: 3,
    t: [trait.academy, trait.artillerist, trait.rebel],
    img: 'Ezreal.png',
  },
  [gangplank]: {
    id: 'gangplank',
    k: gangplank,
    c: 3,
    t: [trait.scrap, trait.formSwapper, trait.pitFighter],
    img: 'Gangplank.png',
  },
  [garen]: {
    id: 'garen',
    k: garen,
    c: 4,
    t: [trait.emissary, trait.watcher],
    img: 'Garen.png',
  },
  [heimerdinger]: {
    id: 'heimerdinger',
    k: heimerdinger,
    c: 4,
    t: [trait.academy, trait.visionary],
    img: 'Heimerdinger.png',
  },
  [illaoi]: {
    id: 'illaoi',
    k: illaoi,
    c: 4,

    t: [trait.rebel, trait.sentinel],
    img: 'Illaoi.png',
  },
  [irelia]: {
    id: 'irelia',
    k: irelia,
    c: 1,
    t: [trait.rebel, trait.sentinel],
    img: 'Irelia.png',
  },
  [jayce]: {
    id: 'jayce',
    k: jayce,
    c: 5,
    t: [trait.academy, trait.formSwapper],
    img: 'Jayce.png',
  },
  [jinx]: {
    id: 'jinx',
    k: jinx,
    c: 5,
    t: [trait.rebel, trait.ambusher],
    img: 'Jinx.png',
  },
  [kogMaw]: {
    id: 'kogMaw',
    k: kogMaw,
    c: 3,
    t: [trait.automata, trait.sniper],
    img: 'KogMaw.png',
  },
  [leblanc]: {
    id: 'leblanc',
    k: leblanc,
    c: 5,
    t: [trait.blackRose, trait.sorcerer],
    img: 'Leblanc.png',
  },
  [leona]: {
    id: 'leona',
    k: leona,
    c: 2,
    t: [trait.academy, trait.sentinel],
    img: 'Leona.png',
  },
  [loris]: {
    id: 'loris',
    k: loris,
    c: 3,
    t: [trait.enforcer, trait.sentinel],
    img: 'Loris.jpg',
  },
  [lux]: {
    id: 'lux',
    k: lux,
    c: 1,
    t: [trait.academy, trait.sorcerer],
    img: 'Lux.png',
  },
  [maddie]: {
    id: 'maddie',
    k: maddie,
    c: 1,
    t: [trait.enforcer, trait.sniper],
    img: 'Maddie.jpg',
  },
  [malzahar]: {
    id: 'malzahar',
    k: malzahar,
    c: 5,
    t: [trait.automata, trait.visionary],
    img: 'Malzahar.png',
  },
  [mordekaiser]: {
    id: 'mordekaiser',
    k: mordekaiser,
    c: 5,
    t: [trait.conqueror, trait.dominator],
    img: 'Mordekaiser.png',
  },
  [morgana]: {
    id: 'morgana',
    k: morgana,
    c: 1,
    t: [trait.blackRose, trait.visionary],
    img: 'Morgana.png',
  },
  [nami]: {
    id: 'nami',
    k: nami,
    c: 3,
    t: [trait.emissary, trait.sorcerer],
    img: 'Nami.png',
  },
  [nocturne]: {
    id: 'nocturne',
    k: nocturne,
    c: 2,
    t: [trait.automata, trait.quickstriker],
    img: 'Nocturne.jpg',
  },
  [nunu]: {
    id: 'nunu',
    k: nunu,
    c: 3,
    t: [trait.experiment, trait.bruiser, trait.visionary],
    img: 'Nunu.png',
  },
  [powder]: {
    id: 'powder',
    k: powder,
    c: 1,
    t: [trait.family, trait.ambusher, trait.scrap],
    img: 'Powder.jpg',
  },
  [rell]: {
    id: 'rell',
    k: rell,
    c: 2,
    t: [trait.conqueror, trait.sentinel, trait.visionary],
    img: 'Rell.png',
  },
  [renata]: {
    id: 'renata',
    k: renata,
    c: 2,
    t: [trait.chemBaron, trait.visionary],
    img: 'Renata.png',
  },
  [renni]: {
    id: 'renni',
    k: renni,
    c: 3,
    t: [trait.chemBaron, trait.bruiser],
    img: 'Renni.png',
  },
  [rumble]: {
    id: 'rumble',
    k: rumble,
    c: 5,
    t: [trait.junkerKing, trait.scrap, trait.sentinel],
    img: 'Rumble.png',
  },
  [scar]: {
    id: 'scar',
    k: scar,
    c: 3,
    t: [trait.firelight, trait.watcher],
    img: 'Scar.jpg',
  },
  [sett]: {
    id: 'sett',
    k: sett,
    c: 2,
    t: [trait.rebel, trait.bruiser],
    img: 'Sett.png',
  },
  [sevika]: {
    id: 'sevika',
    k: sevika,
    c: 5,
    t: [trait.chemBaron, trait.highRoller, trait.pitFighter],
    img: 'Sevika.jpg',
  },
  [silco]: {
    id: 'silco',
    k: silco,
    c: 4,
    t: [trait.chemBaron, trait.dominator],
    img: 'Silco.jpg',
  },
  [singed]: {
    id: 'singed',
    k: singed,
    c: 1,
    t: [trait.chemBaron, trait.sentinel],
    img: 'Singed.png',
  },
  [smeech]: {
    id: 'smeech',
    k: smeech,
    c: 3,
    t: [trait.chemBaron, trait.ambusher],
    img: 'Smeech.jpg',
  },
  [steb]: {
    id: 'steb',
    k: steb,
    c: 1,
    t: [trait.enforcer, trait.bruiser],
    img: 'Steb.jpg',
  },
  [swain]: {
    id: 'swain',
    k: swain,
    c: 3,
    t: [trait.conqueror, trait.formSwapper, trait.sorcerer],
    img: 'Swain.png',
  },
  [tristana]: {
    id: 'tristana',
    k: tristana,
    c: 2,
    t: [trait.emissary, trait.artillerist],
    img: 'Tristana.png',
  },
  [trundle]: {
    id: 'trundle',
    k: trundle,
    c: 2,
    t: [trait.scrap, trait.bruiser],
    img: 'Trundle.png',
  },
  [twistedFate]: {
    id: 'twistedFate',
    k: twistedFate,
    c: 3,
    t: [trait.enforcer, trait.quickstriker],
    img: 'TwistedFate.png',
  },
  [twitch]: {
    id: 'twitch',
    k: twitch,
    c: 4,
    t: [trait.experiment, trait.sniper],
    img: 'Twitch.png',
  },
  [urgot]: {
    id: 'urgot',
    k: urgot,
    c: 2,
    t: [trait.experiment, trait.artillerist, trait.pitFighter],
    img: 'Urgot.png',
  },
  [vander]: {
    id: 'vander',
    k: vander,
    c: 2,
    t: [trait.family, trait.watcher],
    img: 'Vander.jpg',
  },
  [vex]: {
    id: 'vex',
    k: vex,
    c: 1,
    t: [trait.rebel, trait.visionary],
    img: 'Vex.png',
  },
  [vi]: {
    id: 'vi',
    k: vi,
    c: 4,
    t: [trait.enforcer, trait.pitFighter],
    img: 'Vi.png',
  },
  [violet]: {
    id: 'violet',
    k: violet,
    c: 1,
    t: [trait.family, trait.pitFighter],
    img: 'Violet.jpg',
  },
  [vladimir]: {
    id: 'vladimir',
    k: vladimir,
    c: 2,
    t: [trait.blackRose, trait.sorcerer, trait.watcher],
    img: 'Vladimir.png',
  },
  [zeri]: {
    id: 'zeri',
    k: zeri,
    c: 2,
    t: [trait.firelight, trait.sniper],
    img: 'Zeri.png',
  },
  [ziggs]: {
    id: 'ziggs',
    k: ziggs,
    c: 2,
    t: [trait.scrap, trait.dominator],
    img: 'Ziggs.png',
  },
  [zoe]: {
    id: 'zoe',
    k: zoe,
    c: 4,
    t: [trait.rebel, trait.sorcerer],
    img: 'Zoe.png',
  },
  [zyra]: {
    id: 'zyra',
    k: zyra,
    c: 1,
    t: [trait.experiment, trait.sorcerer],
    img: 'Zyra.png',
  },
};
