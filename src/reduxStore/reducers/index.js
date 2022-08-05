import { combineReducers } from "redux";

import { Login } from "./RLogin";

import { Erewardz } from "./RErewardz";
import { PowerUsers } from "./RPowerUser";
import { SeptUsers } from "./RSeptUsers";
import { TTP } from "./RTTP";
import { RiseUsers } from "./RRiseUsers";
import { RiseUsers2 } from "./RRiseUsers2";
import { LapUsers } from "./RLapUsers";
import { WhiteUsers } from "./RWhiteUsers";
import { SepPro } from "./RSepImpactProUsers";
import { AugPro } from "./RAugImpactProUsers";
import { Gimaestro } from "./RGimaestroUser";

export const rootReducer = combineReducers({
  login: Login,
  erewardz: Erewardz,
  powerUsers: PowerUsers,
  septUsers: SeptUsers,
  ttp: TTP,
  riseUsers: RiseUsers,
  riseUsers2: RiseUsers2,
  lapUsers: LapUsers,
  whiteUsers: WhiteUsers,
  sepPro: SepPro,
  augPro: AugPro,
  gimaestro: Gimaestro,
});
