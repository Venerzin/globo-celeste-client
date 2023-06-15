import { create } from "zustand"

interface UserProps{
    id: string;
    firstName: string;
    lastName: string;
}
interface ActionsProps{
    updateUser: (user: UserProps) => void;
}

interface StoreProps{
    state: UserProps;
    actions: ActionsProps;
}

const useUserStore = create<StoreProps>()((set) => ({
    state: {
        id: "c33633bd-64ba-4b81-9e38-52e553de805a",
        firstName: "Vinicius",
        lastName: "Roza Barros",
    },
    actions: {
        updateUser: (user) => set(({ state }) => ({ state: {...state, ...user} })),
    }
}))

export { useUserStore }