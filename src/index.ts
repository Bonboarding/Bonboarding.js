type AllowedValue = string | number | Date | boolean | null;

type User = {
  uniqueID?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  signUpDate?: Date | string;
  [key: string]: AllowedValue | undefined;
};

const Bonboarding = (() => {
  let bbApiKey: string | null = null;

  const init = (apiKey: string) => {
    bbApiKey = apiKey;
    console.log(`Initialized with API Key: ${bbApiKey}`);
  };

  const identify = (user: User) => {
    if (!bbApiKey) {
      console.warn('Bonboarding has not been initialized with an API key.');
      return;
    }
    console.log(`Identifying with params:`, user);
  };

  return { init, identify };
})();

export default Bonboarding;