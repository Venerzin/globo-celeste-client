import { IMagics } from "./IMagics"

export interface IPlayer{

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
}