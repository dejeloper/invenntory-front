interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly [key: string]: string | undefined;
  readonly NG_APP_NAME: string;
  readonly NG_APP_API_URL: string;
}
