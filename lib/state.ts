import {create} from "zustand";

type IAuth ={
	email: string | null;
	setEmail: (input: string | null) => void;
}
export const useCurrentUserStore = create<IAuth>((set)=> ({
	email: null,
	setEmail: (input: string | null) => set({email: input})
}))