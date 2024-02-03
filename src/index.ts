type AllowedValue = string | number | Date | boolean | null;

type User = {
  uniqueID?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  signUpDate?: Date | string;
  [key: string]: AllowedValue | undefined;
};

interface Bonboarding {
  identify: (user: User) => void;
}

declare global {
  interface Window {
      Bonboarding: Bonboarding;
  }
}

const Bonboarding = (() => {
  let bbApiKey: string | null = null;

  type Event = {
    type: 'identify';
    data: User | null;
  }
  let events: Event[] = [];

  const init = (apiKey: string) => {
    bbApiKey = apiKey;

    if (typeof window !== 'undefined') {

      // Create a new script tag
      const script = document.createElement('script');

      // Append the API key
      script.setAttribute('data-bb-key', apiKey);

      // Set the src attribute to the URL of the JavaScript file
      script.src = 'https://go.bonboarding.com';

      // Set the onload event handler
      script.onload = onScriptLoad;

      // Append the script tag to the document's head
      document.head.appendChild(script);
    }
  };

  // This function will be called when the script has been loaded
  // and execute all queued events on window.Bonboarding
  const onScriptLoad = () => {
    if (events.length > 0) {
      events.forEach(event => {
        if (event.type === 'identify') {
          window.Bonboarding.identify(event.data as User);
        }
      });
      events = [];
    }
  }

  const identify = (user: User) => {
    if (!bbApiKey) {
      console.warn('Bonboarding has not been initialized with an API key.');
      return;
    }
    
    if (typeof window !== 'undefined' && !window.Bonboarding) {
      events.push({ type: 'identify', data: user });
    } else {
      window.Bonboarding.identify(user);
    }
  };

  return { init, identify };
})();

export default Bonboarding;