interface Config {
  api_host_dev: string;
}

const config: Config = {
  api_host_dev: import.meta.env.VITE_API_URL,
};

export { config };
