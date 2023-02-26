import { TypeRootStackParamList } from "./Navigation/types";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TypeRootStackParamList{}
	}
}