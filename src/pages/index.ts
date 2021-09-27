import welcome from "./welcome.page";
import signin from "./users/signin.page";
import _private from "./users/private.page";
import _private_redirect from "./users/private-redirect.page";
import _403 from "./errors/403.page";
import _404 from "./errors/404.page";

export { welcome, signin, _private, _private_redirect, _403, _404 };
export const pages = [welcome, signin, _private, _private_redirect, _403, _404];
export default pages;
