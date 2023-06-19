/**
 * Edit the process interface to recognize custom Environment Variables/Magic Numbers
 * that define Authorization Provider credentials and secrets.
 * This allows our code to access the set values for Authorization purposes (i.e. process.env.PROVIDER_NAME_AUTH_VARIABLE).
 * For local testing, create a .env.local file at the same file level as this process.d.ts file,
 * then set each Envirnment Variable to the values generated by the chosen provider.
 */
declare namespace NodeJS {
    export interface ProcessEnv {
        AZURE_AD_CLIENT_ID: string
        AZURE_AD_CLIENT_SECRET: string
        AZURE_AD_TENANT_ID: string

        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string

    }
}