import { create } from "zustand";
import { IMagics } from "../../interfaces/IMagics";

export interface PlayerProps{
    id: string
    nickname: string
    specie: string
    rpgClassId: string | null
    level: number
    fragments: number
    crystalsToUp: number
    totalCrystals: number
    strength: number
    dexterity: number
    constitution: number
    inteligence: number
    wisdom: number
    charisma: number
    skills: string
    personalityTraits: string
    ideals: string
    bonds: string
    flaws: string
    deathsaves: string
    attacks: string
    equipament: string
    other: string
    featureAndTraits: string
    pc: number
    pp: number
    pe: number
    po: number
    pl: number
    magics: IMagics
    userId: string

    ca: number,
    displacement: number,
    initiative: number,

    currentLife: number,
    lifeDices: string,
    maxLife: number,
    temporaryLife: number,

    inspiration: number,
    passivePerception: number,
    proficiencyBonus: number,
}

interface ActionsProps{
    updateUser: (user: PlayerProps) => void;
}

interface StoreProps{
    state: PlayerProps;
    actions: ActionsProps;
}

const usePlayerStore = create<StoreProps>()((set) => ({
    state: {
        id: "",

        nickname: "",
        specie: "",
        rpgClassId: "",
        level: 0,
        fragments: 0,
        crystalsToUp: 0,
        totalCrystals: 0,

        strength: 0,
        dexterity: 0,
        constitution: 0,
        inteligence: 0,
        wisdom: 0,
        charisma: 0,
        skills: "",

        ca: 0,
        displacement: 0,
        initiative: 0,

        currentLife: 0,
        lifeDices: "1d8",
        maxLife: 0,
        temporaryLife: 0,

        inspiration: 0,
        passivePerception: 0,
        proficiencyBonus: 0,

        personalityTraits: "",
        ideals: "",
        bonds: "",
        flaws: "",
        deathsaves: "",
        attacks: "",
        equipament: "",
        other: "",
        featureAndTraits: "",
        pc: 0,
        pp: 0,
        pe: 0,
        po: 0,
        pl: 0,
        magics: {
            zero: {},
            one: {},
            two: {},
            three: {},
            four: {},
            five: {},
            six: {},
            seven: {},
            eigth: {},
            nine: {},
        },
        userId: "",
    },

    actions: {
        updateUser: (user) => set(({ state }) => ({state: {...state, ...user} })),
    },
}));

export { usePlayerStore }