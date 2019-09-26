import { FirebaseState } from "services/firebase/guide/types";
import { GuideState } from "scenes/Main/data/guide/types";
import { NavigationState } from "react-navigation";

export interface ApplicationState {
  nav: NavigationState,
  firebase: FirebaseState,
  guide: GuideState
};
