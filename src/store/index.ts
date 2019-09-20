import { FirebaseState } from "services/firebase/guide/types";
import { GuideState } from "scenes/Main/data/guide/types";

export interface ApplicationState {
  firebase: FirebaseState,
  guide: GuideState
};
