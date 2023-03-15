import Take5Logo from "./extensions/auth-logo.svg";
import Take5MenuLogo from "./extensions/menu-logo.jpeg";
import Take5Favicon from "./extensions/favicon.ico";

const myPrimaryColor = "#fb0000";

const config = {
  locales: ['ru'],
  auth: {
    logo: Take5Logo
  },
  menu: {
    logo: Take5MenuLogo
  },
  head: {
    favicon: Take5Favicon
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
