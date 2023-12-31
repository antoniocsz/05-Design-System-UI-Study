/** @type { import('@storybook/react-vite').StorybookConfig } */
import { themes } from "@storybook/theming"


const config = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    theme: themes.dark
  },
  viteFinal: (baseConfig, { configType }) => {
    if (configType === 'PRODUCTION') {
      baseConfig.base = '/05-Design-System-UI-Study/'
    }

    return baseConfig
  }
};
export default config;
