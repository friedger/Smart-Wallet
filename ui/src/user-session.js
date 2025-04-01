import { AppConfig, UserSession } from "@stacks/connect";
import { Storage } from "@stacks/storage";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });
export const gaiaStorage = new Storage({ userSession });
export const isAuthed = userSession.isUserSignedIn();