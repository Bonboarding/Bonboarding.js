# User Onboarding and Product Tours

### Add product tours and user onboarding flows to your web application with [Bonboarding](https://bonboarding.com).

<p align="center">
  <a href="https://bonboarding.com">
    <img src="https://raw.githubusercontent.com/bonboarding/bonboarding.js/blob/main/assets/header.png?raw=true" alt="Create interactive product tours with popups, step-by-step element highlighting, so your users can get familiar with your platform.">
  </a>
</p>


This package provides a wrapper around Bonboarding's JavaScript library, offering a simple and efficient way to integrate it into your web application.  
It supports modern JavaScript and TypeScript projects, and is designed to work seamlessly with popular build systems like Webpack, Browserify, and Rollup.

## Features

- **Easy Integration**: Bonboarding's script is effortlessly injected into your current page, activating the powerful features of our product tour creator without complex setup procedures.
- **Asynchronous Loading**: Method calls are queued efficiently, ensuring that Bonboarding's functionality is accessible even if the script has not loaded yet, enhancing your app's performance and user experience.
- **TypeScript Support**: For projects utilizing TypeScript, Bonboarding provides full type support, enabling you to leverage strong typing for better development workflows and error handling.

## Installation

To get started with Bonboarding in your project, follow these simple installation instructions:

```bash
npm install bonboarding --save
```

Or if you prefer using Yarn:

```bash
yarn add bonboarding
```

Bonboarding is suitable for modern web applications utilizing build systems like Webpack, Browserify, or Rollup, making it a versatile choice for a wide range of projects.

## Usage

### Initializing Bonboarding

To begin using Bonboarding, you first need to initialize it with your **[API key](https://app.bonboarding.com/integration)** - if you don't have one, you can sign up for a free account at [bonboarding.com](https://bonboarding.com).

```javascript
import Bonboarding from 'bonboarding';

Bonboarding.init('YOUR_API_KEY');
```

### Identifying Users

To provide a personalized experience, you can identify users with Bonboarding. This is particularly useful for tracking user progress through tours across different pages:

```javascript
Bonboarding.identify({
  uniqueID: 'user_123',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
  signUpDate: new Date(),
});
```

It's highly recommended to identify users as soon as they log in or sign up, so you can track their progress and provide a more tailored experience.

### Using on Multiple Pages

Bonboarding's flexible design allows you to initialize it once and then identify users or trigger tours from any page within your application. Simply call the relevant methods wherever needed, and Bonboarding will handle the rest.

## Documentation

For comprehensive details on all the features and capabilities of Bonboarding, including advanced configurations, API references, and best practices, please visit our full documentation at [docs.bonboarding.com](https://docs.bonboarding.com).
